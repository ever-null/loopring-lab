import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * Retrieves a list of recommended markets.
 * @return {Promise<string[]>}
 */
const GetRecommendedMarkets = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.RecommendedMarkets
  });

  return response.data;
};

export default GetRecommendedMarkets;