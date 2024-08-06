// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart
import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";

const rl = readline
const olj = oneLinerJoke

const rlInterface = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rlInterface.question("Input joke category: \n", (answer) => {
  const allowedCategories = ["stupid", "racist", "animal", "women", "car"];
  if (allowedCategories.includes(answer)) {
    rlInterface.close();

    const randomJoke = olj.getRandomJokeWithTag(answer.trim());
    if (randomJoke) {
      console.log(randomJoke.body);
    } else {
      console.log("No joke lol");
    }
  } else {
    console.log("errored category");
  }
});
