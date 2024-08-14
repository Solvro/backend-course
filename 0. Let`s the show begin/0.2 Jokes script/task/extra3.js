import readline from "node:readline";
import jokeLib from "one-liner-joke";
import util from "node:util";

await main();

/**
 * The main entry point into your program.
 * Prompts the user for a tag and uses it to generate a joke.
 */
async function main() {
    generateJokeByTag(await ask("Joke from what category would you like to hear? "));
}

/**
 * Uses an external library to generate a joke using tag.
 * Prints an error if passed tag is not contained in the array of allowed tags.
 * @param {string} tag - accepted tag.
 */
function generateJokeByTag(tag) {
    let tags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];
    if(!tags.includes(tag)) {
        console.error(`${tag} is not correct joke category (${tags.join(", ")})`);
    } else {
        console.log(jokeLib.getRandomJokeWithTag(tag).body);
    }
}

/**
 * Displays the passed question to the user and waits for an answer.
 * @param {string} question - message to display.
 * @returns {Promise<string>} The user's answer to the question.
 */
async function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const questionFunc = util.promisify(rl.question).bind(rl);
    const answer = await questionFunc(question);
    rl.close();
    return answer;
}