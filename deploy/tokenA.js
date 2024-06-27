const {ethers} = require("hardhat")


const main = async () => {
    const [owner] = await ethers.getSigners();

    console.log(owner.address);

    const tokenA = await ethers.getContractFactory("ERC20")


        // 50,000 token
    const initialSupply = 50000000000000000000000n

    const tokenAInstance = await tokenA.deploy(initialSupply)

    await tokenAInstance.waitForDeployment()

    const tokenAAddress = await tokenAInstance.getAddress();

    console.log("TokenA  smartContract Address: ", tokenAAddress);



}


main().catch((e) => {
    console.log(e);
    process.exit(1)
})
