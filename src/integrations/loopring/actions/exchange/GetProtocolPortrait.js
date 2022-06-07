import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * Retrieves a "portrait" of the Loopring protocol, providing things like total users and trades.
 * @return {Promise<{
 *   timestamp: number,
 *   tradeVolume: number,
 *   totalUserNum: number,
 *   tradeNum: number,
 *   layerTwoLockedVolume: number
 * }>}
 */
const GetProtocolPortrait = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.ProtocolPortrait
  });

  return MapProtocolResult(response.data);
};

/**
 * Maps the protocol portrait info from the action result.
 * @return {{
 *   timestamp: number,
 *   tradeVolume: number,
 *   totalUserNum: number,
 *   tradeNum: number,
 *   layerTwoLockedVolume: number
 * }}
 */
const MapProtocolResult = (result) => {
  return {
    timestamp: result.timestamp,
    tradeVolume: result.tradeVolume,
    totalUserNum: result.totalUserNum,
    tradeNum: result.tradeNum,
    layerTwoLockedVolume: result.layerTwoLockedVolume
  };
};

export default GetProtocolPortrait;