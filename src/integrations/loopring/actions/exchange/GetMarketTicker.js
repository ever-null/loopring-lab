import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';
import IsMixMarket from './support/IsMixMarket';

/**
 * @typedef {object} MarketTickerInfo
 * @property {string} market
 * @property {string|null} marketAlias
 * @property {number} timestamp
 * @property {Date} date
 * @property {number} baseTokenVolume
 * @property {number} quoteTokenVolume
 * @property {number} openPrice
 * @property {number} highestPrice
 * @property {number} lowestPrice
 * @property {number} closePrice
 * @property {number} tradeCount
 * @property {number} bidPrice
 * @property {number} askPrice
 * @property {string} baseTokenFee
 * @property {string} quoteTokenFee
 */

/**
 * Retrieves ticker information for the markets specified.
 * @param {string|string[]} markets - The markets to query.
 * @return {Promise<MarketTickerInfo[]>}
 */
const GetMarketTicker = async (markets) => {

  markets = Array.isArray(markets) ? markets : [markets];
  const [marketList, mixMarketList] = GroupMarkets(markets);

  const promises = [];

  if (marketList.length) {
    promises.push(
      LoopringAction({
        endpoint: LoopringEndpoints.Exchange.MarketTicker,
        queryParams: {
          market: marketList.join(',')
        }
      })
    );
  }

  if (mixMarketList.length) {
    promises.push(
      LoopringAction({
        endpoint: LoopringEndpoints.Exchange.MixMarketTicker,
        queryParams: {
          market: mixMarketList.join(',')
        }
      })
    );
  }

  const [marketResponse, mixMarketResponse] = await Promise.all(promises);
  const marketTickers = marketResponse.data.tickers;
  const mixMarketTickers = mixMarketResponse.data.tickers;

  return marketTickers.map(MapMarketTickerInfo)
    .concat(
      mixMarketTickers.map(([alias, ...otherInfo], index) =>
        // Use the original market specified, capture the name
        // returned as an alias. Example: "combine-lrc-eth"
        MapMarketTickerInfo([mixMarketList[index], ...otherInfo], alias.toUpperCase())
      )
    );
};

/**
 * Splits markets into normal and mixed market groups.
 * @param {string[]} markets - The list of markets to group.
 * @return {[string[], string[]]}
 */
const GroupMarkets = (markets) => {
  return markets.reduce(([marketList, mixList], item) => {
    const isMixMarket = IsMixMarket(item);
    return [
      !isMixMarket ? marketList.concat(item) : marketList,
      isMixMarket ? mixList.concat(item) : mixList
    ];
  }, [[], []]);
};

/**
 * Maps ticker information into a consistent format.
 * @return {MarketTickerInfo}
 */
const MapMarketTickerInfo = (tickerInfo, marketAlias = null) => {
  const timestamp = parseInt(tickerInfo[1]);
  return {
    market: tickerInfo[0].toUpperCase(),
    marketAlias,
    timestamp,
    date: new Date(timestamp),
    baseTokenVolume: tickerInfo[2],
    quoteTokenVolume: tickerInfo[3],
    openPrice: parseFloat(tickerInfo[4] || '0'),
    highestPrice: parseFloat(tickerInfo[5] || '0'),
    lowestPrice: parseFloat(tickerInfo[6] || '0'),
    closePrice: parseFloat(tickerInfo[7] || '0'),
    tradeCount: parseInt(tickerInfo[8]),
    bidPrice: parseFloat(tickerInfo[9] || '0'),
    askPrice: parseFloat(tickerInfo[10] || '0'),
    baseTokenFee: tickerInfo[11] || '0',
    quoteTokenFee: tickerInfo[12] || '0',
  };
};

export default GetMarketTicker;