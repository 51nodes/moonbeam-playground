const Web3 = require('web3');
const { abi } = require('./compile');

// Initialization
const privKey =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342'; // Genesis private key
const address = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const web3 = new Web3('http://localhost:9933');
if (!process.env.CONTRACT_ADDRESS) {
    throw 'env-variable missing: CONTRACT_ADDRESS';
}
const contractAddress = process.env.CONTRACT_ADDRESS;

// Contract Tx
const incrementer = new web3.eth.Contract(abi, contractAddress);
const resetTx = incrementer.methods.reset();

const reset = async () => {
   console.log(
      `Calling the reset function in contract at address ${contractAddress}`
   );
   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: address,
         to: contractAddress,
         data: resetTx.encodeABI(),
         gas: '40000',
      },
      privKey
   );

   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(`Tx successfull with hash: ${createReceipt.transactionHash}`);
};

reset();