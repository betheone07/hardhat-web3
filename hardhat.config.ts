/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 import "@nomiclabs/hardhat-waffle";
 import "@nomiclabs/hardhat-ethers";
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
