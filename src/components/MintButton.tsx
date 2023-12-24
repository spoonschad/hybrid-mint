import { IonButton, IonChip, IonItem, IonList, IonProgressBar, IonText } from '@ionic/react';
import { useEffect, useState } from 'react';
import { formatEther } from 'viem';
import { useChainId, useContractRead, useContractWrite, useNetwork, useSwitchNetwork } from 'wagmi';
import { homeChain, mintContract } from '../config';

interface ContainerProps {
    name: string;
}

const MintButton: React.FC = () => {
    const chainId = useChainId();
    const { switchNetwork } = useSwitchNetwork({ chainId: homeChain.id })
    const { chain, chains } = useNetwork()
    const [hash, setHash] = useState<string | null>(null);
    useEffect(() => {
        switchNetwork && chainId !== homeChain.id && switchNetwork(homeChain.id)
    }, [chainId, switchNetwork])
    const { data: price } = useContractRead({ ...mintContract as any, functionName: "packPrice" });
    const { data: name } = useContractRead({ ...mintContract as any, functionName: "name" });
    const { write: mintPack, isLoading, isSuccess, isError, error, status } = useContractWrite({
        ...mintContract,
        functionName: "mintPack",
        args: [1n],
        value: price as any
    })

    return (
        <IonList>
            <IonButton color='tertiary' fill='solid' disabled={!mintPack} onClick={() => mintPack()}>
                mintPack
                <IonChip color='success'>
                    {price ? formatEther(price as any) : <></>} {homeChain.nativeCurrency.symbol}
                </IonChip>
            </IonButton>
            {status}
            {isLoading && <IonProgressBar type='indeterminate' />}
            {isError && <IonItem><IonText color='danger'>{error?.message}</IonText></IonItem>}
            {isSuccess && <IonChip color='success'>Minted</IonChip>}
        </IonList>

    );
};

export default MintButton;
