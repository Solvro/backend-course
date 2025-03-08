var http = require('http');

http.createServer(function (req, res) {
    const minutes = (new Date).getMinutes();
    const resText = "Elo żelo \n".repeat(minutes)

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(resText);
    res.end();

}).listen(1234);