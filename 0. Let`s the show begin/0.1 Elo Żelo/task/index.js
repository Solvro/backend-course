// pobierz bibliotekę do obsługi plików

// zapisz aktualną ilość minut używając klasy Date

// wypisz w pętli Elo Żelo

// zapisz w pliku odpowiednią ilośc Elo Żelo
const fs = require('fs');
const minutes = new Date().getMinutes()
const str = "Elo żelo"
let content = ""
const filename = "Elo żelo.txt"

for (let i = 0; i < minutes; i++) {
    content += str + "\n"
}

console.log(content)

fs.writeFile(filename, content, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
})

