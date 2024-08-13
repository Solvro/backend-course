// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
import readline from "node:readline";
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
import oneLinerJoke from "one-liner-joke";
// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Zadaj pytanie o kategorię żartu
cli.question("Podaj kategorię żartu: ", (category) => {
  const allowedCategories = [
    "animal",
    "car",
    "men",
    "women",
    "life",
    "sport",
    "sarcastic",
  ];
  if (!allowedCategories.includes(category)) {
    console.error(`Kategoria ${category} nie jest poprawna. Dostepne kategorie: (animal, car, men, women, life, sport, sarcastic)`);
    process.exit()
  } 
  const joke = oneLinerJoke.getRandomJokeWithTag(category.trim());
  console.log(`Oto żart z kategorii "${category}":\n${joke.body}`);

  cli.close();
});
