const http = require("node:http")

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Elo żelo!\n'.repeat(new Date().getMinutes()));
});

server.listen(1234);