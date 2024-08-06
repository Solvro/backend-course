// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart
const olj = require('one-liner-joke')
const rl = require('node:readline')
const {stdin: input, stdout: output} = require('node:process')

const rlInterface = rl.createInterface({input, output})

rlInterface.question('Input joke category: \n', (answer) => {
    const allowedCategories = ['stupid', 'racist', 'animal', 'women', 'car']
    if (allowedCategories.includes(answer)){
        const randomJoke = olj.getRandomJokeWithTag(answer.trim())
        if (randomJoke){
            console.log(randomJoke.body);
        } else {
            console.log('No joke lol');
        }
    } else {
        console.log('errored category');
    }
    rlInterface.close()
})
