import GetMarkets from './GetMarkets';
import GetMarketTicker from './GetMarketTicker';

/**
 * Retrieves ticker information for every mix market in the Loopring DEX.
 * @return {Promise<MarketTickerInfo[]>}
 */
const GetAllMixMarketTickers = async () => {
  const marketResults = await GetMarkets(true);
  const mixMarkets = Array.from(marketResults.marketSymbols)
    .map((market) => `AMM-${market}`);
  return await GetMarketTicker(mixMarkets);
};

export default GetAllMixMarketTickers;