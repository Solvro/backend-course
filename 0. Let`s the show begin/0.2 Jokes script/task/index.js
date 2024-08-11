// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
const readline = require('node:readline');
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
const oneLinerJoke = require('one-liner-joke');

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const allowedCategories =['animal', 'car', 'men', 'women', 'life','sport','sarcastic']
// używając interfejsu zadaj pytanie o kategorię żartu
cli.question("Choose a joke category you would like to hear sir \n allowed categories are: " + allowedCategories + '\n',jokeCategory =>{
    if (!allowedCategories.includes(jokeCategory)){
        console.error('this is not correct category!')
        process.exit()
    }
    cli.close();
    const joke = oneLinerJoke.getRandomJokeWithTag(jokeCategory)
    console.log(`your super funny joke is: \n ${joke.body}`)
})

// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart