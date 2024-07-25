import {
    TonWalletStandard,
    WalletVersion as WalletVersionType,
    WalletVersions,
    walletVersionText
} from '@tonkeeper/core/dist/entries/wallet';
import { formatAddress, toShortValue } from '@tonkeeper/core/dist/utils/common';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { InnerBody } from '../../components/Body';
import { SubHeader } from '../../components/SubHeader';
import { Body2, Label1 } from '../../components/Text';
import { useTranslation } from '../../hooks/translation';
import { useIsActiveWalletKeystone } from '../../state/keystone';
import { useIsActiveWalletLedger } from '../../state/ledger';
import {
    useActiveStandardTonWallet,
    useStandardTonWalletVersions,
    useActiveAccount,
    useAddTonWalletVersionToActiveAccount,
    useRenameTonWallet,
    useMutateActiveTonWallet
} from '../../state/wallet';
import { ListBlock, ListItem, ListItemPayload } from '../../components/List';
import { toFormattedTonBalance } from '../../hooks/balance';
import { Button } from '../../components/fields/Button';
import { Address } from '@ton/core';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../libs/routes';
import { Notification } from '../../components/Notification';
import { UpdateWalletName } from '../../components/create/WalletName';
import { SkeletonList } from '../../components/Skeleton';

const LedgerError = styled(Body2)`
    margin: 0.5rem 0;
    color: ${p => p.theme.accentRed};
`;

const TextContainer = styled.span`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
`;

const Body2Secondary = styled(Body2)`
    color: ${props => props.theme.textSecondary};
`;

export const WalletVersion = () => {
    const { t } = useTranslation();
    const isLedger = useIsActiveWalletLedger();
    const isKeystone = useIsActiveWalletKeystone();
    const currentWallet = useActiveStandardTonWallet();
    const currentAccount = useActiveAccount();
    const currentAccountWalletsVersions = currentAccount.activeDerivationTonWallets;

    const { mutateAsync: selectWallet, isLoading: isSelectWalletLoading } =
        useMutateActiveTonWallet();
    const navigate = useNavigate();

    const { data: wallets } = useStandardTonWalletVersions(currentWallet.publicKey);

    const { mutateAsync: createWalletAsync, isLoading: isCreateWalletLoading } =
        useAddTonWalletVersionToActiveAccount();
    const { mutateAsync: renameWallet, isLoading: isRenameWalletLoading } = useRenameTonWallet();

    const onOpenWallet = async (address: Address) => {
        if (address.toRawString() !== currentWallet.rawAddress) {
            await selectWallet(address.toRawString());
        }
        navigate(AppRoute.home);
    };

    const [editWalletNameNotificationPayload, setEditWalletNameNotificationPayload] = useState<
        TonWalletStandard | undefined
    >();

    const onAddWallet = async (w: { version: WalletVersionType; address: Address }) => {
        const newWallet = await createWalletAsync({
            version: w.version
        });
        setEditWalletNameNotificationPayload(newWallet);
    };

    const onChangeName = async (args: { name: string; emoji: string; id: string }) => {
        await renameWallet(args);
        setEditWalletNameNotificationPayload(undefined);
    };

    if (!wallets) {
        return (
            <>
                <SubHeader title={t('settings_wallet_version')} />
                <InnerBody>
                    <SkeletonList size={WalletVersions.length} />
                </InnerBody>
            </>
        );
    }

    const isLoading = isSelectWalletLoading || isCreateWalletLoading || isRenameWalletLoading;

    return (
        <>
            <SubHeader title={t('settings_wallet_version')} />
            <InnerBody>
                {!isLedger && !isKeystone && (
                    <ListBlock>
                        {wallets.map(wallet => {
                            const isWalletAdded = currentAccountWalletsVersions.some(
                                w => w.rawAddress === wallet.address.toRawString()
                            );

                            return (
                                <ListItem hover={false} key={wallet.address.toRawString()}>
                                    <ListItemPayload>
                                        <TextContainer>
                                            <Label1>{walletVersionText(wallet.version)}</Label1>
                                            <Body2Secondary>
                                                {toShortValue(formatAddress(wallet.address))}
                                                &nbsp;·&nbsp;
                                                {toFormattedTonBalance(wallet.tonBalance)}&nbsp;TON
                                                {wallet.hasJettons &&
                                                    t('wallet_version_and_tokens')}
                                            </Body2Secondary>
                                        </TextContainer>
                                        {isWalletAdded ? (
                                            <Button
                                                onClick={() => onOpenWallet(wallet.address)}
                                                loading={isLoading}
                                            >
                                                {t('open')}
                                            </Button>
                                        ) : (
                                            <Button
                                                primary
                                                onClick={() => onAddWallet(wallet)}
                                                loading={isLoading}
                                            >
                                                {t('add')}
                                            </Button>
                                        )}
                                    </ListItemPayload>
                                </ListItem>
                            );
                        })}
                    </ListBlock>
                )}
                {isLedger && <LedgerError>{t('ledger_operation_not_supported')}</LedgerError>}
                {isKeystone && <LedgerError>{t('operation_not_supported')}</LedgerError>}
            </InnerBody>
            <UpdateWalletNameNotification
                wallet={editWalletNameNotificationPayload}
                isOpen={!!editWalletNameNotificationPayload}
                onClose={onChangeName}
            />
        </>
    );
};

const UpdateWalletNameNotification: FC<{
    isOpen: boolean;
    onClose: (isAdded: { name: string; emoji: string; id: string }) => void;
    wallet: TonWalletStandard | undefined;
}> = ({ isOpen, onClose, wallet }) => {
    return (
        <Notification
            isOpen={isOpen}
            handleClose={() =>
                onClose({ name: wallet!.name, emoji: wallet!.emoji, id: wallet!.id })
            }
        >
            {() => (
                <UpdateWalletName
                    name={wallet?.name || ''}
                    submitHandler={val => onClose({ ...val, id: wallet!.id })}
                    walletEmoji={wallet?.emoji || ''}
                />
            )}
        </Notification>
    );
};
