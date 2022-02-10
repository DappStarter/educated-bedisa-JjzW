require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain erosion good entire success gauge'; 
let testAccounts = [
"0x0a4c0c58b3e47e7f52969d66856b67c38b0eaa42a6b4ca79b66d22c857a79d78",
"0xfbf7daae591748d8adf49e34b7fc02806752b742b719a449fb66e4905bcc4b88",
"0xbd23e4a6e7e5290dad7ac7b04ef2c7f40b3f8724927c7cf1d71e90fd97b63dd6",
"0xd0d5834dc09de11356d2673688581192a06856a9cead9c54a3fcf4037e592345",
"0x280c74f06952c386f144b4a9f57ff935ffaeebe715436fde5e754ea5acd7f2e4",
"0x25d0a98d1fe5bfcdb0cbcd924a905e3b5feea02e21546a6487b0f98dc7f2de95",
"0x50083277d88952a67c55b41c3811cb48942e3b101fe8f898dde799f9b9981377",
"0x904cfca59f2154aef7fd1e9455f741ba5418135a838742d29cfa657ebb081622",
"0x2b228b07d8aee0116b9027c10df9f02c003b720040df8ae92449b1f0612cf8e2",
"0xd283c80136b5aa09c4d8d811f062849cacb8d4bf6a3983ab5e4288151373f0c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

