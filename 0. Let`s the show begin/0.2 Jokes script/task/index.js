// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
const readline = require("readline");
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
const oneLinerJoke = require("one-liner-joke");
// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "USER> ",
});
// const args = process.argv.slice(2)[0];
const categories = [
  "animal",
  "car",
  "men",
  "women",
  "life",
  "sport",
  "sarcastic",
];
// używając interfejsu zadaj pytanie o kategorię żartu
console.log(`
#####################################################################################    
Write to the console one of the below category:
- animal
- car
- men
- women
- life
- sport
- sarcastic
- elo żelo (exit)
#####################################################################################
`);
// zweryfikuj czy dane zgadzają się
// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart
rl.prompt();
rl.on("line", (line) => {
  let category = line.trim().toLowerCase();

  if (categories.includes(category)) {
    const joke = oneLinerJoke.getRandomJokeWithTag(category);
    console.log(`Okey! Here is the joke: 

        ${joke.body}

        :) 
        `);
  } else if (category == "elo żelo") {
    console.log("Elo Żelo!");
    rl.close();
  } else {
    console.log("Unknown category. Try again.");
    rl.prompt();
  }
});
