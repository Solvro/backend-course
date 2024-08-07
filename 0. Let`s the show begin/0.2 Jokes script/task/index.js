import readline from 'node:readline'
import oneLinerJoke from 'one-liner-joke'
import { promisify } from 'util'


async function getTagFromTerminal() {

    let rl = readline.createInterface(process.stdin, process.stdout);

    const question = promisify(rl.question).bind(rl)

    const tag = await question("Joke from what category would you like to hear? : ")
    const categories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
    if (!categories.includes(tag)) {
        console.error(`${tag} is not correct joke category (${categories.join(', ')})`)
        process.exit()
    }
    rl.close();

    return tag
}

function generateAndDisplayJoke(tag){
    const randomJoke = oneLinerJoke.getRandomJokeWithTag(tag)
    console.log(`Ok, here is the joke: ${randomJoke.body}`)
}

async function main() {
    const tag = await getTagFromTerminal()
    generateAndDisplayJoke(tag)
}

await main()