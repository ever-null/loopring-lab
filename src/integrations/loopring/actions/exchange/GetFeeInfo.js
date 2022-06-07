import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * Retrieves fee information for the Loopring DEX.
 * @return {Promise<{
 *   ammTradingFees: object,
 *   orderBookTradingFees: object,
 *   orderBookStableCoinTradingFees: object,
 *   otherFees: object
 * }>}
 */
const GetFeeInfo = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.FeeInfo
  });

  return {
    ammTradingFees: MapOrderBookResult(response.data.AMM_TRADING_FEES),
    orderBookTradingFees: MapOrderBookResult(response.data.ORDERBOOK_TRADING_FEES),
    orderBookStableCoinTradingFees: MapOrderBookResult(response.data.ORDERBOOK_TRADING_FEES_STABLECOIN),
    otherFees: MapOtherFeesResult(response.data.OTHER_FEES)
  };
};

/**
 * Maps order book result data into friendlier formats.
 * @return {{default, vipTier1: *, vipTier2: *, vipTier3: *, vipTier4: *}}
 */
const MapOrderBookResult = (result) => {
  return {
    default: MapOrderBookItem(result.default),
    vipTier1: MapOrderBookItem(result.vip_1),
    vipTier2: MapOrderBookItem(result.vip_2),
    vipTier3: MapOrderBookItem(result.vip_3),
    vipTier4: MapOrderBookItem(result.vip_4)
  };
};

/**
 * Maps order book tier items into a known format.
 * @return {{
 *   symbol: string,
 *   makerRate: number,
 *   takerRate: number
 * }}
 */
const MapOrderBookItem = ({ symbol, makerRate, takerRate }) => {
  return {
    symbol,
    makerRate,
    takerRate
  };
};

/**
 * Maps the other fees object into a friendlier format.
 * @return {{
 *   ammExit: string,
 *   nfgWithdrawAndDeploy: string,
 *   transferAndCounterFactualUpdateAccount: string,
 *   nftTransferAndUpdateAccount: string,
 *   counterFactualUpdateAccount: string,
 *   ammJoin: string,
 *   offChainWithdrawal: string,
 *   transferAndUpdateAccount: string,
 *   updateAccount: string,
 *   transfer: string,
 *   fastOffChainWithdrawal: string,
 *   nftWithdrawal: string,
 *   nftMintAndOpenAccount: string,
 *   deposit: string,
 *   nftTransfer: string,
 *   openAccount: string,
 *   free: string, nftDeploy: string,
 *   nftMint: string,
 *   updateAccountFirstTime: string,
 *   order: string
 * }}
 */
const MapOtherFeesResult = (result) => {
  return {
    ammJoin: result.AMM_JOIN,
    ammExit: result.AMM_EXIT,
    transfer: result.TRANSFER,
    counterFactualUpdateAccount: result.COUNTER_FACTUAL_UPDATE_ACCOUNT,
    free: result.FREE,
    nftTransfer: result.NFT_TRANSFER,
    nftMint: result.NFT_MINT,
    nfgWithdrawAndDeploy: result.NFT_WITHDRAW_AND_DEPLOY,
    updateAccountFirstTime: result.UPDATE_ACCOUNT_FIRST_TIME,
    nftMintAndOpenAccount: result.NFT_MINT_AND_OPEN_ACCOUNT,
    openAccount: result.OPEN_ACCOUNT,
    nftTransferAndUpdateAccount: result.NFT_TRANSFER_AND_UPDATE_ACCOUNT,
    nftDeploy: result.NFT_DEPLOY,
    transferAndUpdateAccount: result.TRANSFER_AND_UPDATE_ACCOUNT,
    fastOffChainWithdrawal: result.FAST_OFFCHAIN_WITHDRAWAL,
    transferAndCounterFactualUpdateAccount: result.TRANSFER_AND_COUNTER_FACTUAL_UPDATE_ACCOUNT,
    updateAccount: result.UPDATE_ACCOUNT,
    offChainWithdrawal: result.OFFCHAIN_WITHDRAWAL,
    nftWithdrawal: result.NFT_WITHDRAWAL,
    order: result.ORDER,
    deposit: result.DEPOSIT,
  };
};

export default GetFeeInfo;