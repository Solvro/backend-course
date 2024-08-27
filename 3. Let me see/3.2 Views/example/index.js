import http from 'http'
import fs from 'fs'

http.createServer((request, response) => {
    let view = fs.readFileSync('./index.html').toString()

    view = view.replaceAll('{{date}}', (new Date()).toLocaleDateString('pl-PL'))
    view = view.replaceAll('{{random}}', Math.random())

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.write(view);
    response.end();
}).listen(80);
