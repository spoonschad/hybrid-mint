import {
    IonButton,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonInput,
    IonLabel,
    IonPage,
    IonRow,
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
      <IonPage>
        <div className="div-block-69">
          <div className="div-block-80">
            <img src="images/Warning-icon.svg" alt="" className="image-33"/>
            <a href="https://leh.gg" className="link-7">Always make sure the url is &#x27;<span className="text-span-4">leh.gg&#x27;</span> bookmark it to be safe</a>
          </div>
          <div className="div-block-83">
            <a href="#" className="w-inline-block">
              <img src="/s.png" alt="" className="image-34"/></a>
            <div>
              <a href="#" className="link-8">Swap</a>
              <a href="#" className="link-8">Vault</a>
            </div>
          </div>
        </div>
        <IonContent fullscreen color="dark" className="ion-text-center">

<IonGrid>
    <IonRow>
        <IonCol offsetMd="3" sizeMd="6"  offsetSm="2" sizeSm="8" sizeXs="12">
        <div id="integrated-terminal" style={{ marginTop: '10vh', width:'100%'}}></div>
        </IonCol>
    </IonRow>
        </IonGrid>          
               </IonContent>
      </IonPage>
    );
  };
  export default Bridge;
  