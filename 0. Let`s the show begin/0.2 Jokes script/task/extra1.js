import readline from "node:readline";
import jokeLib from "one-liner-joke";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];
rl.question("Joke from what category would you like to hear? ", answer => {
    if(!tags.includes(answer)) {
        console.error(`${answer} is not correct joke category (${tags.join(", ")})`);
    } else {
        console.log(jokeLib.getRandomJokeWithTag(answer).body);
    }
    rl.close();
})