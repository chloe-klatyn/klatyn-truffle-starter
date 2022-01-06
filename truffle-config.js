require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

const privateKey = process.env.PRIVATE_KEY; // Enter your private key;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(privateKey, process.env.BAOBAB_RPC_URL),
      network_id: "1001", //Klaytn baobab testnet's network id
      gas: "8500000",
      gasPrice: null,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(privateKey, process.env.CYPRESS_RPC_URL),
      network_id: "8217", //Klaytn mainnet's network id
      gas: "8500000",
      gasPrice: null,
    },
  },
  compilers: {
    solc: {
      version: "0.5.6",
    },
  },
};
