const {ethers} = require("hardhat")


const main = async () => {
    const [owner] = await ethers.getSigners();

    console.log(owner.address);

    const factory = await ethers.getContractFactory("UniswapV2Factory")

    const factoryInstance = await factory.deploy("0x6109335D798f33B0dB045cB30C31e2C3D87cA31a")

    await factoryInstance.waitForDeployment()

    const factoryAddress = await factoryInstance.getAddress();

    console.log("factory smartContract Address: ", factoryAddress);



}


main().catch((e) => {
    console.log(e);
    process.exit(1)
})