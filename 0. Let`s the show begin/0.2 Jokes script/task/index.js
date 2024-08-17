import readline from 'node:readline';
import { getRandomJokeWithTag } from "one-liner-joke";

const categories = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic'];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askForJoke = () => {
    return new Promise((resolve) => {
        rl.question('Joke from what category would you like to hear? : ', (answer) => {
            resolve(answer);
        });
    });
};
const displayJoke = (category) => {
    if(categories.includes(category)) {
        console.log('Ok, you asked for it:', getRandomJokeWithTag(category).body);
    }
    else console.error(`${category} is not correct category (${categories.join(', ')})`);
};

const category = await askForJoke();
displayJoke(category);
rl.close();