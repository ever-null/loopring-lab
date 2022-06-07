import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';
import MarketStatus from '../settings/MarketStatus';

/**
 * @typedef {object} MarketInfo
 * @property {{ [string]: MarketItem }} markets
 * @property {{ [string]: TokenRelationship }} pairs
 * @property {Set<string>} marketSymbols
 * @property {Set<string>} tokenSymbols
 */

/**
 * @typedef {object} MarketItem
 * @property {string} marketSymbol
 * @property {number} baseTokenId
 * @property {string} baseTokenSymbol
 * @property {number} quoteTokenId
 * @property {string} quoteTokenSymbol
 * @property {number} precisionForPrice
 * @property {number} orderBookAggLevels
 * @property {boolean} enabled
 * @property {boolean} swapEnabled
 * @property {number} status
 * @property {number} createdAt
 * @property {Date} createdDate
 */

/**
 * @typedef {object} TokenRelationship
 * @property {string} tokenId
 * @property {string[]} tokenList
 */

/**
 * Retrieves a list of markets in the Loopring DEX.
 * @param {boolean} [mixMarkets] - Whether to query for mix markets.
 * @return {Promise<MarketInfo>}
 */
const GetMarkets = async (mixMarkets = false) => {

  const endpoint = mixMarkets ?
    LoopringEndpoints.Exchange.MixMarkets :
    LoopringEndpoints.Exchange.Markets;

  const response = await LoopringAction({ endpoint });

  return response.data.markets
    .map(MapMarketItem)
    .reduce(ComposeMarketInfo, EmptyMarketInfo());
};

/**
 * Maps a mix market entry into a consistent format.
 * @return {MarketItem}
 */
const MapMarketItem = (result) => {

  const marketSymbol = result.market;
  const [baseTokenSymbol, quoteTokenSymbol] = marketSymbol.split('-');

  const createdAt = result.createdAt ?
    parseInt(result.createdAt, 10) : null;

  const createdDate = createdAt ?
    new Date(createdAt) : null;

  const status = result.status || null;

  const swapEnabled = status === MarketStatus.All ||
    status === MarketStatus.Amm;

  return {
    marketSymbol,
    baseTokenId: result.baseTokenId,
    baseTokenSymbol,
    quoteTokenId: result.quoteTokenId,
    quoteTokenSymbol,
    precisionForPrice: result.precisionForPrice,
    orderBookAggLevels: result.orderbookAggLevels,
    enabled: result.enabled,
    swapEnabled,
    status,
    createdAt,
    createdDate
  };
};

/**
 * Readies an empty MarketInfo object for composition.
 * @return {MarketInfo}
 * @constructor
 */
const EmptyMarketInfo = () => {
  return {
    markets: {},
    pairs: {},
    marketSymbols: new Set(),
    tokenSymbols: new Set()
  };
}

/**
 * Composes the market items found into an enhanced view of the data.
 * This includes `markets` as a hash of items, `pairs` as a hash of
 * the token symbols and their relationships, and the unique lists
 * of market and token symbols.
 * @param {MarketInfo} marketInfo - The composition being built.
 * @param {MarketItem} marketItem - The market item currently being processed.
 * @return {MarketInfo}
 */
const ComposeMarketInfo = (marketInfo, marketItem) => {

  // Add the item into the dictionary of markets using its symbol.
  marketInfo.markets[marketItem.marketSymbol] = marketItem;
  ApplyBaseRelatedTokens(marketInfo.pairs, marketItem);
  ApplyQuoteRelatedTokens(marketInfo.pairs, marketItem);
  marketInfo.marketSymbols.add(marketItem.marketSymbol);
  marketInfo.tokenSymbols.add(marketItem.baseTokenSymbol);
  marketInfo.tokenSymbols.add(marketItem.quoteTokenSymbol);

  return marketInfo;
};

/**
 * Applies a base token symbol to quote token symbol relationship to
 * the pairs specified.
 * @param {object} pairs
 * @param {MarketItem} marketItem
 */
const ApplyBaseRelatedTokens = (pairs, marketItem) => {
  const relation = pairs[marketItem.baseTokenSymbol] || TokenRelationship(marketItem.baseTokenId);
  relation.tokenList.push(marketItem.quoteTokenSymbol);
  pairs[marketItem.baseTokenSymbol] = relation;
};

/**
 * Applies a quote token symbol to base token symbol relationship to
 * the pairs specified.
 * @param {object} pairs
 * @param {MarketItem} marketItem
 */
const ApplyQuoteRelatedTokens = (pairs, marketItem) => {
  const relation = pairs[marketItem.quoteTokenSymbol] || TokenRelationship(marketItem.quoteTokenId);
  relation.tokenList.push(marketItem.baseTokenSymbol);
  pairs[marketItem.quoteTokenSymbol] = relation;
};

/**
 * Creates a new empty TokenRelationship.
 * @param {number} tokenId
 * @return {TokenRelationship}
 */
const TokenRelationship = (tokenId) => {
  return {
    tokenId,
    tokenList: []
  };
}

export default GetMarkets;