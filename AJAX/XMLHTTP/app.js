const req = new XMLHttpRequest();

req.onload = function() {
    console.log("DONE WITH REQUEST!")
    console.log(this);
    const data = JSON.parse(this.response);
    console.log(data.ticker.price)
}

req.onerror = function() {
    console.log("ERROR");
    console.log(this);
}

req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
req.send();