import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * Retrieves Loopring's recommended ETH gas price range.
 * @return {Promise<string[]>}
 */
const GetRecommendedGasPriceRange = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.RecommendedGasPriceRange
  });

  return response.data.ranges;

};

export default GetRecommendedGasPriceRange;