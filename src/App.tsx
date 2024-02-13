import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter, IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import '@solana/wallet-adapter-react-ui/styles.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Soon from './pages/Soon';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';

import {PhantomWalletAdapter} from '@solana/wallet-adapter-wallets'
import Bonds from './pages/Bonds';
import Bridge from './pages/Bridge';
import Swap from './pages/Swap';
setupIonicReact();
const App: React.FC = () => {
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = 'https://holy-icy-tent.solana-mainnet.quiknode.pro/';
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);


  const wallets = useMemo(
    () => [
        /**
         * Wallets that implement either of these standards will be available automatically.
         *
         *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
         *     (https://github.com/solana-mobile/mobile-wallet-adapter)
         *   - Solana Wallet Standard
         *     (https://github.com/solana-labs/wallet-standard)
         *
         * If you wish to support a wallet that supports neither of those standards,
         * instantiate its legacy wallet adapter here. Common legacy adapters can be found
         * in the npm package `@solana/wallet-adapter-wallets`.
         */
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
);

  return (
    <IonApp>
        <ConnectionProvider config={{wsEndpoint:"wss://holy-icy-tent.solana-mainnet.quiknode.pro/"}} endpoint={endpoint} >
          <WalletProvider autoConnect wallets={[]} >
            <WalletModalProvider  >
              <IonReactRouter>
              <Route path="/" >
<Swap/>
</Route>
              </IonReactRouter>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>

    </IonApp>
  );
};

export default App;
