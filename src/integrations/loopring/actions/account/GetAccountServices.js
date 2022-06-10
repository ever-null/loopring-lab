import LoopringEndpoints from '../settings/LoopringEndpoints';
import LoopringAction from '../LoopringAction';

/**
 * @typedef {object} AccountServiceInfo
 * @property {AccountServiceItem} register
 * @property {AccountServiceItem} order
 * @property {AccountServiceItem} joinAmm
 * @property {AccountServiceItem} dAppTrade
 * @property {AccountServiceItem} legal
 */

/**
 * @typedef {object} AccountServiceItem
 * @property {boolean} enable
 * @property {boolean} show
 * @property {string} reason
 */

/**
 * Retrieves account services information.
 * @param {object} [options]
 * @param {string} [options.phone]
 * @param {string} [options.email]
 * @param {string} [options.wallet]
 * @return {Promise<AccountServiceInfo>}
 */
const GetAccountServices = async (options = {}) => {

  const {
    phone,
    email,
    wallet
  } = options;

  const queryParams = {};

  if (phone) queryParams.phone = phone;
  if (email) queryParams.email = email;
  if (wallet) queryParams.wallet = wallet;


  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Account.AccountServices,
    queryParams
  });

  return MapAccountServiceInfo(response.data);

};

/**
 * Maps the account service information into a consistent format.
 * @return {AccountServiceInfo}
 */
const MapAccountServiceInfo = (info) => {
  return {
    register: MapAccountServiceItem(info.register),
    order: MapAccountServiceItem(info.order),
    joinAmm: MapAccountServiceItem(info.joinAmm),
    dAppTrade: MapAccountServiceItem(info.dAppTrade),
    legal: MapAccountServiceItem(info.legal)
  };
};

/**
 * Maps each account service item into a consistent format.
 * @return {AccountServiceItem}
 */
const MapAccountServiceItem = (item) => {
  return {
    enable: item.enable,
    show: item.show,
    reason: item.reason || null
  };
};

export default GetAccountServices;