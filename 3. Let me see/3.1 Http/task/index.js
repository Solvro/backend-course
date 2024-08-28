var http = require('http');
http.createServer(function (req, res) {
    const minutes = new Date().getMinutes();
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write('Elo żelo! \n'.repeat(minutes));
    res.end();
}).listen(1234);