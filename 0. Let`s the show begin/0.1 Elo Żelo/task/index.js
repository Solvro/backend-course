const fs = require('fs')

const mins = new Date().getMinutes()
// godzina 20.52
const fileName = 'tfuj_plik.txt'
let text = 'Elo Żelo'

for (let i = 0; i < mins; i++) {
    console.log(text);
    if (i != mins - 1){
        textToAppend = text + '\n'
    } else {
        textToAppend = text
    }

    fs.appendFileSync(fileName, textToAppend)
}