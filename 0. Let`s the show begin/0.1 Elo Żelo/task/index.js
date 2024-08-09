const fs = require('fs');

const minutes = new Date().getMinutes();
const contentToPrint = "Elo Żelo \n".repeat(minutes);

fs.writeFileSync(`./Elo żelo file.txt`, contentToPrint);
console.log(contentToPrint);