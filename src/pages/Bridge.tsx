import {
  IonButton,
  IonContent,
  IonFooter,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { mintSingle } from "@libreplex/sdk";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { PublicKey, TokenAccountsFilter } from "@solana/web3.js";
import { progams, spl_tokens } from "../config";
import { Deployment, libreplex_fair_launch } from "../idl/libplex_fair_launch";
import { Program, Provider } from "@coral-xyz/anchor";
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

const Bridge: React.FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, wallet } = useWallet();
  const [amount, setAmount] = useState<string>("");
  const [balances, setBalances] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string>("idle");
  const [from, setFrom] = useState<string>("token");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [fairLaunch, setFairLaunch] = useState<any>(null);
  const handleAmountChange = (event: CustomEvent) => {
    setAmount(event.detail.value);
  };
  console.log(publicKey);

  useEffect(() => {
    const fetchTokenBalance = async (
      name: string,
      tokenAccounts: TokenAccountsFilter
    ) => {
      try {
        if (!publicKey) {
          console.log("Wallet not connected or public key not available.");
          return; // Early return if wallet is not connected or public key is unavailable
        }

        // Find the token account for the user's wallet and the SPL token
        let response = await connection.getTokenAccountsByOwner(
          publicKey,
          tokenAccounts
        );
        if (response.value.length > 0) {
          const tokenAccount = response.value[0].pubkey;
          // Get the balance
          const balance = await connection.getTokenAccountBalance(tokenAccount);

          console.log(`Balance: ${balance.value.amount}`);
          setBalances((x) => ({
            ...x,
            [name]: balance.value.amount.toString(),
          }));
        } else {
          console.log("Token account not found.");
        }
      } catch (error) {
        console.error("Failed to fetch token balance:", error);
      }
    };
    if (!publicKey) {
      console.log("Wallet not connected or public key not available.");
      return; // Early return if wallet is not connected or public key is unavailable
    }

    fetchTokenBalance("token", {
      mint: new PublicKey(spl_tokens.token),
      programId: new PublicKey(progams.spl_22),
    });
    fetchTokenBalance("nft", {
      mint: new PublicKey(spl_tokens.nft),
      programId: new PublicKey(progams.spl_22),
    });
  }, [publicKey]); //
  const handleBridgeTokenToNFT = async () => {
    // Implement token to NFT bridging logic
    setStatus("loading");
    try {
      const idl = libreplex_fair_launch as any;
      if (!publicKey || !wallet) {
        return;
      }
      const provider: Provider = { connection, publicKey, wallet } as any;
      const fairLaunch = new Program(
        idl,
        new PublicKey(progams.libreplex_fair_launch),
        provider
      );
      console.log(fairLaunch);
      if (!provider) {
        return;
      }
      const transaction = await fairLaunch.methods
        .swapToFungible22()
        .accounts({})
        .transaction();
      provider.send!(transaction);
      setStatus("success");

      setStatus("success");
    } catch (err) {
      console.log(err);
      setError("Bridging failed");
      setStatus("error");
    }
  };

  const handleBridgeNFTToToken = async () => {
    // Implement NFT to token bridging logic
    setStatus("loading");
  };

  return (
    <IonPage color="primary">
      <Menu />
      <IonContent fullscreen color="dark" className="ion-text-center">
        <IonItem color="dark">
          {balances["token"] && <p>Token balance: {balances["token"]}</p>}
        </IonItem>
        <IonItem color="dark">
          {balances["nft"] && <p>NFT balance: {balances["nft"]}</p>}
        </IonItem>
        <IonLabel>From</IonLabel>
        <IonSegment color="tertiary" value={from}>
          <IonSegmentButton
            value="token"
            disabled={balances["token"] === "0"}
            color="tertiary"
            onClick={() => {
              setFrom("token");
            }}
          >
            <IonText color="tertiary">TOKEN TO NFT</IonText>
          </IonSegmentButton>
          <IonSegmentButton
            value={"nft"}
            disabled={balances["nft"] === "0"}
            onClick={() => {
              setFrom("nft");
            }}
          >
            <IonText color="tertiary">NFT TO TOKEN</IonText>
          </IonSegmentButton>
        </IonSegment>
        <IonInput
          type="number"
          value={amount}
          onIonChange={handleAmountChange}
          placeholder="Enter amount"
        />
        {status === "loading" && <p>Bridging...</p>}
        {status === "success" && result && (
          <div>
            <p>Transaction successful</p>
            <p>Transaction signature: {result.transactionSignature}</p>
            <a
              href={result.urls.solanaExplorerUrl}
              target="_blank"
              rel="noreferrer"
            >
              Solana Explorer
            </a>
          </div>
        )}
        {status === "error" && <p>Error: {error}</p>}
        <IonButton
          onClick={() => {
            if (from == "token") {
              handleBridgeTokenToNFT();
            } else {
              handleBridgeNFTToToken();
            }
          }}
          expand="full"
        >
          Bridge
        </IonButton>

        <IonButton
          onClick={() => {
            if (!publicKey) {
              return;
            }
          }}
        >
          mint
        </IonButton>
      </IonContent>

      <IonFooter>
        <IonToolbar color="tertiary">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Bridge;
