# Moonbeam Playground Solidity
This repository serves to test Smart Contracts written in Solidity on [Moonbeam](https://moonbeam.network/). Moonbeam is a [Substrate](https://substrate.dev/) based Blockchain that aims to become a Ethereum-compatible Parachain on [Polkadot](https://polkadot.network/).

Github of Moonbeam: https://github.com/PureStake/moonbeam

## Moonbeam & Frontier
Moonbeam is integrating [Frontier](https://github.com/paritytech/frontier) which is Substrate's Ethereum compatibility layer.

What's special about Moonbeam is that it unifies accounts to fully support Ethereum-like H160 addresses and thus eliminates the need for holding two separate private keys in order to make use of Substrate based features and Ethereum features.

Read more:
- https://www.purestake.com/news/moonbeam-network-upgrades-account-structure-to-match-ethereum/
- https://medium.com/moonbeam-network/moonbase-alpha-v3-introducing-unified-accounts-88fae3564cda

## Moonbeam Standalone Node
To run the standalone node execute the following command.
```
docker-compose up -d
```

## Open explorer(s)
To see the activities (e.g. new blocks and other chain events) visit https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.00.1%3A9944.

There is also a more specific Ethereum explorer available here https://expedition.dev/?rpcUrl=http%3A%2F%2F127.0.0.1%3A9933

**Note**: If you are using Brave you should disable the shields in order to get a connection.

## Configure Metamask
You can also use Metamask to perform transactions on the local Moonbeam network using following configuration:
- RPC URL: `http://127.0.0.1:9933`
- ChainID: `1281`
- Symbol (Optional): `DEV`

You can e.g. create a new Account on Metamask and send the coins from Polkadot-JS Apps using the Account tab from the default Account you imported previously to the newly created Account on Metamask to test if it works.

## Deploy and test "Incrementer" Contract
Following the [official tutorial](https://docs.moonbeam.network/getting-started/local-node/web3-js/web3-contract/) we can easily deploy and interact with a Smart Contract on Moonbeam. In this case we use `solc` to compile the Smart Contract and `web3` to deploy and interact with the Contract.

1. Switch to folder `sample-incrementer-contract`
1. Run `npm install`
    - will install the dependencies `solc` and `web3` which are required to compile and interact with the Smart Contract
1. Run `node deploy.js`
    - will deploy the Incrementer Contract on the Moonbeam node and print its address
1. Run `export CONTRACT_ADDRESS=<?>`
    - replace `<?>` with the actual Contract address
    - this env variable is used in other scripts to interact with the Contract
1. Run `node get.js`
    - the number should be `51`
1. Run `node increment.js`
    - the number will be increased by `3`
    - when running `get.js` again it should print `54`
1. Run `node reset.js`
    - will set the number to `0`

## Use Truffle to write, test and deploy Smart Contracts
Moonbeam provides a Truffle box with a sample ERC20 token contract which is already "unboxed" in the folder `truffle-box`.

Instead of having to run the Moonbeam node using the docker-compose file it is also possible to run it by executing commands with the provided moonbeam-truffle-plugin. You can read more about the Truffle integration at https://docs.moonbeam.network/integrations/trufflebox/.

For playing around with the default box:
1. Switch to folder `truffle-box`
1. Run `npm install` to install the required dependencies
1. Run `truffle compile` to compile the Contract
1. Run `truffle test` to execute the tests written in Javascript
1. Run `truffle migrate --network dev` to deploy the Contract on the local node started previously using the compose file

## Official documentation
There are lots of other tutorials and informations about Moonbeam. Checkout the [official documentation](https://docs.moonbeam.network/) to learn more.