const LoopringEndpoints = {
  Base: 'https://api.loopring.network',
  Exchange: {
    ExchangeInfo: '/api/v3/exchange/info',
    FeeInfo: '/api/v3/exchange/feeInfo',
    MarketDepth: '/api/v3/depth',
    Markets: '/api/v3/exchange/markets',
    MarketTicker: '/api/v3/ticker',
    MixMarkets: '/api/v3/mix/markets',
    MixMarketDepth: '/api/v3/mix/depth',
    MixMarketTicker: '/api/v3/mix/ticker',
    ProtocolPortrait: '/api/v3/sidecar/ProtocolPortrait',
    RecommendedMarkets: '/api/v3/exchange/recommended',
    Timestamp: '/api/v3/timestamp',
    Tokens: '/api/v3/exchange/tokens',
    WithdrawalAgents: '/api/v3/exchange/withdrawalAgents'
  },
  Account: {
    AccountInfo: '/api/v3/account',
    EthAmount: '/api/v3/eth/balances',
    TokenAllowance: '/api/v3/eth/allowances',
    TokenAmount: '/api/v3/eth/tokenBalances'
  }
};

export default LoopringEndpoints;