import readline from "node:readline";
import oneLinerJoke from "one-liner-joke";

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const checkValidCategory = (answer) => {
    const allowedCategories = ["animal", "car", "women", "men", 'life', 'sport', 'sarcastic']
    return allowedCategories.includes(answer)
}

const getJoke = (answer) => {
    const joke = oneLinerJoke.getRandomJokeWithTag(answer)
    console.log(joke?.body ?? 'Joke is empty');
}

const readFromUser = new Promise((resolve, reject) => {
    readlineInterface.question('Input joke category: ', (answer) => {

        if (checkValidCategory(answer)) {
            resolve(answer)
        } else {
            reject(answer)
        }
        readlineInterface.close()
    })
})

readFromUser.then(res => {
    getJoke(res)
}).catch(err => console.log('Bad category'))