import LoopringEndpoints from '../settings/LoopringEndpoints';
import LoopringAction from '../LoopringAction';
import IsMixMarket from './support/IsMixMarket';

/**
 * @typedef {object} MarketCandlestickInfo
 * @property {number} timestamp
 * @property {Date} date
 * @property {number} numberOfTransactions
 * @property {number} openPrice
 * @property {number} closePrice
 * @property {number} highPrice
 * @property {number} lowPrice
 * @property {string} baseTokenVolume
 * @property {string} quoteTokenVolume
 */

/**
 * Retrieves candlestick information for a given market.
 * @param {string} market - The market to query.
 * @param {string} tradingInterval - The interval period for the data.
 *                                   See `TradingIntervals` for available options.
 * @param {number} [start] - A starting timestamp to limit to.
 * @param {number} [end] - An ending timestamp to limit to.
 * @param {number} [limit] - The number of results to limit to.
 * @return {Promise<MarketCandlestickInfo[]>}
 * WARNING: This function does not process the timestamp like the official
 * SDK does.  If this affects data negatively this function will need
 * to be updated.
 */
const GetMarketCandlestick = async (market, tradingInterval, start, end, limit) => {

  const queryParams = {
    market, interval: tradingInterval
  };
  if (start) queryParams.start = start;
  if (end) queryParams.end = end;
  if (limit) queryParams.limit = limit;

  const endpoint = IsMixMarket(market) ?
    LoopringEndpoints.Exchange.MixMarketCandlestick :
    LoopringEndpoints.Exchange.MarketCandlestick

  const response = await LoopringAction({
    endpoint,
    queryParams
  });

  return response.data.candlesticks
    .map(MapCandlestickInfo);

};

/**
 * Maps candlestick information into a consistent format.
 * @return {MarketCandlestickInfo}
 */
const MapCandlestickInfo = (info) => {
  const timestamp = parseInt(info[0]);
  return {
    timestamp,
    date: new Date(timestamp),
    numberOfTransactions: parseInt(info[1]),
    openPrice: parseFloat(info[2]),
    closePrice: parseFloat(info[3]),
    highPrice: parseFloat(info[4]),
    lowPrice: parseFloat(info[5]),
    baseTokenVolume: info[6],
    quoteTokenVolume: info[7],
  };
};

export default GetMarketCandlestick;