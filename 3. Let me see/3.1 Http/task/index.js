const http = require("node:http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    const minutes = new Date().getMinutes();
    console.log(minutes);
    res.write("Elo Żelo\n".repeat(minutes));
    res.end();
  })
  .listen(1234);
