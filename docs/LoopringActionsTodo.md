# Loopring Endpoint Actions

## Exchange

- [X] getRelayerCurrentTime
- [X] getProtocolPortrait
- [X] getExchangeFeeInfo
- [ ] getWithdrawalAgents - ??? - Need params to return viable result - ??? -
- [X] getRecommendedMarkets
- [X] getMarkets
- [X] getMixMarkets
- [X] getTokens
- [X] getExchangeInfo
- [X] getMixDepth - REMOVED - Use getMarketDepth
- [X] getMarketDepth - Renamed from getDepth.
- [X] getMixTicker - REMOVED - Use getMarketTicker
- [X] getMarketTicker - Renamed from getTicker
- [X] getAllMixMarketTickers - Renamed from getAllMixTickers
- [X] getAllMarketTickers - Renamed from getAllMarketTickers
- [X] getMixCandlestick - REMOVED - Use getMarketCandlestick
- [X] getMarketCandlestick - Renamed from GetCandlestick
- [X] getFiatPrices - Renamed from getFiatPrice - NOTE: Prices appear out of sync with DEX UI?
- [X] getWithdrawalDisabledTokens - Renamed from disableWithdrawTokenList
- [X] getMarketTrades - Return types for numeric values may need revisiting.
- [ ] getGasPrice
- [ ] getGasPriceRange
- [ ] getAccountServices


## Account

- [X] getAccount - Moved from exchange.
- [X] getEthBalances - Moved from exchange.
- [X] getEthNonce - Moved from exchange.
- [X] getTokenBalances - Moved from exchange.
- [X] getTokenAllowances - Moved from exchange; renamed from getAllowances.
- [ ] getUserApiKey
- [ ] updateUserApiKey
- [ ] getNextStorageId
- [ ] getOrderDetails
- [ ] getOrders
- [ ] submitOrder
- [ ] cancelOrder
- [ ] cancelMultiOrdersByHash
- [ ] cancelMultiOrdersByCreditOrderId
- [ ] getUserRegTxs
- [ ] getUserPwdResetTxs
- [ ] getUserBalances
- [ ] getUserDepositHistory
- [ ] getUserOnchainWithdrawalHistory
- [ ] getUserTransferList
- [ ] getUserTxs
- [ ] getUserTrades
- [ ] getUserFeeRate
- [ ] getUserOrderFeeRate
- [ ] getMinimumTokenAmt
- [ ] getOffchainFeeAmt
- [ ] getNFTOffchainFeeAmt
- [ ] submitOffchainWithdraw
- [ ] submitInternalTransfer
- [ ] submitDeployNFT
- [ ] submitNFTInTransfer
- [ ] submitNFTWithdraw
- [ ] submitNFTMint
- [ ] submitNFTValidateOrder
- [ ] submitNFTTrade
- [ ] getUserNFTDepositHistory
- [ ] getUserNFTWithdrawalHistory
- [ ] getUserNFTTransferHistory
- [ ] getUserNFTMintHistory
- [ ] getUserNFTTransactionHistory
- [ ] updateAccount
- [ ] SetReferrer
- [ ] getUserNFTBalances
- [ ] getUserVIPAssets
- [ ] getUserVIPInfo