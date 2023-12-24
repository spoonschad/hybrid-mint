import { IonButton, IonCard, IonChip, IonImg, IonProgressBar, IonTitle } from '@ionic/react';
import { Chain, useChainId, useContractRead, useContractWrite, useNetwork, useSwitchNetwork } from 'wagmi';
import { homeChain, mintContract } from '../config';
import { useEffect, useState } from 'react';
import { formatEther } from 'viem';
import MintButton from './MintButton';

interface ContainerProps {
  name: string;
}

export const MintCard: React.FC<ContainerProps> = () => {
  const chainId = useChainId();
  const { switchNetwork } = useSwitchNetwork({ chainId: homeChain.id })
  const { chain, chains } = useNetwork()
  const [hash, setHash] = useState<string | null>(null);
  useEffect(() => {
    switchNetwork && switchNetwork(homeChain.id)
  }, [chainId, switchNetwork, chain])
  const { data: price } = useContractRead({ ...mintContract as any, functionName: "packPrice" });
  const { data: name } = useContractRead({ ...mintContract as any, functionName: "name" });
  const { write: mintPack, isLoading, isSuccess, isError, error, status } = useContractWrite({
    ...mintContract,
    functionName: "mintPack",
    args: [1n],
    value: price as any
  })

  return (
    <IonCard>
      <MintButton />
    </IonCard>

  );
};
