const fs = require('fs');

const now = new Date();
const minutes = now.getMinutes();

const phrase = "Elo żelo";

let output = '';
for (let i = 0; i < minutes; i++) {
    console.log(phrase);  
    output += phrase + '\n';  
}

fs.writeFile('Elo żelo.txt', output, (err) => {
    if (err) throw err;
    console.log('Zapisano frazę do pliku Elo żelo.txt');
});