import { useEffect } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { IFlags, IFlagsmith, IFlagsmithFeature } from 'flagsmith/types';
import { CryptoCard, CryptoCardType, CryptoWalletType } from './components/crypto-card';
import { Coinbase, Fortmatic, MetaMask, Opera, WalletConnect } from './components/svg';
import './App.css';

const cryptoWallets: CryptoWalletType[] = [
  {
    name: "MetaMask",
    svg: <MetaMask />
  },
  {
    name: "Coinbase Wallet",
    svg: <Coinbase />
  },
  {
    name: "Opera Wallet",
    svg: <Opera />
  },
  {
    name: "WalletConnect",
    svg: <WalletConnect />
  },
  {
    name: "Fortmatic",
    svg: <Fortmatic />
  },
];

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
