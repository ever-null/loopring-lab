import WalletConnector from '../../integrations/wallet/WalletConnector';

const useWalletConnector = () => {
  return new WalletConnector();
};

export default useWalletConnector;