import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import oneLinerJoke from 'one-liner-joke';

/**
   * Gets a tag from console, and validates it
   * @return {Promise<string>}      Valid tag from list
   */
const getValidTagFromConsole = async () => {
    const rl = readline.createInterface({ input, output });
    const tag = await rl.question("Joke from what category would you like to hear?: ");

    const allowed = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

    rl.close();

    if (!allowed.includes(tag)) {
        console.log(tag, "is not correct joke category (animal, car, men, women, life, sport, sarcastic)");
        process.exit();
    }

    return tag;
};

/**
   * Show a joke from given category
   * @param {string} tag    Tag to get the joke
   */
const displayTheJokeWithTag = (tag) => {
    const joke = oneLinerJoke.getRandomJokeWithTag(tag);
    console.log("Ok, here is the joke:", joke.body);
};

/**
   * Main function of this module
   */
const main = async () => {
    const tag = await getValidTagFromConsole();
    displayTheJokeWithTag(tag);
};

main();