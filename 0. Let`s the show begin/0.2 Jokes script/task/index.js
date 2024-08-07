// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart
import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const checkValidCategory = (answer) => {
    const allowedCategories = ["animal", "car", "women", "men", 'life', 'sport', 'sarcastic']
    return allowedCategories.includes(answer)
}

const getJoke = (answer) => {
    const joke = oneLinerJoke.getRandomJokeWithTag(answer)
    console.log(joke?.body ?? 'Joke is empty');
}

const readFromUser = new Promise((resolve, reject) => {
    readlineInterface.question('Input joke category: ', (answer) => {
        
        if (checkValidCategory(answer)) {
            resolve(answer)
        } else {
            reject(answer)
        }
        readlineInterface.close()
    })
})

readFromUser.then(res => {
    getJoke(res)
}).catch(err => console.log('Bad category'))