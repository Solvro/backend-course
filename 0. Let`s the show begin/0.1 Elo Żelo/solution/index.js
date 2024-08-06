const fs = require('node:fs');

const minutes = (new Date).getMinutes()
const content = "Elo żelo \n".repeat(minutes)

fs.writeFileSync(`./Elo żelo.txt`, content)
console.log(content)