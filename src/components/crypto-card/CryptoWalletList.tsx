import { CryptoWalletType } from '../../models';
import CryptoWallet from './CryptoWallet';

export type CryptoWalletListType = {
  cryptoWallets: CryptoWalletType[];
}

const CryptoWalletList: React.FC<CryptoWalletListType> = ({ cryptoWallets }) => {

  return (
      <ul className="my-4 space-y-3">
        {cryptoWallets.map((cryptoWallet) => (
          <li key={cryptoWallet.id}>
            <CryptoWallet {...cryptoWallet} />
          </li>
        ))}
      </ul>
  );
};

export default CryptoWalletList;
