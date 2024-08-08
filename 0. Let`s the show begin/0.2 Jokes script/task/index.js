import rl from "node:readline/promises";
import { getRandomJokeWithTag } from "one-liner-joke";
import { styleText } from "node:util";

/**
 * @returns {Promise<string>} Category from user
 */
const getCategory = async () => {
  const consoleInterface = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return consoleInterface.question(
    "Hello jello, jaka kategoria żartu wariacie?\n"
  );
};

/**
 * @param {string} category
 * @returns {boolean} Whether category is valid
 */
const isValidCategory = (category) => {
  const VALID_CATEGORIES = [
    "animal",
    "car",
    "men",
    "women",
    "life",
    "sport",
    "sarcastic",
  ];

  return VALID_CATEGORIES.includes(category);
};

const category = await getCategory();

if (!isValidCategory(category)) {
  console.log(
    styleText(
      "red",
      `Kategoria ${styleText(
        "bold",
        category
      )} nie jest prawidłowa, próbuj dalej hehe`
    )
  );

  process.exit(1);
}

console.log(getRandomJokeWithTag(category).body);
process.exit(0);
