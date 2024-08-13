// załaduj biblotekę node:readline do obsługi pobierania danych z konsoli
var rl = require('node:readline');

// załaduj biblotekę one-liner-joke, którą wcześniej zainstalował*ś
var olj = require('one-liner-joke');

// utwórz interfejs, za pomocą którego będziesz mógł prowadzić interakcję z cli (terminalem)
const ClientInterface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

// używając interfejsu zadaj pytanie o kategorię żartu
ClientInterface.question('Enter a tag: ', (tag) => {

    var allowedTags = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic'];

    if (tag === '') {
        console.log('Tag cannot be empty, try again');
        ClientInterface.close();
    } else if (!allowedTags.includes(tag)) {
        console.log(`No tag of the name ${tag} found, try one of: ${allowedTags.join(', ')}`);
        ClientInterface.close();
    } else {
        console.log(olj.getRandomJokeWithTag(tag).body);
        ClientInterface.close();
    }
});

// zweryfikuj czy dane zgadzają się

// używając getRandomJokeWithTag z wcześniej zaimportowanej biblioteki pobierz i wyświetl żart