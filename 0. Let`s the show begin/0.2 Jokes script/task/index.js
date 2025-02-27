import readline from 'node:readline';
import { promisify } from 'util';
import { getRandomJokeWithTag } from 'one-liner-joke';

const ALLOWED_TAGS = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic'];

const validateUserTag = (userTag) => {
    if (!ALLOWED_TAGS.includes(userTag)) {
        console.log(`${userTag} is not a correct joke category (${ALLOWED_TAGS.join(', ')})`);
        return false;
    }
    return true;
};

const getUserTag = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = promisify(rl.question).bind(rl);
    const usersTag = await question(`Joke from what category would you like to hear? : `);
    rl.close();

    const isValidated = validateUserTag(usersTag);
    if (!isValidated) process.exit();

    return usersTag;
};

const generateJoke = (userTag) => {
    console.log('Ok, here is the joke: ' + getRandomJokeWithTag(userTag).body);
};

(async () => {
    generateJoke(await getUserTag());
})();
