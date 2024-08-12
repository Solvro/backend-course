const fs = require('node:fs');

const time = new Date();
const minutes = time.getMinutes();
const content = 'Elo żelo\n'.repeat(minutes)

fs.writeFileSync('Elo żelo.txt', content);
