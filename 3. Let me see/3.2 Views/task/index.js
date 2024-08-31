import http from 'node:http'
import fs from 'node:fs'
import joker from 'one-liner-joke'

http.createServer((req, res) => {
    let view = fs.readFileSync("index.html").toString();
    const joke = joker.getRandomJoke().body;
    view = view.replaceAll('{{dateTime}}', new Date().toLocaleString('pl'))
        .replaceAll('{{joke}}', joke);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(view);
}).listen(1234);