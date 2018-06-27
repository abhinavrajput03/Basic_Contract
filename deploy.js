const HdWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HdWalletProvider('chef source deliver sweet wear source divide never caught verify long certain',
  'https://rinkeby.infura.io/oE7BJ9QHZ8hDOaZNjC2i');

const web3 = new Web3(provider);


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

const result =  await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0]});

    console.log('Contrat deployed to', result.options.address);
};

deploy();
