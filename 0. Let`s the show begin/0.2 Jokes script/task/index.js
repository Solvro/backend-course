import readline from 'readline';
import oneLinerJoke from 'one-liner-joke';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const allowedWords = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic'];     
    

rl.question('Joke from what category would you like to hear?: ', (answer) => {

  if (allowedWords.includes(answer.toLowerCase())) {
    console.log(`Great! "${answer}" is one of the allowed words. \n Here is the joke: `);
    var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag(answer);
    console.log(getRandomJokeWithTag);
  } else {
    console.log(`Sorry, "${answer}" is not an allowed word.`);
  }

rl.close();
});
