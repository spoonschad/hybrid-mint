import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import ConnectButton from '../components/ConnectButton';
import { MintCard } from '../components/MintCard';
const Mint: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                    <IonButtons slot='end'>
                        <ConnectButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <MintCard name={name} />
            </IonContent>
        </IonPage>
    );
};

export default Mint;
