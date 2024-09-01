const http = require("http");
const d = new Date()
let message = "";
for (let i = 0; i < d.getMinutes(); i++) {
    message += `Elo żelo\n`;
}
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain; charset=utf-8');
    res.end(message);
})

const port = 1234;
const host = '127.0.0.1';
server.listen(port, host, () => {
    console.log(`We are running on port ${port}`)
})

