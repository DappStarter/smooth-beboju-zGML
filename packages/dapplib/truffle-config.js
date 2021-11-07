require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard raise night evil heavy praise army genuine'; 
let testAccounts = [
"0x49ba68f6714e96aae076f64d5c14083be46050d3b30f68850cd1f21ebfdfc54b",
"0x1a5915070ab69bda79aee8a11624e0dca6cdce6dac26dd9846a2e50006083907",
"0xa0f6af5d0ec2985176f751446a68cd2610ac3a68bb95499b736d622307d1d157",
"0x9df81f6bd44301882570b33d6439b0bca8fc680674eac7567bf0e51e3b526b96",
"0xc455c56198cba0f11d625c0a31ee73f887946d668461fc28d89bc47d859f05ad",
"0xc20d8bc6f8cc891d01098902091857324db50ed7a661da14ae4618aa13ed26f0",
"0xc5a08fec3de9acb311b42f659a596509405755a007f0c784676cb7f42429c1f0",
"0x8aaff532000de63e84a257a824e60aee4fd1f878efaf1a651db063265aa7828e",
"0x37591951d0a680d599a86fc365cbc908709c775a58126080436e46be0779fe52",
"0x3084cd30fac6ecdd79f0879617ebdf169f44f12ff5b4284cb2e284cd48c225f4"
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

