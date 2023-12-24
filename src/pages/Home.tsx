import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonListHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';

import { useState } from 'react';
import {ConnectButton} from '../components/ConnectButton';

const Home: React.FC = () => {
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
                    <IonText className='ion-text-center'>
                                <IonButton expand='full' size='large' color='success'>
        gib 
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
