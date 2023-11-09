import { useEffect, useState } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import { IFlags, IFlagsmith, IFlagsmithFeature } from 'flagsmith/types';
import { CryptoCard, CryptoCardType } from './components/crypto-card';
import { CryptoWalletsType } from './models';
import { CryptoWallets } from './data';
import './App.css';

function App() {
  const flags = useFlags(['wallet-connect', 'wallet-fortmatic']); // only causes re-render if specified flag values / traits change
  const flagsmith: IFlagsmith<string, string> = useFlagsmith();
  const [cryptoWallets, setCryptoWallets] = useState<CryptoWalletsType>(CryptoWallets);

  const cryptoCard: CryptoCardType = {
    headerText: "Connect wallet",
    paragraphText: "Connect with one of our available wallet providers or create a new one.",
    footerText: "Why do I need to connect with my wallet?",
    cryptoWallets,
  }

  const updateCryptoWallets = (flags: IFlags<string>) =>{ 
    setCryptoWallets((prevState) => {
      return Object.keys(flags).reduce((acc, key) => {
        if (prevState[key]) {
          const enabled = flagsmith.hasFeature(key);
          const jsonValue = flagsmith.getValue(key, {json: true});
          let value;

          if (typeof jsonValue !== "object") {
            value = { "value": jsonValue };
          } else {
            value = jsonValue;
          }

          value = {...value, enabled };

          return { ...acc, [key]: { ...prevState[key], ...value } };
        }
        return acc;
      }, { ...prevState });
    });
  }

  useEffect(() => {
    //console.log("flags", flags);

    const walletConnectFlag: IFlagsmithFeature = flags['wallet-connect'];
    //console.log("walletConnectFlag", walletConnectFlag);

    const flagsmithState = flagsmith.getState();
    //console.log("flagsmithState", flagsmithState);

    const allFlags: IFlags<string> = flagsmith.getAllFlags();
    console.log("allFlags", allFlags);

    updateCryptoWallets(allFlags);
  }, [flags, flagsmith]);

  return (
    <div className="root h-screen flex items-center justify-center">
      <CryptoCard {...cryptoCard} />
    </div>
  );
}

export default App;
