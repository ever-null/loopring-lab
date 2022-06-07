import GetMarkets from './GetMarkets';

/**
 * Provides a distinct named function for getting mix markets.
 * Refer to GetMarkets for details.
 */
const GetMixMarkets = async () => await GetMarkets(true);

export default GetMixMarkets;