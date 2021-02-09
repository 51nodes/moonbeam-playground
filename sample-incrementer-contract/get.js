const Web3 = require('web3');
const { abi } = require('./compile');

// Initialization
const web3 = new Web3('http://localhost:9933');
if (!process.env.CONTRACT_ADDRESS) {
    throw 'env-variable missing: CONTRACT_ADDRESS';
}
const contractAddress = process.env.CONTRACT_ADDRESS;

// Contract Call
const incrementer = new web3.eth.Contract(abi, contractAddress);
const get = async () => {
   console.log(`Making a call to contract at address ${contractAddress}`);
   const data = await incrementer.methods.number().call();
   console.log(`The current number stored is: ${data}`);
};

get();