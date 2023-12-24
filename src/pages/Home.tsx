import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonMenuButton, IonPage, IonProgressBar, IonRoute, IonRow, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import ConnectButton from '../components/ConnectButton';
import { MintCard } from '../components/MintCard';
import { logoDiscord, logoTwitter } from 'ionicons/icons';
import { useState } from 'react';
import { useAccount } from 'wagmi';

const Home: React.FC = () => {
    console.log(logoDiscord);
    const [status, setStatus] = useState<'init' | 'begin-mint' | 'minting' | 'minted'>('init')
    const { address } = useAccount()
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='dark'>
                    <IonButtons slot="start">
                        <IonIcon name={logoDiscord} />
                        <IonAvatar>
                            <IonImg src={'/logo.png'} />
                        </IonAvatar>
                    </IonButtons>
                    <IonGrid >
                        <IonRow>
                            <IonCol sizeXs='3' sizeMd='2' offsetMd='3' offsetXs='1'>
                                1) WHAT
                            </IonCol>
                            <IonCol sizeMd={'2'} sizeXs='3'>
                                GENESIS
                            </IonCol>
                            <IonCol sizeMd={'2'} sizeXs='3'>
                                ALPHA
                            </IonCol>
                            <IonCol sizeMd={'2'} sizeXs='2'>
                                FUQ
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonButtons slot='end'>

                        {/* <ConnectButton /> */}
                        {/* <IonButton onClick={() => { alert('soon') }} color={'light'} fill='clear'>
                                                <img src={'https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.png'} style={{ height: 30 }} />
                                            </IonButton> */}
                        <IonButton color='light' fill='clear' href='https://twitter.com/SLiNGOOR' target='_new'>
                            <img src={'/x-white.png'} style={{ height: 30 }} />
                        </IonButton>
                        <IonButton color='light' fill='clear' href='https://discord.gg/homiesofweb3' target='_new'>
                            <img src={'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg'} style={{ height: 30 }} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen color='dark' className='ion-text-center'>
                <IonGrid>
                    <IonRow>
                        <IonCol offsetSm='1' offsetMd='2' offsetLg='3' sizeSm='10' sizeXs='12' sizeMd='8' sizeLg='6'>
                            <IonCard color={'dark'}>
                                <IonCardContent color='dark'>

                                    <br />
                                    <br />
                                    <IonText style={{ letterSpacing: 3 }} color='success'>
                                        THE FOREVER ACCESS HOMIES GENESIS PASS
                                    </IonText>
                                    {status === 'minting' && <>
                                        <IonProgressBar type='indeterminate' />
                                    </>}

                                    {(status === 'init' || status === 'minted') && <IonImg src={'/homies.png'} />}
                                    <div className='ion-text-center'>
                                        {status === 'begin-mint' && <>
                                            <br />
                                            <br />
                                            <div>
                                                <IonText color='success'>
                                                    Homie Whitelist:<br /> Free
                                                </IonText>
                                            </div>
                                            <div>
                                                <IonText color='success'>
                                                    Homie Allowlist:<br /> 0.069
                                                </IonText>
                                            </div>
                                            <div>
                                                <IonText color='success'>
                                                    Public:<br /> 0.1
                                                </IonText>
                                            </div>
                                        </>}
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent >
            <IonFooter >
                <div className='ion-text-center'>

                    {status !== 'init' && <ConnectButton hideLogout />}
                    {status === 'minting' && <IonButton fill='solid' color='success' disabled>
                        MINTING
                    </IonButton>}
                    {status === 'minted' && <>
                        Minted
                    </>}
                    {status == 'init' && <IonButton fill='outline' color='success' onClick={() => {
                        setStatus('begin-mint')
                    }}>
                        Mint
                    </IonButton>}
                    {status == 'begin-mint' && address && <IonButton fill='outline' color='success' onClick={() => {
                        setStatus('minting')
                        setTimeout(() => {
                            setStatus('minted')
                        }, 3000)
                    }}>
                        {status === 'begin-mint' ? 'Mint' : 'Minting'}
                    </IonButton>}
                </div>

                <div className='ion-text-center' style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src='genesis.png' />

                </div>
            </IonFooter>
        </IonPage >
    );
};

export default Home;
