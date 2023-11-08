import { useEffect } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { IFlags, IFlagsmith, IFlagsmithFeature } from 'flagsmith/types';
import { CryptoCard, CryptoCardType } from './components/crypto-card';
import { Coinbase, Fortmatic, MetaMask, Opera, WalletConnect } from './components/svg';
import { CryptoWalletType } from './models';
import './App.css';

type CryptoWalletsType = {
  [key: string]: CryptoWalletType;
};

const cryptoWallets: CryptoWalletsType = {
  "wallet-metamask": {
    id: 0,
    orderId: 0,
    enabled: true,
    name: "wallet-metamask",
    label: "MetaMask",
    svg: <MetaMask />
  },
  "wallet-coinbase": {
    id: 1,
    orderId: 1,
    enabled: true,
    name: "wallet-coinbase",
    label: "Coinbase Wallet",
    svg: <Coinbase />
  },
  "wallet-opera": {
    id: 2,
    orderId: 2,
    enabled: true,
    name: "wallet-opera",
    label: "Opera Wallet",
    svg: <Opera />
  },
  "wallet-connect": {
    id: 3,
    orderId: 3,
    enabled: true,
    name: "wallet-connect",
    label: "WalletConnect",
    svg: <WalletConnect />
  },
  "wallet-fortmatic": {
    id: 4,
    orderId: 4,
    enabled: true,
    name: "wallet-fortmatic",
    label: "Fortmatic",
    svg: <Fortmatic />
  },
};

function App() {
  const flags = useFlags(['wallet-connect', 'wallet-fortmatic']); // only causes re-render if specified flag values / traits change
  const flagsmith: IFlagsmith<string, string> = useFlagsmith();

  const cryptoCard: CryptoCardType = {
    headerText: "Connect wallet",
    paragraphText: "Connect with one of our available wallet providers or create a new one.",
    footerText: "Why do I need to connect with my wallet?",
    cryptoWallets,
  }

  useEffect(() => {
    console.log("flags", flags);

    const walletConnectFlag: IFlagsmithFeature = flags['wallet-connect'];
    console.log("walletConnectFlag", walletConnectFlag);

    const allFlags: IFlags<string> = flagsmith.getAllFlags();
    console.log("allFlags", allFlags);

    const flagsmithState = flagsmith.getState();
    console.log("flagsmithState", flagsmithState);

  }, [flags, flagsmith]);

  return (
    <div className="root h-screen flex items-center justify-center">
      <CryptoCard {...cryptoCard} />
    </div>
  );
}

export default App;
