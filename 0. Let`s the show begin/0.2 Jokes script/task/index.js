import readline from 'node:readline'
import oneLinerJoke from 'one-liner-joke'
import { promisify } from 'util'

let rl = readline.createInterface(process.stdin, process.stdout);

const question = promisify(rl.question).bind(rl)

const tag = await question("Joke from what category would you like to hear? : ")
const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
if (!allowedCategories.includes(tag)) {
    console.error(`${tag} is not correct joke category (${allowedCategories.join(', ')})`)
    process.exit()
}
rl.close();

const randomJoke = oneLinerJoke.getRandomJokeWithTag(tag)
console.log(`Ok, here is the joke: ${randomJoke.body}`)