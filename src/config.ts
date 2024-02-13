import { Keypair, PublicKey } from "@solana/web3.js";
import { DeployV2Input, Deployment, DeploymentConfig } from "./idl/libplex_fair_launch"

export const isProd = false

export const progams = {
    "libreplex_fair_launch": "8bvPnYE5Pvz2Z9dE6RAqWr1rzLknTndZ9hwvRE6kPDXP",
    "spl_22":"TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
    "inscriptions":"inscokhJarcjaEs59QbQ7hYjrKz25LEPRfCbP8EmdUp"
}
export const deployment_id="4eBZK99p6WWwu76eDqdQqrdkVEwcYa88ZMfzFG53cjmX"
export const deployment_config ="EQQmCxLmhwZDLRcJrErWLzkYopFjCpvbeykJZSWgXvU";
export const bridgeAddress=   "4eBZK99p6WWwu76eDqdQqrdkVEwcYa88ZMfzFG53cjmX"
export const spl_tokens={
    token:"9BA9rUXaBNvaFG5G1FFBG3HLNgJJUQ6qAy4wJCkdrv2b",
    nft:"6nQVvswYk6NZFoxkurkJmF7PKBtRQv4M8x8ZHbLDg7Uu"
}
export const fungibleMint = spl_tokens.token;
export const nonFungibleMint = spl_tokens.nft;


const fungibleSource=new PublicKey("5YXtvy5FaYwE1dAXJRF2CTMERkVv5r1eCwSB6Z7Az81b")
const fungibleTarget=new PublicKey("DcQUJd6twmgzg4sYg29RYbqnS5EJGXyCzRBfx3VJ5gMP");
const nonFungibleSource=new PublicKey("BhDpReZDLfsaMqyKPxDrcpZJ8t3JjsiwMg1cEPNtZzRh");
const hashListMarker=new PublicKey("4gfADyLG7Wbad3yHmuPTL7Wxa2Y9pVCQuQSXpiJsVhkB");
const nonFungibleTargetAccount=new PublicKey("4vJDKN6QxUDfgNxe2YTNhq17pdcpLpm1bsKLLbFbyeqX");
const TokenProgram22=new PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
const TokenProgram=new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const AssociatedTokenProgram=new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const systemProgram=new PublicKey("11111111111111111111111111111111");
const sysVarInstructions   =new PublicKey("Sysvar1nstructions1111111111111111111111111" );
const payer = new PublicKey("4vJDKN6QxUDfgNxe2YTNhq17pdcpLpm1bsKLLbFbyeqX");
export const swapTokenNFTAccounts={
    deployment_id,
    deployment_config,
    payer,
    fungibleMint,
    fungibleSource,
    fungibleTarget,
    nonFungibleMint,
    nonFungibleSource,
    hashListMarker,
    nonFungibleTargetAccount,
    TokenProgram22,
    TokenProgram,
    AssociatedTokenProgram,
    systemProgram,
    sysVarInstructions    
}


export const mintAccounts=(publicKey:string)=>({
  deployment:new PublicKey("4eBZK99p6WWwu76eDqdQqrdkVEwcYa88ZMfzFG53cjmX"),
  deploymentConfig :new PublicKey("EQQmCxLmhwZDLRcJrErWLzkYopFjCpvbeykJZSWgXvU"),
  creatorFeeTreasury :new PublicKey(publicKey),
  hashlist :new PublicKey("7o8zHbvj1gasjbH8GXJJnVzQuoXSV6gmJ8DehpshDMZG"),
  hashlistMarker :new PublicKey("CozgP1s9xx6PawPoHoNAs29VjEqFVnMJqCHPGgDPTCvf"),
  payer :new PublicKey(publicKey),
  signer :new PublicKey(publicKey),
  fungibleMint :new PublicKey("9BA9rUXaBNvaFG5G1FFBG3HLNgJJUQ6qAy4wJCkdrv2b"),
  minter :new PublicKey(publicKey),
  nonFungibleMint:new PublicKey("3qFAGKnhmQcda3DurBnL4WE6H7v9SxXhfyai9Hq3Eppo"),
  nonFungibleTokenAccount:new Keypair().publicKey,
  tokenProgram:new PublicKey(progams.spl_22),
  associatedTokenProgram :new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
  systemProgram :new PublicKey("11111111111111111111111111111111"),
  Account14 :new PublicKey(progams.inscriptions),
  Account15 :new PublicKey("3QVcm8JUz7TCyCQhPMGogjdbhgCW9chEzKZhLcddn4QH"),
  Account16 :new PublicKey("7DAiM5nGccN7Xeou6qcBeJEAaAngLj8Lnpb6rCKt5eKv"),
  Account17 :new PublicKey("2S5PgjPEW8vYGnFYwn4cL1owmWewgaUoj6DjNXUFu38n"),
})
