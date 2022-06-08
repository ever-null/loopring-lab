const MixMarketRegEx = /^amm-/i;
/**
 * Predicate to determine if the specified market is considered
 * a mixed market.
 * @param {string} market - The market in question.
 * @return {boolean} - Whether the market is considered a mixed market.
 */
const IsMixMarket = (market) =>
  MixMarketRegEx.test(market);

export default IsMixMarket;