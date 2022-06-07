# Architecture

## Design Considerations

- Actions are single-purpose functions for interacting with the Loopring API.
- HTTP calls are funneled through the [`LoopringAction`](../src/integrations/loopring/actions/LoopringAction.js)
  function.
- The [LoopringClient](../src/integrations/loopring/LoopringClient.js) represents a unified way to
  interact with the various actions that are created.  It uses the [ActionSet](../src/integrations/loopring/actions/ActionSet.js)
  class to "graft" the actions onto the class at runtime. For example, the action `GetExchangeInfo` will
  be grafted onto the `exchange` property as `getExchangeInfo`.

## Design TODO

- Research/Create wallet abstractions.
  - Should this be a separate library similar to web3-provider?
- Identify proper/consistent manner to return large numbers.
  - Should they be BigNumber? String? Left as-is from server?
    Example: GetMarketDepth -> MapPositionInfo -> size/volume properties