const jokes = require('give-me-a-joke');
const colors = require('colors');
// console.dir(jokes);

const cowsay = require('cowsay')

jokes.getRandomDadJoke (function(joke) {
     console.log(joke.rainbow);
});
jokes.getRandomDadJoke (function(joke) {
    console.log(joke.inverse);
});
