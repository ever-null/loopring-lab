// Use transpiled/min version of Web3 to avoid polyfill issues.
import Web3 from 'web3/dist/web3.min';
import BrowserDescriptor from '../utilities/BrowserDescriptor';
import detectEthereumProvider from '@metamask/detect-provider';

const ProviderName = 'MetaMask';

/**
 * A MetaMask wallet provider to be used by the WalletConnector.
 */
class MetaMaskWalletProvider {

  /**
   * Initializes a new instance of the provider.
   */
  constructor() {
    this.providerName = ProviderName;
    this.web3 = null;
    this.web3Provider = null;
  }

  /**
   * Engages the MetaMask wallet.
   * @return {Promise<void>}
   */
  async engage() {

    if (!BrowserDescriptor.hasMetaMaskWallet()) {
      throw new Error(`MetaMask wallet does not appear to be installed.`);
    }

    this.web3Provider = await detectEthereumProvider({
      mustBeMetaMask: true
    });

    this.web3 = new Web3(this.web3Provider);

  }

  /**
   * Requests accounts from the MetaMask wallet.
   * @return {Promise<string[]>}
   */
  async requestAccounts() {
    return await this.web3.eth.requestAccounts();
  }

  /**
   * Disengages the MetaMask provider.
   * @return {Promise<void>}
   */
  async disengage() {
    this.web3 = null;
    this.web3Provider = null;
  }

}

export default MetaMaskWalletProvider;