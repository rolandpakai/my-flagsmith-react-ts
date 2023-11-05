import CryptoWallet, { CryptoWalletType } from './CryptoWallet';

export type CryptoWalletListType = {
  cryptoWallets: CryptoWalletType[];
}

const CryptoWalletList: React.FC<CryptoWalletListType> = ({ cryptoWallets }) => {

  return (
      <ul className="my-4 space-y-3">
        {cryptoWallets.map(({ name, svg }) => (
          <li key={name}>
            <CryptoWallet name={name} svg={svg} />
          </li>
        ))}
      </ul>
  );
};

export default CryptoWalletList;
