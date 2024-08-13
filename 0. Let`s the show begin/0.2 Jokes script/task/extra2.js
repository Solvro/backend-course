import readline from "node:readline";
import jokeLib from "one-liner-joke";
import util from "node:util";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questionFunc = util.promisify(rl.question).bind(rl);
const answer = await questionFunc("Joke from what category would you like to hear? ");

let tags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];
if(!tags.includes(answer)) {
    console.error(`${answer} is not correct joke category (${tags.join(", ")})`);
} else {
    console.log(jokeLib.getRandomJokeWithTag(answer).body);
}
rl.close();
