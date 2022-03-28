const main = async () => {
  //get the transaction contract
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  // deploy transaction contract
  const transactionContract = await transactionFactory.deploy();

  //await deployed response
  await transactionContract.deployed();

  console.log("Transaction.sol deployed to:", transactionContract.address);
};

// IIFE --Immediately Invoked Function Expression
(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
