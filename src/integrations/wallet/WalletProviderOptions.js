import WalletProviders from '../../settings/WalletProviders';
import MetaMaskWalletProvider from './MetaMaskWalletProvider';

/**
 * Represents a collection of allowed wallet providers to use
 * within the WalletConnector.
 */
const WalletProviderOptions = {
  [WalletProviders.MetaMask]: MetaMaskWalletProvider
};

export default WalletProviderOptions;