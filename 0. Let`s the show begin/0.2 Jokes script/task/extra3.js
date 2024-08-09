import readline from 'readline';
import oneLinerJoke from 'one-liner-joke';
import util from 'util';

function validateJokeCategory(givenJokeCategory) {
    const availableTags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];
    
    if (!availableTags.includes(givenJokeCategory)) {
        console.error(`${givenJokeCategory} is not correct joke category (${availableTags.join(',')})`);
        process.exit();
    }
}

async function getJokeTagFromUser() {
    const cli = readline.createInterface({
        input:  process.stdin,
        output: process.stdout,
    });
    
    const question = util.promisify(cli.question).bind(cli);
    
    const givenJokeTag = await question("Joke from what category would you like to hear? : ");
    validateJokeCategory(givenJokeTag);
    cli.close();

    return givenJokeTag;
}

function generateAndDisplayJoke(jokeTag) {
    const joke = oneLinerJoke.getRandomJokeWithTag(jokeTag);
    console.log(`Ok, here is the joke: ${joke.body}`);
}


async function main() {
    const givenJokeTag = await getJokeTagFromUser();
    generateAndDisplayJoke(givenJokeTag);
}

await main();