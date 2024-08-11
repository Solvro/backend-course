// pobierz bibliotekę do obsługi plików
const fs = require("node:fs");
const file = "solution.txt";
// zapisz aktualną ilość minut używając klasy Date
const times = new Date().getMinutes();
// wypisz w pętli Elo Żelo
for (let i = 0; i < times; i++) {
  console.log("Elo Żelo\n");
}
// zapisz w pliku odpowiednią ilośc Elo Żelo
fs.writeFileSync(file, "", (err) => {
  if (err) throw err;
});
for (let i = 0; i < times; i++) {
  fs.appendFileSync(file, "Elo Żelo\n", (err) => {
    if (err) throw err;
  });
}
