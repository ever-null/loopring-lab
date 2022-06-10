import LoopringEndpoints from '../settings/LoopringEndpoints';
import LoopringAction from '../LoopringAction';

/**
 * @typedef {object} TokenCurrencyPrice
 * @property {string} symbol
 * @property {number} price
 * @property {number} updatedAt
 */

/**
 * Retrieves currency pricing for all tokens in the Loopring DEX.
 * @param {string} currency - The currency used in pricing.
 * @return {Promise<TokenCurrencyPrice[]>}
 * @constructor
 */
const GetFiatPrices = async (currency) => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.FiatPrice,
    queryParams: {
      legal: currency
    }
  });

  return response.data.prices
    .map(MapFiatPricingInfo);

};

/**
 * Maps currency price information into a consistent format.
 * @return {TokenCurrencyPrice}
 */
const MapFiatPricingInfo = (info) => {
  return {
    symbol: info.symbol,
    price: parseFloat(info.price),
    updatedAt: parseInt(info.updatedAt)
  };
};

export default GetFiatPrices;