const fs = require("fs")
const http = require("http")
const jokes = require("one-liner-joke");
const port = 1234
let joke = jokes.getRandomJoke();

http.createServer((request, response) => {
    let view = fs.readFileSync('./index.html').toString()

    view = view.replaceAll('{{date}}', (new Date()).toLocaleDateString('pl-PL'))
    view = view.replaceAll('{{random}}', joke.body)
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.write(view);
    response.end();
}).listen(port);
