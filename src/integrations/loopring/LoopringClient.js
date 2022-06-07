import ActionSet from './actions/ActionSet';
import AccountActions from './actions/account';
import ExchangeActions from './actions/exchange';

class LoopringClient {

  constructor(chain) {
    this.chain = chain;
  }

  get account() {
    return new ActionSet(AccountActions);
  }

  get exchange() {
    return new ActionSet(ExchangeActions);
  }

}

export default LoopringClient;