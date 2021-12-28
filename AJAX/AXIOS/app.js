// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log(res.data.ticker.price);
// })
// .catch(e => {
//     console.log("ERROR!");
//     console.log(e);
// })

// const fetchBitcoinPrice = async () => {
//     try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price);
//     }
//     catch(e){
//         console.log("ERROR!");
//         console.log(e);
//     }
// }

// const getDadJoke = async () => {
//     const config = { headers : { Accept : 'application/json' }};
//     const res = await axios.get('https://icanhazdadjoke.com/',config);
//     console.log(res.data.joke);
// } 

//======================================================

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try{
        const config = { headers : { Accept : 'application/json' }};
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return (res.data.joke);
    }
    catch(e){
        console.log(e);
        return "NO JOKES AVAILABLE! SORRY :(";
        
    }
    
} 
button.addEventListener('click',addNewJoke)