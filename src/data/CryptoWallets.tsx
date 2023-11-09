import { Coinbase, Fortmatic, MetaMask, Opera, WalletConnect } from '../components/svg';
import { CryptoWalletType } from '../models';

type CryptoWalletsType = {
  [key: string]: CryptoWalletType;
};

export const CryptoWallets: CryptoWalletsType = {
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
