import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';
import BigNumber from 'bignumber.js';

/**
 * @typedef MarketDepthInfo
 * @property {string} market
 * @property {string} version
 * @property {number} timestamp
 * @property {PositionInfo[]} bids
 * @property {PositionInfo[]} asks
 */

/**
 * @typedef {object} PositionInfo
 * @property {number} price
 * @property {BigNumber} size
 * @property {BigNumber} volume
 * @property {number} orderCount
 */

/**
 * Retrieves market depth from the order book for the specified market.
 * @param {string} market - The market to query.
 * @param {number} [level] - The level of the market.
 * @param {number} [limit] - The number of bids/asks to retrieve.
 * @return {Promise<MarketDepthInfo>}
 */
const GetMarketDepth = async (market, level = 0, limit = 50) => {

  const isAmmMarket = market.match(/amm-/i);

  const response = await LoopringAction({
    endpoint: isAmmMarket ?
      LoopringEndpoints.Exchange.MixMarketDepth :
      LoopringEndpoints.Exchange.MarketDepth,
    queryParams: {
      market,
      level,
      limit
    }
  });

  return MapMarketDepthInfo(response.data);
};

/**
 * Maps the market depth information into a consistent format.
 * @return {MarketDepthInfo}
 */
const MapMarketDepthInfo = (result) => {
  return {
    market: result.market,
    version: result.version,
    timestamp: result.timestamp,
    bids: result.bids.map(MapPositionInfo),
    asks: result.asks.map(MapPositionInfo)
  };
};

/**
 * Maps position array elements into a consistent structure.
 * @return {PositionInfo}
 */
const MapPositionInfo = ([price, size, volume, orderCount]) => {
  return {
    price: parseFloat(price),
    size: new BigNumber(size).toString(),
    volume: new BigNumber(volume).toString(),
    orderCount: parseInt(orderCount, 10)
  };
};

export default GetMarketDepth;