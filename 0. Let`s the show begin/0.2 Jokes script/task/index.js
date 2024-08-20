const readline = require('node:readline');
const oneLinerJoke = require('one-liner-joke');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const validTags = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic']

function getCategory() {
    return new Promise((resolve, reject) => {
        rl.question('Joke from what category would you like to hear? : ', (category) => {
            if (validTags.includes(category)) {
                resolve(category)
            } else {
                reject(new Error(`${category} is not a correct joke category (${validTags.join(', ')})`))
            }
        })
    })
}

function generateJoke(category) {
    const joke = oneLinerJoke.getRandomJokeWithTag(category)
    console.log(`Ok, here is the joke: ${joke.body}`)
}

async function main() {
    try {
        const category = await getCategory()
        generateJoke(category)
    } catch (error) {
        console.error(error.message)
    } finally {
        rl.close()
    }
}

main()
