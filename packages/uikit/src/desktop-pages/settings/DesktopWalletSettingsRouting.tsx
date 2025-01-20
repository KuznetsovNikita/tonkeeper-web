import { Route, Switch } from 'react-router-dom';
import { WalletSettingsRoute } from '../../libs/routes';
import { ActiveRecovery, Recovery } from '../../pages/settings/Recovery';
import { WalletVersionPage } from '../../pages/settings/Version';
import { JettonsSettings } from '../../pages/settings/Jettons';
import styled from 'styled-components';
import { DesktopWalletSettingsPage } from './DesktopWalletSettingsPage';
import { DesktopConnectedAppsSettings } from './DesktopConnectedAppsSettings';
import { DesktopNftSettings } from './DesktopNftSettings';
import { MAMIndexesPage } from '../../pages/settings/MamIndexes';
import { LedgerIndexesPage } from '../../pages/settings/LedgerIndexes';
import { BatteryPage } from '../../pages/settings/Battery';
import { Notifications } from '../../pages/settings/Notification';
import { TwoFAPage } from '../../pages/settings/TwoFA';

const OldSettingsLayoutWrapper = styled.div`
    padding-top: 64px;
    position: relative;
`;

const OldSettingsRoutes = () => {
    return (
        <OldSettingsLayoutWrapper>
            <Switch>
                <Route path={`${WalletSettingsRoute.recovery}/:accountId`} component={Recovery} />
                <Route path={WalletSettingsRoute.recovery} component={ActiveRecovery} exact />
                <Route path={WalletSettingsRoute.jettons} component={JettonsSettings} />
            </Switch>
        </OldSettingsLayoutWrapper>
    );
};

export const DesktopWalletSettingsRouting = () => {
    return (
        <Switch>
            <Route path={WalletSettingsRoute.recovery} component={OldSettingsRoutes} />
            <Route path={WalletSettingsRoute.jettons} component={OldSettingsRoutes} />
            <Route
                path={WalletSettingsRoute.connectedApps}
                component={DesktopConnectedAppsSettings}
            />
            <Route path={WalletSettingsRoute.nft} component={DesktopNftSettings} />
            <Route path={WalletSettingsRoute.derivations} component={MAMIndexesPage} />
            <Route path={WalletSettingsRoute.battery} component={BatteryPage} />
            <Route path={WalletSettingsRoute.version} component={WalletVersionPage} />
            <Route path={WalletSettingsRoute.ledgerIndexes} component={LedgerIndexesPage} />
            <Route path={WalletSettingsRoute.twoFa} component={TwoFAPage} />
            <Route path={WalletSettingsRoute.notification} component={Notifications} />
            <Route path="*" component={DesktopWalletSettingsPage} />
        </Switch>
    );
};
