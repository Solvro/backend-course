const fs = require('fs')

const curDate = new Date()
const minutes = curDate.getMinutes()

const cont = Array(minutes).fill('Elo żelo').join('\n');
fs.writeFileSync('Elo żelo.txt', cont)
console.log(cont)
