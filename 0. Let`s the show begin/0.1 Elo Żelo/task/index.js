const fs = require("node:fs");

const date = new Date();
let minutes = date.getMinutes();

for(let i = 0; i < minutes; i++) {
    let message = "Elo Żelo";
    console.log(message);
    fs.appendFile("text.txt", message + "\n", err => {
        if(err) console.error(err);
    });
}