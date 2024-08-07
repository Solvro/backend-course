import readline from 'readline';
import oneLinerJoke from 'one-liner-joke';
import {promisify} from 'util';

/**
 * Reads joke category from console and validates it
 * @returns {Promise<string>} jokeCategory - validated joke category
 */
async function getValidJokeCategory() {
    const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = promisify(rl.question).bind(rl);
    const jokeCategory = await question("Joke from what category would you like to hear? : ")
    if (!allowedCategories.includes(jokeCategory)) {
        console.log(`${jokeCategory} is not correct joke category (${allowedCategories.join(', ')})`);
        process.exit();
    }
    rl.close();

    return jokeCategory;
}

/**
 * Using oneLinerJoke to generate and print joke from the right category
 * @param {string} jokeCategory - accepted category
 */
function getAndDisplayJoke(jokeCategory) {
    const joke = oneLinerJoke.getRandomJokeWithTag(jokeCategory);
    console.log(`Ok, here is the joke: ${joke.body}`);
}

/**
 * Main function.
 * Gets joke category from console to generate and display suitable joke.
 */
async function main() {
    const jokeCategory = await getValidJokeCategory();
    getAndDisplayJoke(jokeCategory);
}

await main()