import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * Retrieves Loopring's recommended ETH gas price.
 * @return {Promise<string>}
 */
const GetRecommendedGasPrice = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.RecommendedGasPrice
  });

  return response.data.price;

};

export default GetRecommendedGasPrice;