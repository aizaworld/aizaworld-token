require('dotenv').config();

function hdWalletProviderOptions(privateKeyEnvVarValue, mnemonicPhraseEnvVarValue, otherOpts) {
  const opts = { ...otherOpts };
  if (privateKeyEnvVarValue) {
    opts.privateKeys = [privateKeyEnvVarValue];
  }
  else {
    opts.mnemonic = mnemonicPhraseEnvVarValue;
  }
  return opts;
}

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: process.env.ETH_DEV_RPC_HOST || '127.0.0.1',
      port: process.env.ETH_DEV_RPC_PORT || 7545,
      network_id: process.env.ETH_DEV_RPC_NETWORK_ID || '*',
      gas: parseInt(process.env.ETH_DEV_RPC_GAS, 10) || 67219750
    },
    rinkeby: {
      provider: () => new HDWalletProvider(hdWalletProviderOptions(
        process.env.BINANCE_WALLET_PRIVATE_KEY,
        process.env.BINANCE_WALLET_MNEMONIC,
        {
          providerOrUrl: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        }
      )),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    bsctestnet: {
      provider: () => new HDWalletProvider(hdWalletProviderOptions(
        process.env.BINANCE_WALLET_PRIVATE_KEY,
        process.env.BINANCE_WALLET_MNEMONIC,
        {
          providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
        }
      )),
      network_id: 0x61,
      confirmations: 10,
      timeoutBlocks: 200,
      gas: 8000000,
      skipDryRun: true
    },
    bscmainnet: {
      provider: () => new HDWalletProvider(process.env.BINANCE_MAINNET_WALLET_PRIVATE_KEY, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      networkCheckTimeout: 10000000,
      gas: 5600000,
      skipDryRun: true
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.2",    // Fetch exact version from solc-bin (default: truffle's version)
      //docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        //evmVersion: "byzantium"
      }
    }
  },
  plugins: [
    "truffle-plugin-verify",
    "truffle-contract-size"
  ],
  api_keys: {
    bscscan: process.env.BSCSCAN_API_KEY,
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
};
