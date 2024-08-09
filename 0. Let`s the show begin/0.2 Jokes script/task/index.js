// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart

const readline = require('readline');
const oneLinerJoke = require('one-liner-joke');

const cli = readline.createInterface({
    input:  process.stdin,
    output: process.stdout,
});

cli.question("Joke from what category would you like to hear? : ", (givenJokeTag) => {
    const availableTags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];
    
    if (!availableTags.includes(givenJokeTag)) {
        console.error(`${givenJokeTag} is not correct joke category (${availableTags.join(',')})`);
        process.exit();
    }
    cli.close();

    const joke = oneLinerJoke.getRandomJokeWithTag(givenJokeTag);
    console.log(`Ok, here is the joke: ${joke.body}`);
});