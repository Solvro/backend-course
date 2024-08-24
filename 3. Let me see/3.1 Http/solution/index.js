const http = require('http');
http.createServer((request, response) => {
    const minutes = (new Date).getMinutes()
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.write("Elo żelo \n".repeat(minutes));
    response.end();
}).listen(1234);
