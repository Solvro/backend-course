import readline from 'node:readline'
import oneLinerJoke from 'one-liner-joke';
import { promisify } from 'util'

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = promisify(cli.question).bind(cli)

const jokeTag = await question("Joke from what category would you like to hear? : ")
const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
if (!allowedCategories.includes(jokeTag)) {
    console.error(`${jokeTag} is not correct joke category (${allowedCategories.join(', ')})`)
    process.exit()
}
cli.close();

const joke = oneLinerJoke.getRandomJokeWithTag(jokeTag)
console.log(`Ok, here is the joke: ${joke.body}`)