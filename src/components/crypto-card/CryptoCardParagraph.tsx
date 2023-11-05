
type CryptoCardParagraphType = {
  text: string;
}
const CryptoCardParagraph: React.FC<CryptoCardParagraphType> = ({ text }) => {

  return (
    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
      { text }
    </p>
  );
};

export default CryptoCardParagraph;