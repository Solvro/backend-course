const http = require("http");

const generateText = (text) => text.repeat(new Date().getMinutes());

http
  .createServer((_, response) => {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.write(generateText("Elo żelo\n"));
    response.end();
  })
  .listen(8000);
