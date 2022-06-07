import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * Retrieves the amount of Ether (ETH) owned by a contract or wallet.
 * @param {string} address - The address of a contract or wallet.
 * @return {Promise<string>} The amount of ether available.
 * TODO: Should this denote this is receiving L1 ETH amount?
 */
const GetEthAmount = async (address) => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Account.EthAmount,
    queryParams: { owner: address }
  });

  return response.data.amount;
};

export default GetEthAmount;