This is a skeleton Truffle project configured for the Klaytn blockchain.

## Running the Project

Create a copy of this repository in your local machine and install the necessary dependencies.

```
git clone https://github.com/thryec/klaytn-truffle-starter.git
cd klatyn-truffle-starter
npm install
```

Create a .env file in the root folder and add your private key in the format shown below.

```
PRIVATE_KEY='0x......'
```

To deploy the contracts to the Baobab testnet:

```
truffle deploy --network testnet
```

To deploy the contracts to the Cypress mainnet:

```
truffle deploy --network mainnet
```
