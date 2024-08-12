// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart

// const readline = require("node:readline");
// const oneLinerJoke = require("one-liner-joke");
import readline from "node:readline";
import { promisify } from "node:util";
import oneLinerJoke from "one-liner-joke";

const CLI = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 *
 * @returns {Promise<string>}
 */

const readTag = async () => {
  const questionPromise = promisify(CLI.question).bind(CLI);
  const tag = (
    await questionPromise("Joke from what category would you like to hear?")
  ).trim();

  return tag;
};
/**
 *
 * @param {string[]} tags A list of accepted category tags
 */
const getJoke = async (tags) => {
  try {
    const tag = await readTag();
    const content = tags.includes(tag)
      ? oneLinerJoke.getRandomJokeWithTag(tag).body
      : `${tag} is not a correct category`;
    console.log(content);
  } catch (err) {
    console.error(err);
  } finally {
    CLI.close();
  }
};

const TAGS = ["animal", "car", "men", "women", "life", "sports", "sarcastic"];

getJoke(TAGS);
