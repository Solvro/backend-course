const http = require('http');
const fs = require('fs');

function generateEloZelo() {
    const minutes = (new Date()).getMinutes();
    const content = "Elo żelo \n".repeat(minutes);
    return content;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const responseContent = generateEloZelo();
    res.end(responseContent);
});

server.listen(1234, () => {
    console.log('if everythig is right, should work on: http://localhost:1234');
});