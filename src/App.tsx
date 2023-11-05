import { useEffect } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import logo from './logo.svg';
import './App.css';
import { IFlags, IFlagsmith, IFlagsmithFeature } from 'flagsmith/types';

function App() {
  const flags = useFlags(['wallet-connect', 'wallet-fortmatic']); // only causes re-render if specified flag values / traits change
  const flagsmith: IFlagsmith<string, string> = useFlagsmith();

  useEffect(() => {
    console.log("flags", flags);

    const walletConnectFlag: IFlagsmithFeature = flags['wallet-connect'];
    console.log("walletConnectFlag", walletConnectFlag);

    const allFlags: IFlags<string> = flagsmith.getAllFlags();
    console.log("allFlags", allFlags);

    const flagsmithState = flagsmith.getState();
    console.log("flagsmithState", flagsmithState);

  }, [flags]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
