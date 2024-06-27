require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },

      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    arbitrum: {
      url: "https://arbitrum-sepolia.infura.io/v3/612d895ce5b24b8a8145e29627dc5348",
      accounts: [
        "c5294e4767c1faae0bb1ee680f8be87850681a2f22698b96fd2ab2ba11178507",
      ],
    },
  },
};
