const {ethers} = require("hardhat")


const main = async () => {
    const [owner] = await ethers.getSigners();

    console.log(owner.address);

    const tokenB = await ethers.getContractFactory("TokenB")


        // 40,000 token
    const initialSupply = 40000000000000000000000n

    const tokenBInstance = await tokenB.deploy(initialSupply)

    await tokenBInstance.waitForDeployment()

    const tokenBAddress = await tokenBInstance.getAddress();

    console.log("TokenB  smartContract Address: ", tokenBAddress);



}


main().catch((e) => {
    console.log(e);
    process.exit(1)
})
