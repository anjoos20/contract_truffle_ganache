// Import the artifat
const Certi = artifacts.require("Certi");



module.exports = function(_deployer) {
  // pass the artifact
  _deployer.deploy(Certi)
};
