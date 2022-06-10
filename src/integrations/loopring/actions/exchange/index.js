import GetAllMarketTickers from './GetAllMarketTickers';
import GetAllMixMarketTickers from './GetAllMixMarketTickers';
import GetExchangeInfo from './GetExchangeInfo';
import GetFeeInfo from './GetFeeInfo';
import GetFiatPrices from './GetFiatPrices';
import GetMarketCandlestick from './GetMarketCandlestick';
import GetMarketDepth from './GetMarketDepth';
import GetMarkets from './GetMarkets';
import GetMarketTicker from './GetMarketTicker';
import GetMarketTrades from './GetMarketTrades';
import GetMixMarkets from './GetMixMarkets';
import GetProtocolPortrait from './GetProtocolPortrait';
import GetRecommendedMarkets from './GetRecommendedMarkets';
import GetRelayerCurrentTime from './GetRelayerCurrentTime';
import GetTokens from './GetTokens';
import GetWithdrawalAgents from './GetWithdrawalAgents';
import GetWithdrawalDisabledTokens from './GetWithdrawalDisabledTokens';

const Actions = [
  GetAllMarketTickers,
  GetAllMixMarketTickers,
  GetExchangeInfo,
  GetMarketCandlestick,
  GetFeeInfo,
  GetFiatPrices,
  GetMarketDepth,
  GetMarkets,
  GetMarketTicker,
  GetMarketTrades,
  GetMixMarkets,
  GetProtocolPortrait,
  GetRecommendedMarkets,
  GetRelayerCurrentTime,
  GetTokens,
  GetWithdrawalAgents,
  GetWithdrawalDisabledTokens
];

export default Actions;