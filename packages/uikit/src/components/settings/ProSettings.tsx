import { CryptoCurrency } from '@tonkeeper/core/dist/entries/crypto';
import { isPaidSubscription, ProState } from '@tonkeeper/core/dist/entries/pro';
import { formatAddress, toShortValue } from '@tonkeeper/core/dist/utils/common';
import { ProServiceTier } from '@tonkeeper/core/src/tonConsoleApi';
import { FC, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { WalletStateContext } from '../../hooks/appContext';
import { useNotifyError } from '../../hooks/appSdk';
import { useFormatCoinValue } from '../../hooks/balance';
import { useEstimateTransfer } from '../../hooks/blockchain/useEstimateTransfer';
import { useSendTransfer } from '../../hooks/blockchain/useSendTransfer';
import { useTranslation } from '../../hooks/translation';
import { useAccountState } from '../../state/account';
import {
    ConfirmState,
    useCreateInvoiceMutation,
    useProLogout,
    useProPlans,
    useProState,
    useSelectWalletMutation,
    useWaitInvoiceMutation
} from '../../state/pro';
import { useWalletState } from '../../state/wallet';
import { InnerBody } from '../Body';
import { SubscriptionStatus } from '../desktop/aside/SubscriptionInfo';
import { Button } from '../fields/Button';
import { Radio } from '../fields/Checkbox';
import { Input } from '../fields/Input';
import { DoneIcon } from '../Icon';
import { ColumnText } from '../Layout';
import { ListBlock, ListItem, ListItemPayload } from '../List';
import { Notification } from '../Notification';
import { SubHeader } from '../SubHeader';
import { Body1, Label1, Title } from '../Text';
import { ConfirmView } from '../transfer/ConfirmView';

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Line = styled.div`
    margin-bottom: 32px;
`;

const Icon = styled.img`
    width: 144px;
    height: 144px;
    margin-bottom: 16px;
`;

const Description = styled(Body1)`
    color: ${props => props.theme.textSecondary};
    margin-bottom: 16px;
`;

const WalletItem: FC<{ publicKey: string }> = ({ publicKey }) => {
    const { t } = useTranslation();
    const { data: wallet } = useWalletState(publicKey);

    const address = wallet
        ? toShortValue(formatAddress(wallet.active.rawAddress, wallet.network))
        : undefined;

    return (
        <ColumnText
            noWrap
            text={wallet?.name ? wallet.name : `${t('wallet_title')}`}
            secondary={address}
        />
    );
};

const SelectLabel = styled(Label1)`
    padding-left: 16px;
    margin-bottom: 8px;
`;

const SelectWallet: FC<{ onClose: () => void }> = ({ onClose }) => {
    const { t } = useTranslation();
    const { data: accounts } = useAccountState();
    const { mutateAsync, error } = useSelectWalletMutation();
    useNotifyError(error);

    if (!accounts) return <></>;

    return (
        <>
            <SelectLabel>{t('select_wallet_for_authorization')}</SelectLabel>
            <ListBlock>
                {accounts.publicKeys.map(publicKey => (
                    <ListItem
                        key={publicKey}
                        onClick={() => mutateAsync(publicKey).then(() => onClose())}
                    >
                        <ListItemPayload>
                            <WalletItem publicKey={publicKey} />
                        </ListItemPayload>
                    </ListItem>
                ))}
            </ListBlock>
        </>
    );
};

const SelectIconWrapper = styled.span`
    padding-left: 0.5rem;
    color: ${props => props.theme.accentBlue};
    display: flex;
`;

const ProWallet: FC<{
    data: ProState;
    onClick: () => void;
    disabled?: boolean;
}> = ({ data, onClick, disabled }) => {
    return (
        <ListBlock>
            <ListItem onClick={() => !disabled && onClick()}>
                <ListItemPayload>
                    <WalletItem publicKey={data.wallet.publicKey} />
                    <SelectIconWrapper>
                        <DoneIcon />
                    </SelectIconWrapper>
                </ListItemPayload>
            </ListItem>
        </ListBlock>
    );
};

const SelectProPlans: FC<{
    plans: ProServiceTier[];
    selected: number | null;
    setPlan: (id: number) => void;
    disabled?: boolean;
}> = ({ plans, selected, setPlan, disabled }) => {
    const format = useFormatCoinValue();
    return (
        <>
            <ListBlock>
                {plans.map(plan => (
                    <ListItem key={plan.id} onClick={() => !disabled && setPlan(plan.id)}>
                        <ListItemPayload>
                            <ColumnText
                                noWrap
                                text={plan.name}
                                secondary={
                                    <>
                                        {plan.description ? (
                                            <>
                                                {plan.description}
                                                <br />
                                            </>
                                        ) : null}
                                        {format(plan.amount)} {CryptoCurrency.TON}
                                    </>
                                }
                            />
                            <Radio
                                disabled={disabled}
                                checked={selected === plan.id}
                                onChange={() => setPlan(plan.id)}
                            />
                        </ListItemPayload>
                    </ListItem>
                ))}
            </ListBlock>
        </>
    );
};

const ConfirmNotification: FC<{
    state: ConfirmState | null;
    onClose: (success?: boolean) => void;
    waitResult: (state: ConfirmState) => void;
}> = ({ state, onClose, waitResult }) => {
    const content = useCallback(() => {
        if (!state) return <></>;
        return (
            <WalletStateContext.Provider value={state.wallet}>
                <ConfirmBuyProService
                    {...state}
                    onClose={confirmed => {
                        if (confirmed) {
                            waitResult(state);
                            setTimeout(() => onClose(true), 3000);
                        } else {
                            onClose();
                        }
                    }}
                />
            </WalletStateContext.Provider>
        );
    }, [state]);

    return (
        <Notification isOpen={state != null} hideButton handleClose={() => onClose()} backShadow>
            {content}
        </Notification>
    );
};

const ConfirmBuyProService: FC<
    PropsWithChildren<
        {
            onBack?: () => void;
            onClose: (confirmed?: boolean) => void;
            fitContent?: boolean;
        } & ConfirmState
    >
> = ({ ...rest }) => {
    const estimation = useEstimateTransfer(rest.recipient, rest.assetAmount, false);
    const mutation = useSendTransfer(rest.recipient, rest.assetAmount, false, estimation.data!);

    return <ConfirmView estimation={estimation} {...mutation} {...rest} />;
};

const BuyProService: FC<{ data: ProState; setReLogin: () => void; onSuccess?: () => void }> = ({
    data,
    setReLogin,
    onSuccess
}) => {
    const { t } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);

    const [selectedPlan, setPlan] = useState<number | null>(null);
    const [promo, setPromo] = useState('');

    const [plans, promoCode] = useProPlans(promo);

    const { mutateAsync: createInvoice, isLoading: isInvoiceLoading } = useCreateInvoiceMutation();
    const { mutate: waitInvoice, isLoading: isInvoicePending } = useWaitInvoiceMutation();

    const isLoading = isInvoiceLoading || isInvoicePending;

    const [confirm, setConfirm] = useState<ConfirmState | null>(null);

    useEffect(() => {
        if (plans && plans[0] && selectedPlan == null) {
            setPlan(plans[0].id);
        }
    }, [plans]);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [ref.current]);

    const onSubmit = async () => {
        setConfirm(
            await createInvoice({
                state: data,
                tierId: selectedPlan,
                promoCode
            })
        );
    };

    return (
        <div>
            <ProWallet data={data} onClick={setReLogin} disabled={isLoading} />
            <SelectProPlans
                plans={plans ?? []}
                setPlan={setPlan}
                selected={selectedPlan}
                disabled={isLoading}
            />
            <Line>
                <Input
                    isSuccess={promoCode !== undefined}
                    disabled={isLoading}
                    value={promo}
                    onChange={setPromo}
                    label={t('battery_promocode_title')}
                    clearButton
                />
            </Line>
            <Line>
                <Button primary size="large" fullWidth loading={isLoading} onClick={onSubmit}>
                    {t('wallet_buy')}
                </Button>
            </Line>
            <ConfirmNotification
                state={confirm}
                onClose={success => {
                    if (success) {
                        onSuccess?.();
                    }
                    setConfirm(null);
                }}
                waitResult={waitInvoice}
            />
            <div ref={ref}></div>
        </div>
    );
};

