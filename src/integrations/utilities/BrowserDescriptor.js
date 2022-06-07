import BrowserSettings from '../../settings/Browser';

class BrowserDescriptor {

  static userAgentMatch(regEx) {
    return window.navigator.userAgent.match(regEx);
  }

  isEthereumEnabled() {
    return Boolean(window.ethereum);
  }

  isAndroid() {
    return BrowserDescriptor.userAgentMatch(BrowserSettings.MobileAgents.AndroidRegEx);
  }

  isBlackBerry() {
    return BrowserDescriptor.userAgentMatch(BrowserSettings.MobileAgents.BlackBerryRegEx);
  }

  isIOs() {
    return BrowserDescriptor.userAgentMatch(BrowserSettings.MobileAgents.IOsRegEx);
  }

  isOperaMini() {
    return BrowserDescriptor.userAgentMatch(BrowserSettings.MobileAgents.OperaMiniRegEx);
  }

  isWindowsPhone() {
    return BrowserDescriptor.userAgentMatch(BrowserSettings.MobileAgents.WindowsPhoneRegEx);
  }

  isWindowsIeMobile() {
    return BrowserDescriptor.userAgentMatch(BrowserSettings.MobileAgents.IeMobileRegEx);
  }

  isImToken() {
    return this.isEthereumEnabled() &&
      window.ethereum.isImToken;
  }

  hasMetaMaskWallet() {
    return this.isEthereumEnabled() &&
      window.ethereum.isMetaMask;
  }

  isMobile() {
    return this.isAndroid() ||
      this.isBlackBerry() ||
      this.isIOs() ||
      this.isOperaMini() ||
      this.isWindowsPhone() ||
      this.isWindowsIeMobile() ||
      this.isImToken();
  }

}

export default new BrowserDescriptor();