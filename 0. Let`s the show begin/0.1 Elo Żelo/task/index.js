const fs = require("node:fs");

const minutes = new Date().getMinutes();

let content = "";

for (i = 0; i < minutes; i++) content += "Elo Żelo\n";

console.log(content);

fs.writeFile("./solution.txt", content, (err) => {
  if (err) console.log(err);
});
