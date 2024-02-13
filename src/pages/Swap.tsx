import {
    IonButton,
    IonContent,
    IonFooter,
    IonInput,
    IonLabel,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonText,
    IonTitle,
    IonToolbar
  } from "@ionic/react";
  
  import { useConnection, useWallet } from "@solana/wallet-adapter-react";
  import { useEffect, useState } from "react";
  import Menu from "../components/Menu";
import { PublicKey, } from "@solana/web3.js";
import { progams, spl_tokens } from "../config";
  
  const Bridge: React.FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction ,wallet} = useWallet();
    const [amount, setAmount] = useState<string>('');
    const [status, setStatus] = useState<string>('idle');
    const [from, setFrom] = useState<string>('nft');
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const [fairLaunch,setFairLaunch] = useState<any>(null);
    const handleAmountChange = (event: CustomEvent) => {
      setAmount(event.detail.value);
    };
    console.log(publicKey)
  
useEffect(() => {
    const fetchTokenBalance = async () => {
      try {
        if (!publicKey) {
          console.log("Wallet not connected or public key not available.");
          return; // Early return if wallet is not connected or public key is unavailable
        }
  
        console.log("OK");
        // Find the token account for the user's wallet and the SPL token
        let response = await connection.getTokenAccountsByOwner(publicKey,{mint:new PublicKey(spl_tokens.token),programId: new PublicKey(progams.spl_22)});
  
        if (response.value.length > 0) {
          const tokenAccount = response.value[0].pubkey;

          // Get the balance
          const balance = await connection.getTokenAccountBalance(tokenAccount);
          console.log(`Balance: ${balance.value.amount}`);
        } else {
          console.log("Token account not found.");
        }
      } catch (error) {
        console.error("Failed to fetch token balance:", error);
      }
    };
  
    fetchTokenBalance();
  }, [wallet, connection]); // 
    const handleBridgeTokenToNFT = async () => {
      // Implement token to NFT bridging logic
      setStatus('loading');
      try {
        // Placeholder for actual bridging logic
        // setResult(...);
        setStatus('success');
      } catch (err) {
        setError('Bridging failed');
        setStatus('error');
      }
    };
  
    const handleBridgeNFTToToken = async () => {
      // Implement NFT to token bridging logic
      setStatus('loading');
      try {
        // Placeholder for actual bridging logic
        // setResult(...);
        setStatus('success');
      } catch (err) {
        setError('Bridging failed');
        setStatus('error');
      }
    };
    const TEST_PLATFORM_FEE_AND_ACCOUNTS = {
        referralAccount: new PublicKey(
          "6F8fGQXso34nhubZtEZv8oUSoJgu3Wxu2o5nbSYcr3kF",
        ),
        feeBps: 100,
      };
    useEffect(() => {
        (window as any).Jupiter.init({
            displayMode: "integrated",
            integratedTargetId: "integrated-terminal",
            platformFeeAndAccounts: TEST_PLATFORM_FEE_AND_ACCOUNTS,
                       endpoint: "https://holy-icy-tent.solana-mainnet.quiknode.pro",
          });
          
    },[])
    return (
      <IonPage color="primary">
        <Menu />
        <IonContent fullscreen color="dark" className="ion-text-center">
        <div id="integrated-terminal"></div>
               </IonContent>
      </IonPage>
    );
  };
  
  export default Bridge;
  