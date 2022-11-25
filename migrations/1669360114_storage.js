// Import the artifat
const Storage = artifacts.require("mycontr1");



module.exports = function(_deployer) {
  // pass the artifact
  _deployer.deploy(Storage)
};
