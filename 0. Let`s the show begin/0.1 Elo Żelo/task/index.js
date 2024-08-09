const fs = require("fs");
const minutes = new Date().getMinutes();
let content = "";

for (let i = 0; i < minutes; i++) {
    console.log("Elo żelo");
    content += "Elo żelo\n";
}

fs.writeFile("Elo żelo.txt", content, err => {
    if (err) console.log(err);
})