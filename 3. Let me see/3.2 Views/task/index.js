const fs = require("node:fs");
const oneLinerJoke = require("one-liner-joke");
const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 1234;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  let view = fs.readFileSync("./index.html").toString();
  const date = new Date().toLocaleDateString("pl-PL");
  const getRandomJoke = oneLinerJoke.getRandomJoke();
  view = view.replaceAll("{{date}}", date);
  view = view.replaceAll("{{randomJoke}}", getRandomJoke.body);
  res.write(view);
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
