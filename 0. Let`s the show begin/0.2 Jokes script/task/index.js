import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

const getJoke = (category) => {
    const joke = oneLinerJoke.getRandomJokeWithTag(category);
    console.log(joke?.body ?? 'Joke is empty');
};

readlineInterface.question('Input joke category: ', (answer) => {
    if (allowedCategories.includes(answer)) {
        getJoke(answer);
    } else {
        console.log('Bad category');
    }
    readlineInterface.close();
});