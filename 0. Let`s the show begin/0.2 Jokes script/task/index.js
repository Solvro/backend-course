import readline from 'node:readline'
import oneLinerJoke from 'one-liner-joke'

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
askForJokeCategory();


function askForJokeCategory() {
    cli.question("Joke from what category would you like to hear? : ", jokeTag => {
        allowedCategories
        if (!allowedCategories.includes(jokeTag)) {
            console.error(`Provided ${jokeTag} is not correct category, available categories" (${allowedCategories})`)
            askForJokeCategory();
        } else {
            showJoke(jokeTag);
            process.exit();
        }
    })
}

function showJoke(jokeTag) {
    const joke = oneLinerJoke.getRandomJokeWithTag(jokeTag)
    console.log(`Your joke: ${joke.body}`)
}

