const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    const minutes = new Date().getMinutes();
    for (let i = 0; i < minutes; i++) {
        res.write('Elo żelo\n');
    }
    res.end();
}).listen(1234)