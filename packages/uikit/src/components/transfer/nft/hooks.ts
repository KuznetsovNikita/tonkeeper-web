import { useMutation, useQueryClient } from '@tanstack/react-query';
import { checkWalletPositiveBalanceOrDie } from '@tonkeeper/core/dist/service/transfer/common';
import { AccountsApi } from '@tonkeeper/core/dist/tonApiV2';
import { useAppContext, useWalletContext } from '../../../hooks/appContext';
import { useAppSdk } from '../../../hooks/appSdk';
import { useTranslation } from '../../../hooks/translation';
import { notifyError } from '../common';

export const useMinimalBalance = () => {
    const sdk = useAppSdk();
    const { api } = useAppContext();
    const walletState = useWalletContext();
    const { t } = useTranslation();
    const client = useQueryClient();

    return useMutation(async () => {
        const wallet = await new AccountsApi(api.tonApiV2).getAccount({
            accountId: walletState.active.rawAddress
        });
        try {
            checkWalletPositiveBalanceOrDie(wallet);
        } catch (e) {
            await notifyError(client, sdk, t, e);
        }
    });
};
