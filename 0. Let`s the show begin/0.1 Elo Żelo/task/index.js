// pobierz bibliotekę do obsługi plików

// zapisz aktualną ilość minut używając klasy Date

// wypisz w pętli Elo Żelo

// zapisz w pliku odpowiednią ilośc Elo Żelo

const fs = require("node:fs");
const range = new Date().getMinutes();

const getEloZelo = () => {
  let content = "";
  for (let i = 0; i < range; i++) {
    content += "Elo żelo \n";
  }
  return content;
};

const output = getEloZelo();

fs.writeFile("Elo żelo.txt", output, (err) => {
  if (err) {
    console.error(err);
  }
});
