const fs = require('fs')

const mins = new Date().getMinutes()
// godzina 20.52
const fileName = 'tfuj_plik.txt'
let text = 'Elo Żelo'

for (let i = 0; i < mins; i++) {
    console.log(text);
    fs.appendFileSync(fileName, text + (mins-1 == i ? '' : '\n'))
}