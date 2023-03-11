const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
var EthereumTransaction = require('ethereumjs-tx').Transaction;
// const { Common, Chain, Hardfork } = require('ethereumjs-common')
const Common = require('ethereumjs-common').default; 


// const TX = require("ethereumjs-tx");
// const TX = require("ethereumjs-tx");

const web3 = new Web3("https://rpc-main1.qiblockchain.online");
// web3 function for lastest block height.
async function sendMoney(){
    const privateKey1 = Buffer.from('privatekey', 'hex')
    // const chainId = await wallet.getChainId();
    const networkId = await web3.eth.net.getId();

    console.log("mmmmm",networkId)
    let nonce= await web3.utils.hexToNumber(await web3.eth.getTransactionCount("publickey"))+1;
    console.log("nonce===>",nonce);
    // web3.utils.hexToNumber
    console.log("nonce",nonce);
    const txObject = {
        nonce: web3.utils.toHex(nonce),
        to: "0xC47db6DBBC1E6C5cE7D5fc4f7C42f8288c10cf35",
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        // gasPrice: web3.utils.toHex(web3.utils.toWei('1000', 'gwei')),
        chainId: "9731"

   }
   const customCommon = Common.forCustomChain('mainnet', {
    name: 'QIE',
    networkId: 9731,
    chainId: 9731
  }, 'petersburg')

  
   const tx = new Tx(txObject,{common: customCommon})
   tx.sign(privateKey1)
//    const tx = transaction.sign(privateKey1);

   const serializedTransaction = tx.serialize()
   const raw = '0x' + serializedTransaction.toString('hex')
   console.log("raw -----",raw);
//    Broadcast the transaction
web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
    console.log("tx hash",txHash)
    })
   }
   



    sendMoney()