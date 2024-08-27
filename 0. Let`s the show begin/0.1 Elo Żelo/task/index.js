// pobierz bibliotekę do obsługi plików

// zapisz aktualną ilość minut używając klasy Date

// wypisz w pętli Elo Żelo

// zapisz w pliku odpowiednią ilośc Elo Żelo
const CONTENT = "Elo żelo";
const fs = require("node:fs");

const minutes = new Date().getMinutes();

for (let i = 0; i < minutes; i++) {
  console.log("Elo Żelo");
}

let messageToBeSaved = "";
for (let i = 0; i < minutes; i++) {
  messageToBeSaved += CONTENT + "\n";
}
fs.writeFile("Elo żelo.txt", messageToBeSaved, (err) => (err ? console.log(err) : ""));
