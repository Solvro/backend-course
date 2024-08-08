const fs = require('fs');

let minutes = new Date().getMinutes();

let result = [];
for (let i = 0; i < minutes; i++) result.push("Elo Żelo");
result = result.join("\n");

fs.writeFile('./Elo żelo.txt', result, (error) => {
    if (error) console.log("Error", error);
    else console.log("OK");
});