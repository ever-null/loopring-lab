import WalletProviderOptions from './WalletProviderOptions';

/**
 * WalletConnector is a wrapper, or facade, for a browser wallet.
 */
class WalletConnector {

  /**
   * Initializes a new instance of the WalletConnector clas.
   */
  constructor() {
    this.isEngaged = false;
    this.providerName = null;
    this.provider = null;
  }

  /**
   * Engages, or initializes, connectivity to a wallet.
   * @param {string} providerName - Unique wallet provider name to engage.
   * @return {Promise<void>}
   */
  async engage(providerName) {
    if (!this.isEngaged) {
      try {
        const providerCtor = WalletProviderOptions[providerName];

        if (!providerCtor) {
          throw new Error(`Unable to find wallet provider constructor for: ${providerName}`);
        }

        this.providerName = providerName;
        this.provider = new providerCtor();
        await this.provider.engage();

        this.isEngaged = true;
      }
      catch (error) {
        console.error(`Failed to engage provider [${providerName}]: ${error.message}`);
      }
    }
  }

  /**
   * Requests a list of accounts from the engaged wallet provider.
   * @return {Promise<string[]>}
   */
  async requestAccounts() {
    try {
      return this.isEngaged ?
        await this.provider.requestAccounts() :
        [];
    }
    catch (error) {
      console.error(`Failed to request accounts for provider [${this.providerName}]: ${error.message}`);
    }

  }

  /**
   * Disengages the connector by clearing out the wallet provider being used.
   * @return {Promise<void>}
   */
  async disengage() {
    if (this.isEngaged) {
      try {
        await this.provider.disengage();
        this.provider = null;
        this.isEngaged = false;
      }
      catch (error) {
        console.error(`Failed to disengage provider [${this.providerName}]: ${error.message}`);
      }
    }
  }

}

export default WalletConnector;