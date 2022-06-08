import GetMarkets from './GetMarkets';
import GetMarketTicker from './GetMarketTicker';

/**
 * Retrieves ticker information for every market in the Loopring DEX.
 * @return {Promise<MarketTickerInfo[]>}
 */
const GetAllMarketTickers = async () => {
  const marketResults = await GetMarkets();
  return await GetMarketTicker(Array.from(marketResults.marketSymbols));
};

export default GetAllMarketTickers;