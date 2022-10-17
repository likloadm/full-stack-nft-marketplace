require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
 const privateKey = fs.readFileSync(".secret").toString().trim() || "";
 const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "qtum",
  networks: {
    hardhat: {
      chainId: 1337
    },

    qtum: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://eth2.quark.blue:23890",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000
    },
//    matic: {
//      // Infura
//      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
//      url: "https://rpc-mainnet.maticvigil.com",
//      accounts: [privateKey]
//    }
//    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
