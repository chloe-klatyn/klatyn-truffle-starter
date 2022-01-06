const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

const privateKey =
  "0xbe07fa23b57b20a71eb58f0787c8e836cba6a34c920e5db93e5a3f8b4a1a0fb7"; // Enter your private key;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(privateKey, "https://api.baobab.klaytn.net:8651/"),
      network_id: "1001", //Klaytn baobab testnet's network id
      gas: "8500000",
      gasPrice: null,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          "https://public-node-api.klaytnapi.com/v1/cypress"
        ),
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
