import exp from "node:constants";
import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";
import { promisify } from "util";

/**
 * Reads joke category from console.
 * @returns {Promise<string>} category - category entered by user
 */
async function inputCategory() {
  const cliInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = promisify(cliInterface.question).bind(cliInterface);
  const category = await question(
    "Joke from what category would you like to hear? :"
  );
  cliInterface.close();
  return category;
}

/**
 * Drawing and writing out a joke about a particular category.
 * @param {string} category - joke category
 */
function tellJoke(category) {
  const jokeBody = oneLinerJoke.getRandomJokeWithTag(category).body;
  console.log("Ok, here is the joke: " + jokeBody);
}

/**
 * Handle the wrong caregory.
 * @param {string[]} categories - list of available categories
 * @param {string} category - joke category
 */
function handleInvalidCategory(categories, category) {
  console.log(
    category + " is not correct joke category (" + categories.join(", ") + ")"
  );
  process.exit();
}

/**
 * Validating category.
 * @param {string} category - joke category
 */
function validateCategory(category) {
  const categories = [
    "animal",
    "car",
    "men",
    "women",
    "life",
    "sport",
    "sarcastic",
  ];

  if (!categories.includes(category)) {
    handleInvalidCategory(categories, category);
  }

  tellJoke(category);
}

/**
 * Main function. Generating joke.
 * Gets category from console, verifies its correctness and writes out a joke about the given category.
 */
async function generateJoke() {
  validateCategory(await inputCategory());
}

await generateJoke();
