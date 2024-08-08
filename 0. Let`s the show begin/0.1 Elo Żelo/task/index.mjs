import fs from "node:fs/promises";

const minutes = new Date().getMinutes();

const MESSAGE = "Elo żelo wariacie";
for (let i = 0; i <= minutes; i++) {
  console.log(MESSAGE);
}

await fs.writeFile(
  "Elo żelo.txt",
  Array.from({ length: minutes })
    .map(() => `${MESSAGE}`)
    .join("\n")
);
