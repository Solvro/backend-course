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


const checkValidCategory = (answer) => {
    const allowedCategories = ["stupid", "animal", "women", "car"]
    return allowedCategories.includes(answer)
}

const getJoke = (answer) => {
    const joke = olj.getRandomJokeWithTag(answer)
    let text
    if (joke) {
        text = joke.body
    } else {
        text = 'Joke is empty'
    }
    console.log(text);
}

const readFromUser = new Promise((resolve, reject) => {
    rlInterface.question('Input joke category: ', (answer) => {
        
        if (checkValidCategory(answer)) {
            resolve(answer)
        } else {
            reject(answer)
        }
        rlInterface.close()
    })
})

readFromUser.then(res => {
    getJoke(res)
}).catch(err => console.log('Bad category'))