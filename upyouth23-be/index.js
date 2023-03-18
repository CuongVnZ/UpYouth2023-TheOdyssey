// Import necessary libraries and contracts
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const abi = require('path/to/abi.json');
const bytecode = require('path/to/bytecode.json');

// Define configuration variables
const mnemonic = 'YOUR_MNEMONIC_HERE';
const ganacheUrl = 'http://localhost:8545'; // Replace with your Ganache URL
const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';

// Set up web3 instance using Ganache and HDWalletProvider
const provider = new HDWalletProvider(mnemonic, ganacheUrl);
const web3 = new Web3(provider);

// Create instance of contract using ABI and contract address
const contractInstance = new web3.eth.Contract(abi, contractAddress);

// Define functions for interacting with contract
async function getDonationData() {
  // Call contract function to get total amount of donations and number of donors
  const totalDonations = await contractInstance.methods.getTotalDonations().call();
  const numDonors = await contractInstance.methods.getNumDonors().call();
  
  // Return donation data as object
  return {
    totalDonations,
    numDonors
  };
}

async function receiveDonation(amount) {
  // Send transaction to contract to receive donation
  const accounts = await web3.eth.getAccounts();
  const result = await contractInstance.methods.receiveDonation().send({
    from: accounts[0],
    value: web3.utils.toWei(amount, 'ether')
  });
  
  // Return transaction hash as string
  return result.transactionHash;
}

// Export functions for use in frontend
module.exports = {
  getDonationData,
  receiveDonation
};
