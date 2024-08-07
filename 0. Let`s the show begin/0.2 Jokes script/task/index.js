// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart
const oneLinerJokes = require('one-liner-joke')
const readline = require('node:readline')


const tags = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic']

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question(`Joke from what category would you like to hear?\nCategories: ${tags}\nYour choice: `, tag => {
    tag = tag.toLowerCase()
    if (!tags.includes(tag)) {
        console.log(`${tag} not available in categories: ${tags}`)
    } else {
        const joke = oneLinerJokes.getRandomJokeWithTag(tag)
        console.log(`Here's your joke:\n${joke.body}`)
    }
    rl.close()
})