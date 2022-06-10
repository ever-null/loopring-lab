import LoopringEndpoints from '../settings/LoopringEndpoints';
import LoopringAction from '../LoopringAction';

/**
 * Retrieves the current ETH nonce for a given address.
 * @param {string} address - The address to query.
 * @return {Promise<number>}
 * @constructor
 */
const GetEthNonce = async (address) => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Account.EthNonce,
    queryParams: {
      owner: address
    }
  });

  return response.data.nonce;

};

export default GetEthNonce;