import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonImg,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useEffect, useRef, useState } from "react";
import { ConnectButton } from "../components/ConnectButton";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Menu from "../components/Menu";

const Home: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <IonPage color="primary">

    <Menu/>
      <IonContent fullscreen color="tertiary" className="ion-text-center">
        <IonText className="ion-text-center">
          {/* <IonButton
            onClick={() => {
              ((window as any).Jupiter as any).init({
                endpoint: "https://holy-icy-tent.solana-mainnet.quiknode.pro/",
                autoConnect: true,
                onSuccess: () => {
                  setShow(true);
                },
                strictTokenList: false,
                formProps: {
                  fixedInputMint: true,
                  initialInputMint:
                    "So11111111111111111111111111111111111111112",
                  fixedOutputMint: true,
                  initialOutputMint:
                    "3b76bmWM4kGgwWmn7mj8ER25KULSFVfgcBgSeE414X99",
                },
              });
              // window.open('https://raydium.io/swap/?outputCurrency=3b76bmWM4kGgwWmn7mj8ER25KULSFVfgcBgSeE414X99');
            }}
            expand="full"
            size="large"
            color="success"
          >
            swap
          </IonButton> */}
        </IonText>
      </IonContent>
      <IonFooter>
        <IonToolbar color="tertiary">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
