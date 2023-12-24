import { IonButton, IonChip, IonItem, IonList, IonProgressBar, IonText } from '@ionic/react';

interface ContainerProps {
    name: string;
}

const MintButton: React.FC = () => {

    return (
        <IonList>
            <IonButton color='tertiary' fill='solid'>
                mint
            </IonButton>
        </IonList>

    );
};

export default MintButton;
