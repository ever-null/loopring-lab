import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * @typedef {object} TokenInfo
 * @property {string} type
 * @property {string} tokenId
 * @property {string} symbol
 * @property {string} name
 * @property {string} address
 * @property {number} decimals
 * @property {number} precision
 * @property {number} precisionForOrder
 * @property {TokenAmount} orderAmounts
 * @property {TokenAmount} luckyTokenAmounts
 * @property {string} fastWithdrawLimit
 * @property {TokenGasAmount} gasAmounts
 * @property {string} enabled
 */

/**
 * @typedef TokenAmount
 * @property {string} minimum
 * @property {string} maximum
 * @property {string} dust
 */

/**
 * @typedef TokenGasAmount
 * @property {string} distribution
 * @property {string} deposit
 */

/**
 * Retrieves details for all tokens in the Loopring DEX.
 * @return {Promise<TokenInfo[]>}
 */
const GetTokens = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.Tokens
  });

  return response.data.map(MapTokenInfo);
};

/**
 * Maps the token information into a consistent format.
 * @return {TokenInfo}
 */
const MapTokenInfo = (item) => {
  return {
    type: item.type,
    tokenId: item.tokenId,
    symbol: item.symbol,
    name: item.name,
    address: item.address.toLowerCase(),
    decimals: parseInt(item.decimals, 10),
    precision: parseInt(item.precision, 10),
    precisionForOrder: parseInt(item.precisionForOrder, 10),
    orderAmounts: {
      minimum: item.orderAmounts.minimum,
      maximum: item.orderAmounts.maximum,
      dust: item.orderAmounts.dust
    },
    luckyTokenAmounts: {
      minimum: item.luckyTokenAmounts.minimum,
      maximum: item.luckyTokenAmounts.maximum,
      dust: item.luckyTokenAmounts.dust
    },
    fastWithdrawLimit: item.fastWithdrawLimit,
    gasAmounts: {
      distribution: item.gasAmounts.distribution,
      deposit: item.gasAmounts.deposit
    },
    enabled: item.enabled
  };
};

export default GetTokens;