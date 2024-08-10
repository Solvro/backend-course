// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
import joke from "one-liner-joke"
import readline from "node:readline";
// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const tags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
i.question("Jaka kategoria żartu wariacie: ", (res) => {
    let r = joke.getRandomJokeWithTag(res).body
    if (!tags.includes(res)) {
        console.log("Niewłaściwa kategoria")
    } else {
        console.log(r)
    }
    i.close()
})
// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart