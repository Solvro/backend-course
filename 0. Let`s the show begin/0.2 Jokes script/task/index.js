// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart

// const readline = require("node:readline");
// const oneLinerJoke = require("one-liner-joke");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`Type in joke category: `, (jokeCategory) => {
//   const categories = ["dirty", "racist", "marriage"];
//   if (!categories.includes(jokeCategory)) {
//     console.error("Unsupported category.");
//     process.exit();
//   }
//   const joke = oneLinerJoke.getRandomJokeWithTag(jokeCategory);
//   console.log(joke.body);
//   rl.close();
// });
import { createInterface } from "node:readline";
import { getRandomJokeWithTag } from "one-liner-joke";
import { promisify } from "node:util";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const validTags = ["animal", "women"];
//task 1
// rl.question(
//   `Type in joke category. Available categories: ${validTags}  : `,
//   (jokeTag) => {
//     if (!validTags.includes(jokeTag)) {
//       console.log(`Wrong category.`);
//       process.exit();
//     }
//     rl.close();
//     const joke = getRandomJokeWithTag(jokeTag);
//     console.log(joke.body);
//   }
// );
//task2
// const question = promisify(rl.question).bind(rl);

// const jokeTag = await question(
//   `Type in joke category. Available categories: ${validTags}  : `
// );

// if (!validTags.includes(jokeTag)) {
//   console.log(`Wrong category.`);
//   process.exit();
// }
// rl.close();
// const joke = getRandomJokeWithTag(jokeTag);
// console.log(joke.body);

//task 3

//returns valid tags of jokes categories
function getValidTags() {
  return ["animal", "women"];
}

//reads joke tag from console
async function getJokeTag() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = promisify(rl.question).bind(rl);

  const jokeTag = await question(
    `Type in joke category. Available categories: ${getValidTags()}  : `
  );

  validateJokeTag(jokeTag, process);
  rl.close();

  return jokeTag;
}

//validates joke tag
function validateJokeTag(jokeTag, process) {
  const validTags = getValidTags();
  if (!validTags.includes(jokeTag)) {
    console.log(`Wrong category.`);
    process.exit();
  }
}
//displays tag
function displayJoke(jokeTag) {
  const joke = getRandomJokeWithTag(jokeTag);
  console.log(joke.body);
}

//runs code
async function run() {
  const jokeTag = await getJokeTag();
  displayJoke(jokeTag);
}

await run();
