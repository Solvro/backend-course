import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";
import { promisify } from 'util'

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = promisify(readlineInterface.question).bind(readlineInterface)

const getJokeTag = await question("What category of joke would you like to hear?: ")
const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

if (!allowedCategories.includes(getJokeTag)) {
    console.error(`${getJokeTag} is not correct joke category, provide correct one:  (${allowedCategories.join(', ')})`)
    process.exit()
}

const joke = oneLinerJoke.getRandomJokeWithTag(getJokeTag)
console.log(`Here is the joke: ${joke.body}`)
process.exit()
