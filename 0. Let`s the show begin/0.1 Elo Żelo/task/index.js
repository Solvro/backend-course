// pobierz bibliotekę do obsługi plików
var fs = require('node:fs');

// zapisz aktualną ilość minut używając klasy Date
var date = new Date();
var minutes = date.getMinutes();

// wypisz w pętli Elo Żelo
const ELO = 'Elo of the Żelo';

for (var i = 0; i < minutes; i++){
    console.log(ELO);
}

// zapisz w pliku odpowiednią ilośc Elo Żelo
const ELO_FILE_PATH = '0. Let`s the show begin/0.1 Elo Żelo/task/';
const ELO_FILE_NAME = 'elo.txt';

fs.writeFileSync(ELO_FILE_PATH + ELO_FILE_NAME, (ELO + '\n').repeat(minutes));