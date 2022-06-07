import Axios from 'axios';
import LoopringEndpoints from './settings/LoopringEndpoints';

/**
 * Executes an HTTP call against a Loopring endpoint.
 * @param {object} options
 * @return {Promise<*>}
 */
const LoopringAction = async (options) => {
  const {
    endpoint,
    queryParams = [],
    ...axiosOptions
  } = options;

  const url = new URL(endpoint, LoopringEndpoints.Base);

  const queryPairs = Array.isArray(queryParams) ?
    queryParams : Array.from(Object.entries(queryParams));

  queryPairs.forEach((paramPair) =>
    url.searchParams.set(...paramPair));

  return await Axios({
    url,
    ...axiosOptions
  });
};

export default LoopringAction;