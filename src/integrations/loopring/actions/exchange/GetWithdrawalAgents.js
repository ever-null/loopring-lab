import LoopringAction from '../LoopringAction';
import LoopringEndpoints from '../settings/LoopringEndpoints';

const GetWithdrawalAgents = async ({ tokenId, amount }) => {
  const response = await LoopringAction({
    endpoint: LoopringEndpoints.Exchange.WithdrawalAgents,
    queryParams: {
      tokenId,
      amount
    }
  });

  // TODO: Need to identify working parameters to identify result structure.
  // TODO: Map function for result.
  return response.data;
};

export default GetWithdrawalAgents;