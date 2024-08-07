// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
const readline = require('node:readline');
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
const oneLinerJoke = require('one-liner-joke');

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
let rl = readline.createInterface(process.stdin, process.stdout);
// używając interfejsu zadaj pytanie o kategorię żartu
rl.question("Joke from what category would you like to hear? :", (tag) => {
    const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
    // zweryfikuj czy dane zgadzają się
    if(!allowedCategories.includes(tag)){
        console.error(`${tag} is not correct joke category (${allowedCategories.join(', ')})`)
        process.exit()
    }
    rl.close()

    // używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart

    const randomJoke = oneLinerJoke.getRandomJokeWithTag(tag)
    console.log(`Ok, here is the joke: ${randomJoke.body}`);
});
