// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
const joke = require("one-liner-joke")
const inp = require("node:readline")
// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const i = inp.createInterface({
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