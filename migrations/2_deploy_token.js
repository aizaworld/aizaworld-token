const util = require("util");
const fs = require("fs");

const AizaWorldToken = artifacts.require("AizaWorldToken");

writeFileAsync = util.promisify(fs.writeFile);

module.exports = async function (deployer, network, accounts) {
  if (
    network === "development" ||
    network === "development-fork" ||
    network === "bsctestnet" ||
    network === "bsctestnet-fork"
  ) {
    await deployer.deploy(AizaWorldToken);
    await AizaWorldToken.deployed();
  }
};
