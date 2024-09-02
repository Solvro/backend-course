const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 1234;
const server = createServer((req, res) => {
  const curDate = new Date();
  const minutes = curDate.getMinutes();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  for (let i = 0; i < minutes; i++) {
    res.write("Elo żelo!\n");
  }
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
