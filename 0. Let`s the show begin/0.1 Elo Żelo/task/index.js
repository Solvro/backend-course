const fs = require('fs');

const minutes = new Date().getMinutes();
const text = 'Elo żelo\n'.repeat(minutes);

fs.writeFileSync('./Elo żelo.txt', text);
console.log(text);
