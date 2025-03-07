var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    
    const date = new Date();
    const minutes = date.getMinutes();

    res.write("Bómba \n".repeat(minutes));

    res.end();
}).listen(1234);