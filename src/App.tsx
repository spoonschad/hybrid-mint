import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter, IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

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
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { mainnet } from 'viem/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Soon from './pages/Soon';


setupIonicReact();
const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)
const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [new InjectedConnector({ chains })],
})
const App: React.FC = () => {
  return (
    <IonApp>
      <WagmiConfig config={config}>
        <IonReactHashRouter>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/mint" exact={true}>
            <Mint />
          </Route>
          <Route path="/soon" exact={true}>
            <Soon />
          </Route>
        </IonReactHashRouter>
      </WagmiConfig>

    </IonApp>
  );
};

export default App;
