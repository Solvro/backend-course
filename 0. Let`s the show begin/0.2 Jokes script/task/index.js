// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
import joke from "one-liner-joke"
import util from "util";
import readline from "node:readline";
import { get } from "http";
// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const tags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
const get_data = util.promisify(i.question).bind(i)
get_data("Jaka kategoria żartu wariacie: ").then(data => {
    let r = joke.getRandomJokeWithTag(data).body
    if (!tags.includes(data)) {
        console.log("Niewłaściwa kategoria")
    } else {
        console.log(r)
    }
    i.close()
}).catch(err => {
    console.error(err)
})

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart