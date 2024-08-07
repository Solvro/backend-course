import readline from 'readline';
import oneLinerJoke from 'one-liner-joke';

const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Joke from what category would you like to hear? : ", jokeCategory => {
    if (!allowedCategories.includes(jokeCategory)) {
        console.log(`${jokeCategory} is not correct joke category (${allowedCategories.join(', ')})`);
    } else {
        const joke = oneLinerJoke.getRandomJokeWithTag(jokeCategory);
        console.log(`Ok, here is the joke: ${joke.body}`);
    }
    rl.close();
});