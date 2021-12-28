axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price);
})
.catch(e => {
    console.log("ERROR!");
    console.log(e);
})

const fetchBitcoinPrice = async () => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    }
    catch(e){
        console.log("ERROR!");
        console.log(e);
    }
}