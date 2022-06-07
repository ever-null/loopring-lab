import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * @typedef {object} ExchangeInfo
 * @property {number} chainId
 * @property {string} depositAddress
 * @property {string} exchangeAddress
 * @property {ExchangeFeeInfo} fees
 */

/**
 * @typedef {object} ExchangeFeeInfo
 * @property {object[]} ammExit
 * @property {object[]} fastWithdrawal
 * @property {object[]} onChain
 * @property {object[]} openAccount
 * @property {object[]} transfer
 * @property {object[]} update
 * @property {object[]} withdrawal
 */

/**
 * Retrieves details about the Loopring DEX.
 * @return {Promise<ExchangeInfo>}
 */
const GetExchangeInfo = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.ExchangeInfo
  });

  return MapExchangeInfo(response.data);
};

/**
 * Maps the exchange information into a consistent format.
 * @return {ExchangeInfo}
 */
const MapExchangeInfo = (result) => {
  return {
    chainId: result.chainId,
    depositAddress: result.depositAddress,
    exchangeAddress: result.exchangeAddress,
    fees: {
      ammExit: result.ammExitFees,
      fastWithdrawal: result.fastWithdrawalFees,
      onChain: result.onchainFees,
      openAccount: result.openAccountFees,
      transfer: result.transferFees,
      update: result.updateFees,
      withdrawal: result.withdrawalFees
    }
  };
};

export default GetExchangeInfo;