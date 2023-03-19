const hre =  require("hardhat");

async function main() {

  const Lottery = await ethers.getContractFactory("lottery");
  const contract = await Lottery.deploy();

  await contract.deployed();

  console.log(
    `deployed to ${contract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
