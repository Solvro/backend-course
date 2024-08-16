import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";
import {promisify} from 'util'


/**
 * Define const allowedCategories to validate provided by user category
 */
const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

/**
 * Function to ask the user (via CLI) which category of joke they would like to hear
 * @returns {Promise<*>}
 */

async function readlineInterface() {
    const CLI = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const question = promisify(CLI.question).bind(CLI)
    return await question("What joke category would you like to hear? : ");
}

/**
 *  Checking that provided by user category is proper (comparison with allowedCategories table)
 * @param providedCategory
 * @returns {boolean}
 */
function validateCategory(providedCategory){
    return allowedCategories.includes(providedCategory);
}


/**
 * Displaying error message in case of improper category
 * @param providedCategory
 */
function displayErrorMessage(providedCategory) {
    console.error(`Provided category: "${providedCategory}" is not correct. Run application again and provide proper category like: [ ${allowedCategories} ]` );
}

/**
 * Fetching joke basic on providedCategory
 * @param providedCategory
 * @returns {{body: string, tags: []}|*}
 */
function fetchJoke(providedCategory) {
    return oneLinerJoke.getRandomJokeWithTag(providedCategory);
}

/**
 * Displaying joke
 * @param joke
 */
function displayJoke(joke) {
    console.log(`Joke: ${joke.body}`)
}
/**
 * Say goodbye
 */
function sayGoodbye(){
    console.log("Thanks for using this app :)")
}

/**
 * Main function, that contains program logic, surrounded by try-catch statement, to handle joke fetching exceptions,
 * and adding say-goodbye statement
 * @returns {Promise<void>}
 */
async function main(){
    try{
        const providedCategory = await readlineInterface()

        if(!validateCategory(providedCategory)){
            displayErrorMessage(providedCategory);
            process.exit(1);
        }else{
            const joke = fetchJoke(providedCategory);
            displayJoke(joke);
        }
    }catch (err){
        console.error("Error while fetching joke: " + err)
    }finally {
        sayGoodbye();
        process.exit();
    }
}


main();