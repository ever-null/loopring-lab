import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

/**
 * Retrieves the timestamp and date for the Loopring relayer's current time.
 * @return {Promise<{date: Date, timestamp: number}>}
 */
const GetRelayerCurrentTime = async () => {

  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.Timestamp
  });

  const { timestamp } = response.data;

  return {
    timestamp,
    date: new Date(timestamp)
  };

};

export default GetRelayerCurrentTime;