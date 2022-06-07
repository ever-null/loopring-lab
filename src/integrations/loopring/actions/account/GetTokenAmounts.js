import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * @typedef {object} TokenAmount
 * @property {string} tokenAddress
 * @property {string} amount
 */

/**
 * Retrieves the amount of tokens owned by the address.
 * @param {string} ownerAddress - The address of a contract or wallet.
 * @param {string[]} tokenAddresses - The addresses of tokens to query.
 * @return {Promise<TokenAmount[]>} The amount of ether available.
 */
const GetTokenAmounts = async (ownerAddress, tokenAddresses = []) => {

  if (!Array.isArray(tokenAddresses) || tokenAddresses.length === 0) {
    throw new TypeError(`[tokenAddresses] must be an array of token addresses.`);
  }

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Account.TokenAmount,
    queryParams: {
      owner: ownerAddress,
      token: tokenAddresses
    }
  });

  return response.data.amount
    .map((amount, index) => ({
      tokenAddress: tokenAddresses[index],
      amount
    }));

};

export default GetTokenAmounts;