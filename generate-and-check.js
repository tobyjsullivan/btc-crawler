var bitcoin = require('bitcoinjs-lib');
var open = require('open');
var sha256 = require('sha256');
var bs58 = require('bs58');

// console.log("Hello World!");

var password = process.argv[2];

var keyPair = null;
if (password == null) {
  keyPair = bitcoin.ECPair.makeRandom();
} else {
  hash = sha256(password);
  console.log('Hashed password: '+hash);

  // Convert from hex to base58
  var wif = bs58.encode(new Buffer(hash, 'hex'));
  console.log('WIF: '+wif);

  keyPair = bitcoin.ECPair.fromWIF(wif);
}

var privKey = keyPair.toWIF();
var pubKey = keyPair.getAddress();

console.log(pubKey+':'+privKey);

details_url = 'https://blockchain.info/address/'+pubKey;

// open(details_url);
console.log(details_url);

