let $ = require('jquery')
const ethers = require('ethers');
const { Web3 } = require('web3');
const provider = "https://divine-long-scion.discover.quiknode.pro/0ca103de1af4cb34781a09d39af2699aa8c03f2c/"
const web3 = new Web3(provider);

async function checkBalance(mnemonic) {
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    console.log('wallet ===> ', wallet);
    const address = wallet.address;
    const balance = await web3.eth.getBalance(address);
    console.log('balance ===>', balance);
    $('#walletAddress').html(address);
    $('#balanceTableBody').append(`<tr><td>${'ether'}</td><td>${balance}</td></tr>`);
}

$('#checkBtn').on('click', () => {
    let WordPhrases = $('#WordPhrases').val()
    console.log('word phrases ====> ', WordPhrases);
    $('#balanceTableBody').html('');
    $('#walletAddress').html('');
    checkBalance(WordPhrases);
})
