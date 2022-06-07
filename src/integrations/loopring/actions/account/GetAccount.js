import LoopringEndpoints from '../settings/LoopringEndpoints';
import LoopringAction from '../LoopringAction';

/**
 * @typedef {object} AccountInfo
 * @property {string} accountId
 * @property {string} owner
 * @property {string} frozen
 * @property {PublicKeyInfo} publicKey
 * @property {string} tags
 * @property {string} nonce
 * @property {string} keyNonce
 * @property {string} keySeed
 */

/**
 * @typedef {object} PublicKeyInfo
 * @property {string} x
 * @property {string} y
 */

/**
 * Retrieves basic account information for a given address or Loopring account identifier.
 * @param {string} [address]
 * @param {string|number} [accountId]
 * @return {Promise<AccountInfo>}
 */
const GetAccount = async ({ address, accountId }) => {

  if (!address && !accountId) {
    throw new Error(`Cannot retrieve account, [address] or [accountId] not specified.`);
  }

  const queryParams = address ?
    { owner: address } :
    { accountId };

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Account.AccountInfo,
    queryParams
  });

  return MapAccountResult(response.data);

};

/**
 * Maps account information into a consistent structure.
 * @return {AccountInfo}
 */
const MapAccountResult = (result) => {
  return {
    accountId: result.accountId,
    owner: result.owner,
    frozen: result.frozen,
    publicKey: {
      x: result.publicKey.x,
      y: result.publicKey.y
    },
    tags: result.tags,
    nonce: result.nonce,
    keyNonce: result.keyNonce,
    keySeed: result.keySeed
  };
};

export default GetAccount;