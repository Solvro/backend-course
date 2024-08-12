import readline from 'node:readline';
import oneLinerJoke from 'one-liner-joke';

const cliInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const categories = [
    'animal',
    'car',
    'men',
    'women',
    'life',
    'sport',
    'sarcastic'
]

cliInterface.question("Joke from what category would you like to hear? :", category => {
    if(categories.includes(category)){
        const jokeBody = oneLinerJoke.getRandomJokeWithTag(category).body;
        console.log("Ok, here is the joke: " + jokeBody)
    } else {
        console.log(category + " is not correct joke category (" + categories.join(', ') + ")")
    }
    cliInterface.close();
})