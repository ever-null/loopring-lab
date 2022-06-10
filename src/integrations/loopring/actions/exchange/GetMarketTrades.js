import LoopringEndpoints from '../settings/LoopringEndpoints';
import LoopringAction from '../LoopringAction';

/**
 * @typedef {object} MarketTradeSet
 * @property {number} tradeCount
 * @property {MarketTradeInfo[]} trades
 */

/**
 * @typedef {object} MarketTradeInfo
 * @property {number} timestamp
 * @property {Date} date
 * @property {number} recordId
 * @property {string} side
 * @property {string} volume
 * @property {string} fee
 * @property {string} market
 * @property {string} price
 */

/**
 * Retrieves the latest market trades for a given market.
 * @param {string} market - The market to query trades for.
 * @param {number} [limit] - The number of trades to retrieve; default 50.
 * @return {Promise<MarketTradeSet>}
 */
const GetMarketTrades = async (market, limit = 50) => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.MarketTrades,
    queryParams: {
      market,
      limit
    }
  });

  return {
    tradeCount: response.data.totalNum,
    trades: response.data.trades.map(MapMarketTradeInfo)
  };

};

/**
 * Maps market trade information into a consistent format.
 * @return {MarketTradeInfo}
 */
const MapMarketTradeInfo = (trade) => {
  const timestamp = parseInt(trade[0]);
  return {
    timestamp,
    date: new Date(timestamp),
    recordId: parseInt(trade[1]),
    side: trade[2],
    volume: trade[3],
    fee: trade[4],
    market: trade[5],
    price: trade[6]
  };
};

export default GetMarketTrades;