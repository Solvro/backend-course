// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
import joke from "one-liner-joke"
import util from "util";
import readline from "node:readline";
// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const i = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Nazwa funkcji: Is_Valid()
// Zmienne przyjmowane: data (String)  
// Wartość zwracana: boolean
// Opis działania funcji:
// funkcja sprawdza czy podana kategoria należy do wybranego zakresu kategorii
// 
// 

function Is_Valid(data) {
    const tags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
    if (tags.includes(data)) {
        return true
    } else {
        return false
    }
}

// Nazwa funkcji: Create_Joke()
// Zmienne przyjmowane: cat (String)
// Wartość zwracana: komunikat o błędzie lub żart (String)
// Opis działania funcji:
// funkcja wykorzystuje sprawdza poprawność kategorii używając funkcji Is_Valid() 
// po czym przy wykorzystaniu funkcji getRandomJokeWithTag()
// generuje żart na podstawie podanej kategorii,
// jeżeli kategoria jest niepoprawna zwraca komunikat 'Niewłaściwa kategoria'
function Create_Joke(cat) {
    if (Is_Valid(cat)) {
        return joke.getRandomJokeWithTag(cat).body
    } else {
        return "Niewłaściwa kategoria"
    }
}

const get_data = util.promisify(i.question).bind(i)
get_data("Jaka kategoria żartu wariacie: ").then(data => {
    console.log(Create_Joke(data));
    i.close()
}).catch(err => {
    console.error(err)
})

// używając interfejsu zadaj pytanie o kategorię żartu
// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart