const { parseEther, parseUnits, MaxUint256, getBalance, formatUnits } = require("ethers");
const { ethers } = require("hardhat");

const ERC20ABI = require('../ERC20.json');
const WETHABI = require('../WETH9.json');
const RouterABI = require("../Router02.json");
const FactoryABI = require("../UniswapV2Factory.json")
const PairABI = require("../UniswapV2Pair.json")


const main = async () => {
  
  

};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

