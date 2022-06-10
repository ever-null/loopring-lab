import React from 'react';
import useWalletConnector from './hooks/wallet/useWalletConnector';
import { LoopringClient, TradingIntervals } from './integrations/loopring';

const App = () => {
  const wallet = useWalletConnector();

  const handleMetaMaskClick = async () => {
    await wallet.disengage();
    await wallet.engage('MetaMask');
    const accounts = await wallet.requestAccounts();
    console.log(accounts);
  };

  const handleApiTestButtonClick = async () => {
    const client = new LoopringClient('');

    // const accountInfo = await client.account.getAccount({ accountId: '10007' });
    // console.log(accountInfo);

    // const exchangeInfo = await client.exchange.getRelayerCurrentTime();
    // console.log(exchangeInfo);
    //
    // const portraitInfo = await client.exchange.getProtocolPortrait();
    // console.log(portraitInfo);

    // const feeInfo = await client.exchange.getFeeInfo();
    // console.log(feeInfo);

    // TODO
    // const withdrawalAgents = await client.exchange.getWithdrawalAgents({ tokenId: 1, amount: "10000000000" });
    // console.log(withdrawalAgents);

    // const recMarkets = await client.exchange.getRecommendedMarkets();
    // console.log(recMarkets);

    // const markets = await client.exchange.getMarkets();
    // console.log(markets);

    // const markets = await client.exchange.getMixMarkets();
    // console.log(markets);

    // const tokens = await client.exchange.getTokens();
    // console.log(tokens);

    // const ethAmount = await client.account.getEthAmount('0x1F28F10176F89F4E9985873B84d14e75751BB3D1');
    // console.log(ethAmount);

    // const tokenAmounts = await client.account.getTokenAmounts('0x1F28F10176F89F4E9985873B84d14e75751BB3D1', ['0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD']);
    // console.log(tokenAmounts);

    // const tokenAllowances = await client.account.getTokenAllowances('0x1F28F10176F89F4E9985873B84d14e75751BB3D1', ['0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD']);
    // console.log(tokenAllowances);

    // const exchangeInfo = await client.exchange.getExchangeInfo();
    // console.log(exchangeInfo);

    // const marketDepth = await client.exchange.getMarketDepth('LRC-ETH', 1);
    // console.log(marketDepth);

    // const mixDepth = await client.exchange.getMarketDepth('AMM-LRC-ETH');
    // console.log(mixDepth);

    // const marketTicker = await client.exchange.getMarketTicker(['LRC-ETH', 'amm-lrc-usdc', 'lrc-usdt', 'amm-lrc-eth']);
    // console.log(marketTicker);

    // const marketTickers = await client.exchange.getAllMarketTickers();
    // console.log(marketTickers);
    //
    // const mixMarketTickers = await client.exchange.getAllMixMarketTickers();
    // console.log(mixMarketTickers);

    // const candlestick = await client.exchange.getMarketCandlestick('LRC-ETH', TradingIntervals.Days1);
    // console.log(candlestick);

    // const fiatPrices = await client.exchange.getFiatPrices('USD');
    // console.log(fiatPrices);

    // const tokens = await client.exchange.getWithdrawalDisabledTokens();
    // console.log(tokens);

    // const trades = await client.exchange.getMarketTrades('LRC-ETH');
    // console.log(trades);

    // const nonce = await client.account.getEthNonce('0x1F28F10176F89F4E9985873B84d14e75751BB3D1');
    // console.log(nonce);

    // const price = await client.exchange.getRecommendedGasPrice();
    // console.log(price);

    // const price = await client.exchange.getRecommendedGasPriceRange();
    // console.log(price);

    // const services = await client.account.getAccountServices();
    // console.log(services);

  };

  return (
    <React.Fragment>
      <header>Loopring Lab</header>
      <section className={'content'}>
        <button onClick={handleMetaMaskClick}>MetaMask</button>
        <button onClick={handleApiTestButtonClick}>API Tester</button>
      </section>
    </React.Fragment>
  );
};

export default App;
