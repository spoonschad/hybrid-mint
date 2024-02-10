import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonListHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';

import { useEffect, useRef, useState } from 'react';
import { ConnectButton } from '../components/ConnectButton';
import { FireworksHandlers } from 'fireworks-js';
import Fireworks from '@fireworks-js/react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';

const Home: React.FC = () => {
    const ref = useRef<FireworksHandlers>(null)
    const [show,setShow] = useState<boolean>(false)
    const {wallet} = useWallet()
    const {connection}=useConnection()

    useEffect(() => {
        (async()=>{
        const mintAddress='3b76bmWM4kGgwWmn7mj8ER25KULSFVfgcBgSeE414X99'
        const walletAddress = wallet?.adapter.publicKey?.toString()
            // Find the token account for the user's wallet and the SPL token
            let response = await connection.getTokenAccountsByOwner(
                new PublicKey( wallet?.adapter.publicKey!), 
                { mint: new PublicKey(mintAddress) }
            );
        
            if (response.value.length > 0) {
                const tokenAccount = response.value[0].pubkey;
        
                // Get the balance
                const balance = await connection.getTokenAccountBalance(tokenAccount);
                console.log(`Balance: ${balance.value.amount}`);
            } else {
                console.log("Token account not found.");
            }
        
        })()
    },[wallet])
    return (
        <IonPage color='primary'>
            <IonHeader>
                <IonToolbar color='success'>
                    <IonButtons slot="start">
                    </IonButtons>
                    <IonTitle>
                        🧚 Hororo.world
                    </IonTitle>
                    <IonButtons slot='end'>
                        <ConnectButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen color='success' className='ion-text-center'>
                <IonGrid>
                    <IonRow>
                        <IonCol offsetSm='1' offsetMd='2' offsetLg='3' sizeSm='10' sizeXs='12' sizeMd='8' sizeLg='6'>
                            <IonCardContent >
                                <IonImg src={'/splash.png'} />
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div className='ion-text-center'>
                {show&&<Fireworks
        ref={ref}
        options={{ opacity: 0.2 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: 'transparent'
        }}
      />}
                    <IonText className='ion-text-center'>
                        <IonButton onClick={() => {
                            ((window as any).Jupiter as any).init({
                                endpoint: "https://holy-icy-tent.solana-mainnet.quiknode.pro/",
                                autoConnect:true,
                                onSuccess:()=>{
setShow(true);
                                },
                                strictTokenList:false,
                                formProps: {
                                    fixedInputMint:true,
                                    initialInputMint:'So11111111111111111111111111111111111111112',
                                    fixedOutputMint: true,
                                    initialOutputMint: "3b76bmWM4kGgwWmn7mj8ER25KULSFVfgcBgSeE414X99",
                                },
                            });
// window.open('https://raydium.io/swap/?outputCurrency=3b76bmWM4kGgwWmn7mj8ER25KULSFVfgcBgSeE414X99');
                        }} expand='full' size='large' color='success'>
                            swap
                        </IonButton>

                    </IonText>
                </div>
            </IonContent >
            <IonFooter>
                <IonToolbar color='success'>

                    <IonTitle>
                    </IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage >
    );
};

export default Home;
