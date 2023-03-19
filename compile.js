const fs = require("fs");
const path = require("path");
const { ethers } = require("hardhat");

async function main() {
  const contractPath = path.join(__dirname, "contracts", "Lottery.sol");
  const contractSource = fs.readFileSync(contractPath, "utf8");

  const MyContract = await ethers.getContractFactory("Lottery");
  const { abi, bytecode } = await MyContract.compile(contractSource);

  fs.writeFileSync(
    path.join(__dirname, "artifacts", "Lottery.json"),
    JSON.stringify({ abi, bytecode }, null, 2)
  );

  console.log("Contract compiled and saved to artifacts/MyContract.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
