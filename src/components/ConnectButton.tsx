import { IonButton, IonItem, IonPopover } from '@ionic/react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';

export const ConnectButton:React.FC=()=> {
return <WalletMultiButton style={{color:'white'}}/>
}