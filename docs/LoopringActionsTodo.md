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
- [ ] getAllMixTickers
- [ ] getAllTickers
- [ ] getMixCandlestick
- [ ] getCandlestick
- [ ] getFiatPrice
- [ ] disableWithdrawTokenList
- [ ] getMarketTrades
- [ ] getEthNonce
- [ ] getGasPrice
- [ ] getGasPriceRange
- [ ] getAccountServices


## Account

- [X] getAccount - Moved from exchange.
- [X] getEthBalances - Moved from exchange.
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