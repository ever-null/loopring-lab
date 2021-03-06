const LoopringEndpoints = {
  Base: 'https://api.loopring.network',
  Exchange: {
    ExchangeInfo: '/api/v3/exchange/info',
    FeeInfo: '/api/v3/exchange/feeInfo',
    FiatPrice: '/api/v3/price',
    MarketCandlestick: '/api/v3/candlestick',
    MarketDepth: '/api/v3/depth',
    Markets: '/api/v3/exchange/markets',
    MarketTicker: '/api/v3/ticker',
    MarketTrades: '/api/v3/trade',
    MixMarketCandlestick: '/api/v3/mix/candlestick',
    MixMarkets: '/api/v3/mix/markets',
    MixMarketDepth: '/api/v3/mix/depth',
    MixMarketTicker: '/api/v3/mix/ticker',
    ProtocolPortrait: '/api/v3/sidecar/ProtocolPortrait',
    RecommendedMarkets: '/api/v3/exchange/recommended',
    RecommendedGasPrice: '/api/v3/eth/recommendedGasPrice',
    RecommendedGasPriceRange: '/api/v3/eth/recommendedGasPriceRange',
    Timestamp: '/api/v3/timestamp',
    Tokens: '/api/v3/exchange/tokens',
    WithdrawalAgents: '/api/v3/exchange/withdrawalAgents',
    WithdrawalDisabledTokens: '/api/v3/exchange/notWithdrawContractTokens'
  },
  Account: {
    AccountInfo: '/api/v3/account',
    AccountServices: '/api/v3/spi/getAccountServices',
    EthAmount: '/api/v3/eth/balances',
    EthNonce: '/api/v3/eth/nonce',
    TokenAllowance: '/api/v3/eth/allowances',
    TokenAmount: '/api/v3/eth/tokenBalances'
  }
};

export default LoopringEndpoints;