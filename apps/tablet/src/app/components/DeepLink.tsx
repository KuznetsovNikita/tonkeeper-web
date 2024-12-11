import { ConnectItemReply, DAppManifest } from '@tonkeeper/core/dist/entries/tonConnect';
import { TonConnectParams } from '@tonkeeper/core/dist/service/tonConnect/connectionService';
import { TonConnectNotification } from '@tonkeeper/uikit/dist/components/connect/TonConnectNotification';
import {
    useResponseConnectionMutation,
    useGetConnectInfo
} from '@tonkeeper/uikit/dist/components/connect/connectHook';
import { useEffect, useState } from 'react';
import { subscribeToTonOrTonConnectUrlOpened, tonConnectSSE } from "../../libs/tonConnect";

export const DeepLinkSubscription = () => {
    const [params, setParams] = useState<TonConnectParams | null>(null);

    const { mutateAsync, reset } = useGetConnectInfo();
    const { mutateAsync: responseConnectionAsync, reset: responseReset } =
      useResponseConnectionMutation();

    const handlerClose = async (replyItems?: ConnectItemReply[], manifest?: DAppManifest) => {
        if (!params) return;
        responseReset();
        try {
            await responseConnectionAsync({ params, replyItems, manifest });
        } finally {
            setParams(null);
            await tonConnectSSE.reconnect();
        }
    };

    useEffect(() => {
        return subscribeToTonOrTonConnectUrlOpened(async (url: string) => {
            reset();
            setParams(await mutateAsync(url));
        });
    }, []);

    return (
      <TonConnectNotification
        origin={undefined}
        params={params?.request ?? null}
        handleClose={handlerClose}
      />
    );
};
