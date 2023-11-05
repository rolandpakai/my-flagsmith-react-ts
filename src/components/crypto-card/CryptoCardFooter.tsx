
type CryptoCardFooterType = {
  text: string;
  svg: React.ReactNode;
}
const CryptoCardFooter: React.FC<CryptoCardFooterType> = ({ text, svg }) => {

  return (
    <div>
        <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
          { svg }
          { text }
        </a>
    </div>
  );
};

export default CryptoCardFooter;