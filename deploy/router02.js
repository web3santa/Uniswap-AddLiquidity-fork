const {ethers} = require("hardhat")


const main = async () => {
    const [owner] = await ethers.getSigners();

    console.log(owner.address);

    const router = await ethers.getContractFactory("UniswapV2Router02")

    const routerInstance = await router.deploy("0x18aAd47b1bD7835b098b4544E5b50b6B2d479E01", "0x4E05Ec745110BBE736b30cae290Bf799ecd9ad08")

    await routerInstance.waitForDeployment()

    const routerAddress = await routerInstance.getAddress();

    console.log("Router smartContract Address: ", routerAddress);



}


main().catch((e) => {
    console.log(e);
    process.exit(1)
})


// FactoryAddress = "0x18aAd47b1bD7835b098b4544E5b50b6B2d479E01"

// WETH smartContract Address:  0x4E05Ec745110BBE736b30cae290Bf799ecd9ad08