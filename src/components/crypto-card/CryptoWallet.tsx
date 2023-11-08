import { CryptoWalletType } from "../../models";

const CryptoWallet: React.FC<CryptoWalletType> = ({ label, svg }) => {

  return (
    <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white hover:cursor-pointer">
      { svg }
      <span className="flex-1 ml-3 whitespace-nowrap">{ label }</span>
    </div>
  );
};

export default CryptoWallet;