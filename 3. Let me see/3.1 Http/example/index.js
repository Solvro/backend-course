const http = require('http'); // lub import http from 'http'
http.createServer((request, response) => {
    response.write('Elo zelo!'); 
    response.end();
}).listen(80); // 80 jest domyślnym portem http
