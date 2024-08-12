import readline from 'node:readline';
import oneLinerJoke from 'one-liner-joke';
import {promisify} from 'util';

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

const question = promisify(cliInterface.question).bind(cliInterface);
const category = await question("Joke from what category would you like to hear? :");
if(!categories.includes(category)){
    console.log(category + " is not correct joke category (" + categories.join(', ') + ")");
    process.exit();
}
cliInterface.close();

const jokeBody = oneLinerJoke.getRandomJokeWithTag(category).body;
console.log("Ok, here is the joke: " + jokeBody);