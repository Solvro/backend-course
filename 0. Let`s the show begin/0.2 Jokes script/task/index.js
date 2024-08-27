// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart

import readline from "node:readline";
import process from "node:process";
import oneLinerJoke from "one-liner-joke";
import { promisify } from "node:util";
import { resolve } from "node:path";

const CATEGORIES = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// rl.question("Joke from what category would you like to hear? : ", (answer) => {
//   if (!CATEGORIES.includes(answer)) {
//     console.log(`${answer} is not correct joke category (animal, car, men, women, life, sport, sarcastic)`);
//   } else {
//     console.log(oneLinerJoke.getRandomJokeWithTag(answer).body);
//   }

//   rl.close();
// });

function promisifiedQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function validateCategory(category) {
  if (!CATEGORIES.includes(category)) {
    return false;
  }
  return true;
}

function displayErrorMessage(category) {
  console.log(`${category} is not correct joke category (animal, car, men, women, life, sport, sarcastic)`);
}

function displayJoke(category) {
  console.log(oneLinerJoke.getRandomJokeWithTag(category).body);
}

promisifiedQuestion("Joke from what category would you like to hear? : ").then((category) => {
  if (validateCategory(category)) {
    displayJoke(category);
  } else {
    displayErrorMessage(category);
  }

  rl.close();
});
