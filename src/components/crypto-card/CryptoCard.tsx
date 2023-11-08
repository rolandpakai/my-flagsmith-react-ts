import { Card } from 'flowbite-react';
import CryptoCardFooter from './CryptoCardFooter';
import CryptoCardHeader from './CryptoCardHeader';
import CryptoCardParagraph from './CryptoCardParagraph';
import CryptoWalletList from './CryptoWalletList';
import { CryptoWalletType } from '../../models';
import { QuestionMark } from '../svg';

export type CryptoCardType = {
  headerText: string;
  paragraphText: string;
  footerText: string;
  cryptoWallets: CryptoWalletType[];
}

const CryptoCard: React.FC<CryptoCardType> = ({ headerText, paragraphText, footerText, cryptoWallets }) => {

  return (
    <Card className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <CryptoCardHeader text={headerText} />
      <CryptoCardParagraph text={paragraphText}/>
      <CryptoWalletList cryptoWallets={ cryptoWallets } />
      <CryptoCardFooter text={footerText} svg={<QuestionMark />} />
    </Card>
  );
};

export default CryptoCard;
