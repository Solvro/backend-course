import oneLinerJoke from 'one-liner-joke';
import readline from 'node:readline';
import { promisify } from 'node:util';


const tags = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic'];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//utrzymywaine contextu this to dla mnie cos nowego
const questionProm = promisify(rl.question).bind(rl);

/**
 * Prompts the user for a joke category and returns their choice
 * @async
 * @returns {Promise<string>} A promise that resolves to the user's chosen category in lowercase
 */
async function getUserTag() {
    const tag = await questionProm(`Joke from what category would you like to hear?\nCategories: ${tags}\nYour choice: `);
    return tag.toLowerCase();
}


/**
 * Validates if the given tag is in the list of available categories
 * @param {string} tag - The tag to validate
 * @returns {boolean} True if the tag is valid, false otherwise
 */
function validateUserTag(tag) {
    return tags.includes(tag);
}


/**
 * Generates a random joke from the given category
 * @param {string} tag - The category of the joke
 * @returns {string} The body of the generated joke
 */
function generateJoke(tag) {
    return oneLinerJoke.getRandomJokeWithTag(tag).body;
}

/**
 * Main function to run the joke program
 * @async
 */
async function main() {
    let tag = await getUserTag();

    if (validateUserTag(tag)) {
        console.log(`Here's your joke:\n${generateJoke(tag)}`);
    } else {
        console.log(`${tag} not available in categories: ${tags}`);
    };
    rl.close();
}

main();

