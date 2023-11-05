
type CryptoCardHeaderType = {
  text: string;
}
const CryptoCardHeader: React.FC<CryptoCardHeaderType> = ({ text }) => {

  return (
    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
      { text }
    </h5>
  );
};

export default CryptoCardHeader;