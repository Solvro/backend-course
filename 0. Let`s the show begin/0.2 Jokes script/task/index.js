// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart

const readline = require("node:readline");
const oljoke = require("one-liner-joke");

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tags = ["animal", "car", "men", "women", "life", "sports", "sarcastic"];

cli.question("Joke from what category would you like to hear?", (tag) => {
  tag = tag.trim();
  if (!tags.includes(tag)) {
    console.log(`${tag} is not a correct category`);
    cli.close();
  }

  const joke = oljoke.getRandomJokeWithTag(tag).body;
  console.log(joke);
  cli.close();
});
