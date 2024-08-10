// pobierz bibliotekę do obsługi plików
const files = require("fs");
// zapisz aktualną ilość minut używając klasy Date
let data = new Date();
let min = data.getMinutes()
console.log(data.getMinutes())
// wypisz w pętli Elo Żelo
let content = "";
for (let i = 0; i < min; i++) {
    console.log("Elo Żelo");
    content += "Elo Żelo\n";
}
// zapisz w pliku odpowiednią ilośc Elo Żelo
files.writeFile("Elo żelo.txt", content, (err) => {
    if (err) throw err;
})