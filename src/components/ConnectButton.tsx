import { IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Chain, useAccount, useBalance, useChainId, useConnect, useNetwork, useSwitchNetwork } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { homeChain } from '../config';

interface ContainerProps {
    name: string;
}

const ConnectButton: React.FC<{hideLogout?:boolean}> = ({hideLogout}) => {
    const chainId = useChainId();
    const { switchNetwork } = useSwitchNetwork({ chainId: homeChain.id })
    const { chain, chains } = useNetwork()
    const { address } = useAccount();
    const [hash, setHash] = useState<string | null>(null);
    const connector = new InjectedConnector()
    const { connect } = useConnect()
    const account = useAccount()
    const balance = useBalance()

    useEffect(() => {
        switchNetwork && switchNetwork(homeChain.id)
    }, [chainId, switchNetwork, chain])
    if(hideLogout&& address){
        return null;
    }
    return typeof address === 'undefined' ?
        <IonButton color='tertiary' onClick={() => connect({ connector })}>
            Connect
        </IonButton> : <IonButton color='tertiary'>
            {address.slice(0, 6) + "..." + address.slice(35, 42)}
        </IonButton>;
}
export default ConnectButton;
