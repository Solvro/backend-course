const http = require('http')

function getText() {
    return 'Elo żelo\n'.repeat(new Date().getMinutes())
}

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type' : 'text/plain;  charset=utf-8' })
    response.write(getText())
    response.end()
}).listen(1234)