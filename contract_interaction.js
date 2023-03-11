const Web3 = require('web3')
const Provider = require('@truffle/hdwallet-provider');

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const sendData = async () => {

    console.log("in function");
    var provider = new Provider("privatkey", "https://rpc-main1.qiblockchain.online");
    var web3 = new Web3(provider);
    var myContract = new web3.eth.Contract(abi, "contractaddress");
    var oldvalue = await myContract.methods.retrieve().call();
    console.log("oldvalue", oldvalue);
  
  
    var receipt = await myContract.methods.store(5781).send({ from: "publickey" });
    console.log(receipt);
  
    var newvalue = await myContract.methods.retrieve().call();
    console.log("newvalue", newvalue);
  
    console.log("done with all things");
  
  }
  
  sendData();