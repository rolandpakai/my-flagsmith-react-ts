import { CryptoWalletType, CryptoWalletsType } from '../../models';
import CryptoWallet from './CryptoWallet';

export type CryptoWalletListType = {
  cryptoWallets: CryptoWalletsType;
}

const CryptoWalletList: React.FC<CryptoWalletListType> = ({ cryptoWallets }) => {
  const sortedCryptoWallets = Object.keys(cryptoWallets).sort((a, b) => 
    cryptoWallets[a as keyof CryptoWalletsType].orderId - cryptoWallets[b as keyof CryptoWalletsType].orderId);

  return (
      <ul className="my-4 space-y-3">
        {sortedCryptoWallets.map((key) => (
          <li key={key}>
            <CryptoWallet {...cryptoWallets[key]} />
          </li>
        ))}
      </ul>
  );
};

export default CryptoWalletList;
