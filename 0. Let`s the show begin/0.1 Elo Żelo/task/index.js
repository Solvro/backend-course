const fs = require('fs');

const minutes = new Date().getMinutes();
const message = Array(minutes)
        .fill('Elo Żelooo')
        .join('\n');

console.log(message);
fs.writeFileSync('Elooo.txt', message);