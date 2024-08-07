// pobierz bibliotekę do obsługi plików
const fs = require('node:fs');
// zapisz aktualną ilość minut używając klasy Date
const minutes = (new Date).getMinutes()
const content = "Elo żelo \n".repeat(minutes)
// wypisz w pętli Elo Żelo
fs.writeFileSync("./Elo żelo.txt", content)
console.log(content)
// zapisz w pliku odpowiednią ilośc Elo Żelo