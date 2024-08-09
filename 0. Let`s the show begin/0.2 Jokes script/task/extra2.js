import readline from 'readline';
import oneLinerJoke from 'one-liner-joke';
import util from 'util';

const cli = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
});

const question = util.promisify(cli.question);

const givenJokeTag = await question("Joke from what category would you like to hear? : ");
const availableTags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

if (!availableTags.includes(givenJokeTag)) {
    console.error(`${givenJokeTag} is not correct joke category (${availableTags.join(',')})`);
    process.exit();
}
cli.close();

const joke = oneLinerJoke.getRandomJokeWithTag(givenJokeTag);
console.log(`Ok, here is the joke: ${joke.body}`);