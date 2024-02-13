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
// Callback function to execute when mutations are observed
var callback = function(mutationsList: any, observer: { disconnect: () => void; }) {
  for(var mutation of mutationsList) {
      if (mutation.type === 'childList') {
          var targetDivs = document.querySelectorAll('#jupiter-terminal .mt-2.h-7.pl-3.pr-2');
          if(targetDivs.length > 0) {
              targetDivs.forEach(function(div) {
                  // Instead of replacing all content, now call replaceTextInElement
                  replaceTextInElement(div, 'Jupiter', 'Swap');
              });
              // Disconnect observer after successful modification if desired
              observer.disconnect();
          }
      }
  }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(document.body, { childList: true, subtree: true });

function replaceTextInElement(element: Element, searchText: string, replacementText: string): void {
  element.childNodes.forEach(function(node: ChildNode) {
      // Check if node is a text node
      if (node.nodeType === 3) { 
          // node.nodeValue can be null, so we need to ensure it's a string before calling .includes()
          const text = node.nodeValue || ''; // Fallback to empty string if null
          if (text.includes(searchText)) {
              // Use a regular expression with 'g' flag for global replacement
              node.nodeValue = text.replace(new RegExp(searchText, 'g'), replacementText);
          }
      } else if (node.nodeType === 1) { // Check if node is an element node
          // TypeScript recognizes this node as an Element, so we cast it to use the function recursively
          replaceTextInElement(node as Element, searchText, replacementText);
      }
  });
}

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
            <img src="warning.svg" alt="" className="image-33"/>
            <a href="https://leh.gg" className="link-7">Always make sure the url is &#x27;<span className="text-span-4" style={{color: 'white', fontWeight: 'bold'}}>leh.gg&#x27;</span> bookmark it to be safe</a>
          </div>
          <div className="div-block-83">
            <a href="" className="w-inline-block" style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
              <img src="/s.png" alt="" className="image-34"/><span style={{fontWeight: 'bold', textDecoration: 'none', color: 'white', fontSize: '1.35rem'}}>Vault \ Swap</span></a>

          </div>
        </div>
        <IonContent style={{
  display: 'flex',
  justifyContent: 'center', // Centers children along the main axis (horizontally for row, vertically for column)
  alignItems: 'center', // Centers children along the cross axis (vertically for row, horizontally for column)
  flexDirection: 'column', // Stacks children vertically. Change to 'row' if you prefer a horizontal layout
  height: '100%' // Ensure it fills the parent height, might need adjusting
}}> 

        <div id="integrated-terminal" style={{width: '100%', marginTop: '10vh', maxWidth: '100%', padding: '2%', paddingBottom: '24px'}}>

         </div>
         <div style={{display: 'flex', justifyContent: 'center', width: '100%',marginTop: 0 }}>
            <a href="t.me/lehmanbroscoin" className="w-inline-block" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}> 
              Telegram</a>
              <a href="x.com/lehvault" className="w-inline-block" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', marginLeft: 24}}> 
              Twitter</a>
            </div>
         <div style={{display: 'flex', justifyContent: 'center', width: '100%',marginTop: 12 }}><a href="https://solscan.io/account/6F8fGQXso34nhubZtEZv8oUSoJgu3Wxu2o5nbSYcr3kF" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '.875rem'}}>LEH Treasury</a>
         </div>
         <div> 
         </div>
        </IonContent> 
      </IonPage>
    );
  };
  export default Bridge;
  