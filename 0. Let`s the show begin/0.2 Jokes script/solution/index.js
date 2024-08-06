const readline = require('node:readline');
const oneLinerJoke = require('one-liner-joke');

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

cli.question("Joke from what category would you like to hear? : ", jokeTag => {
    const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
    if (!allowedCategories.includes(jokeTag)) {
        console.error(`${jokeTag} is not correct joke category (${allowedCategories.join(', ')})`)
        process.exit()
    }
    cli.close();

    const joke = oneLinerJoke.getRandomJokeWithTag(jokeTag)
    console.log(`Ok, here is the joke: ${joke.body}`)
});

