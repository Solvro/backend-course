// pobierz bibliotekę do obsługi plików

const fs = require('fs');


// zapisz aktualną ilość minut używając klasy Date

const numberOfMinutes = (new Date()).getMinutes();


// wypisz w pętli Elo Żelo
const message = "Eloo Żeeelooo"

for(let i = 0; i< numberOfMinutes; i++){
    console.log(message)
}

// zapisz w pliku odpowiednią ilośc Elo Żelo

    fs.writeFile('eloŻelo.txt', (message + '\n').repeat(numberOfMinutes) , err =>{
        if(err){
            console.error(err)
        }
    })
