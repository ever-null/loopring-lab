import LoopringEndpoints from '../settings/LoopringEndpoints';
import LoopringAction from '../LoopringAction';

/**
 * @typedef {object} WithdrawalDisabledToken
 * @property {string} symbol
 * @property {string} address
 * @property {number} tokenId
 */

/**
 * Retrieves all tokens that are currently not allowed to be withdrawn.
 * @return {Promise<WithdrawalDisabledToken[]>}
 */
const GetWithdrawalDisabledTokens = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.WithdrawalDisabledTokens
  });

  return response.data.map(MapTokenInfo);

};

/**
 * Maps withdrawal-disabled tokens into a consistent format.
 * @return {WithdrawalDisabledToken}
 */
const MapTokenInfo = (info) => {
  return {
    symbol: info.symbol,
    address: info.address,
    tokenId: info.tokenId
  };
};

export default GetWithdrawalDisabledTokens;