require('dotenv').config();

function hdWalletProviderOptions(privateKeyEnvVarValue, mnemonicPhraseEnvVarValue, otherOpts) {
  const opts = { ...otherOpts };
  if(privateKeyEnvVarValue) {
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
      gas: 10000000,  // 8000000,
      skipDryRun: true
    },
    bscmainnet: {
      provider: () => new HDWalletProvider(hdWalletProviderOptions(
        process.env.BINANCE_MAINNET_WALLET_PRIVATE_KEY,
        process.env.BINANCE_MAINNET_WALLET_MNEMONIC,
        {
          providerOrUrl: 'https://bsc-dataseed.binance.org/'
        }
      )),
      network_id: 0x38,
      confirmations: 10,
      timeoutBlocks: 200,
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
  },
};
