import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";
import { promisify } from "util";

/**
 * Reads joke tag from console and validate it against fixed array of tags.
 * @returns {Promise<string>} jokeTag - validated joke tag from the console
 */
async function getJokeTagFromCLI() {
  const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = promisify(cli.question).bind(cli);

  const jokeTag = await question(
    "Joke from what category would you like to hear? : "
  );
  const allowedCategories = [
    "animal",
    "car",
    "men",
    "women",
    "life",
    "sport",
    "sarcastic",
  ];
  if (!allowedCategories.includes(jokeTag)) {
    console.error(`${jokeTag} is not correct joke category (${allowedCategories.join(", ")})`);
    process.exit();
  }
  cli.close();

  return jokeTag;
}

/**
 * Using one liner joke add joke tag generate and write it to console
 * @param {string} jokeTag - accepted tag
 */
function generateAndDisplayJoke(jokeTag) {
  const joke = oneLinerJoke.getRandomJokeWithTag(jokeTag);
  console.log(`Ok, here is the joke: ${joke.body}`);
}

/**
 * Main function. Controlls flow of events.
 * Gets joke tag from cli and then using it generates and displays a joke to the console.
 */
async function main() {
  const jokeTag = await getJokeTagFromCLI();
  generateAndDisplayJoke(jokeTag);
}

await main();
