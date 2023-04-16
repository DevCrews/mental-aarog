const MyToken = artifacts.require("MAG");

module.exports = function (deployer) {
  deployer.deploy(MyToken, 1000000000);
};