const StatusText = styled(Label1)`
    text-align: center;
    margin: 16px 0 32px;
    display: block;
`;

const PreServiceStatus: FC<{ data: ProState; setReLogin: () => void }> = ({ data, setReLogin }) => {
    const { t } = useTranslation();

    const { mutate: logOut, isLoading, error } = useProLogout();
    useNotifyError(error);

    return (
        <div>
            <ProWallet data={data} onClick={setReLogin} />

            <StatusText>
                <SubscriptionStatus data={data} />
            </StatusText>

            <Button size="large" secondary fullWidth onClick={() => logOut()} loading={isLoading}>
                {t('settings_reset')}
            </Button>
        </div>
    );
};

const ProContent: FC<{ data: ProState; onSuccess?: () => void }> = ({ data, onSuccess }) => {
    const [reLogin, setReLogin] = useState(false);

    if (!data.hasWalletAuthCookie || reLogin) {
        return <SelectWallet onClose={() => setReLogin(false)} />;
    }
    if (isPaidSubscription(data.subscription)) {
        return <PreServiceStatus data={data} setReLogin={() => setReLogin(true)} />;
    }
    return <BuyProService data={data} setReLogin={() => setReLogin(true)} onSuccess={onSuccess} />;
};

export const ProSettingsContent: FC<{ showLogo?: boolean; onSuccess?: () => void }> = ({
    showLogo = true,
    onSuccess
}) => {
    const { t } = useTranslation();

    const { data } = useProState();

    return (
        <>
            <Block>
                {showLogo && <Icon src="https://tonkeeper.com/assets/icon.ico" />}
                <Title>{t('tonkeeper_pro')}</Title>
                <Description>{t('tonkeeper_pro_description')}</Description>
            </Block>
            {data && <ProContent key={data.wallet.rawAddress} data={data} onSuccess={onSuccess} />}
        </>
    );
};

export const ProSettings: FC = () => {
    return (
        <>
            <SubHeader />
            <InnerBody>
                <ProSettingsContent />
            </InnerBody>
        </>
    );
};
