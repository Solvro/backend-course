import readline from "node:readline";
import jokeLib from "one-liner-joke";
import util from "node:util";

await main();

async function main() {
    generateJokeByTag(await ask("Joke from what category would you like to hear? "));
}

function generateJokeByTag(tag) {
    let tags = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];
    if(!tags.includes(tag)) {
        console.error(`${tag} is not correct joke category (${tags.join(", ")})`);
    } else {
        console.log(jokeLib.getRandomJokeWithTag(tag).body);
    }
}

async function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const questionFunc = util.promisify(rl.question).bind(rl);
    const answer = await questionFunc(question);
    rl.close();
    return answer;
}