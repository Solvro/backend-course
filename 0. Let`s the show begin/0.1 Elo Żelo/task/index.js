
const fs = require('node:fs')
const minutes = (new Date).getMinutes()

let times = 10
let greeting = "Elo żelo \n"

console.log(greeting.repeat(times))

fs.writeFileSync(`./Elo żelo.txt`, greeting.repeat(times))



