import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * @typedef {object} TokenAllowance
 * @property {string} tokenAddress
 * @property {string} allowance
 */

/**
 * Retrieves the allowances for the tokens owned by the specified address.
 * @param {string} ownerAddress - The address of a contract or wallet.
 * @param {string[]} tokenAddresses - The addresses of tokens to query.
 * @return {Promise<TokenAllowance[]>} The allowances for each token.
 */
const GetTokenAllowances = async (ownerAddress, tokenAddresses = []) => {

  if (!Array.isArray(tokenAddresses) || tokenAddresses.length === 0) {
    throw new TypeError(`[tokenAddresses] must be an array of token addresses.`);
  }

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Account.TokenAllowance,
    queryParams: {
      owner: ownerAddress,
      token: tokenAddresses
    }
  });

  return response.data.amount
    .map((allowance, index) => ({
      tokenAddress: tokenAddresses[index],
      allowance
    }));

};

export default GetTokenAllowances;