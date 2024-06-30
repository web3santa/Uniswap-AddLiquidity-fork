const { parseEther, parseUnits, MaxUint256, getBalance, formatUnits } = require("ethers");
const { ethers } = require("hardhat");

const ERC20ABI = require('../ERC20.json');
const WETHABI = require('../WETH9.json');
const RouterABI = require("../Router02.json");
const FactoryABI = require("../UniswapV2Factory.json")
const PairABI = require("../UniswapV2Pair.json")


const main = async () => {
  
  const [owner] = await ethers.getSigners()


  const provider = ethers.provider;



  const DAI = new ethers.Contract(DAI_ADDRESS, ERC20ABI, owner)
  const WETH = new ethers.Contract(WETH_ADDRESS, WETHABI, owner)
  const Router = new ethers.Contract(UNISWAPV2ROUTER02_ADDRESS, RouterABI, owner)
  const Factory = new ethers.Contract(FACTORY_ADDRESS, FactoryABI, owner)

  let pairAddress = await Factory.getPair(WETH_ADDRESS, DAI_ADDRESS)

  const Pair = new ethers.Contract(pairAddress, PairABI, owner)


  let DAIBalancoe = await DAI.balanceOf(owner.address);

  let onwerETHBalance = await provider.getBalance(owner.address)

  console.log("DAIBalancoe in whale account: ", DAIBalancoe);
  console.log("onwerETHBalance in whale account: ", onwerETHBalance);

  let tx = await DAI.connect(owner).approve(UNISWAPV2ROUTER02_ADDRESS, MaxUint256);
	await tx.wait();

  tx = await WETH.connect(owner).approve(UNISWAPV2ROUTER02_ADDRESS, MaxUint256);
	await tx.wait();


  	const currentBlockTime = Date.now()
	const deadline = currentBlockTime - 10000000;

  tx = await Router.connect(owner).swapETHForExactTokens(
    parseEther("6000"),
    [WETH_ADDRESS, DAI_ADDRESS],
    owner.address,
    deadline,
    {
      value: parseEther("2")
    }
  )

  await tx.wait()

   DAIBalancoe = await DAI.balanceOf(owner.address);

   onwerETHBalance = await provider.getBalance(owner.address)

  console.log("DAIBalancoe in whale account: ", DAIBalancoe);
  console.log("onwerETHBalance in whale account: ", onwerETHBalance);

  let LPTOken = await Pair.balanceOf(owner.address)

  console.log("LP TOken: ", LPTOken);


  tx = await DAI.connect(owner).approve(UNISWAPV2ROUTER02_ADDRESS, MaxUint256);
	await tx.wait();

  tx = await WETH.connect(owner).approve(UNISWAPV2ROUTER02_ADDRESS, MaxUint256);
	await tx.wait();


  console.log("Add liquidity ");

    tx = await Router.addLiquidityETH(
    DAI_ADDRESS,
    parseEther("3000"),
    0,
    0,
    owner.address,
    deadline,
    {
      value: parseEther("1"),
    }
   )

   await tx.wait()

   DAIBalancoe = await DAI.balanceOf(owner.address);

   onwerETHBalance = await provider.getBalance(owner.address)

  console.log("DAIBalancoe in whale account: ", DAIBalancoe);
  console.log("onwerETHBalance in whale account: ", onwerETHBalance);



  const result = await Pair.getReserves();
  console.log("reserves: ", result);

   LPTOken = await Pair.balanceOf(owner.address)

  console.log("LP TOken: ", LPTOken);

};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});

