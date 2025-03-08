const http = require('http')
const fs = require('fs')
const joke = require('one-liner-joke')

const host = 1234

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    let view = fs.readFileSync('./index.html').toString()
    const date = (new Date()).toLocaleDateString('pl-PL')
    const jokeLine = joke.getRandomJoke()
    view = view.replaceAll('{{ date }}', date)
    view = view.replaceAll('{{ joke }}', jokeLine.body)
    response.write(view)

    response.end();
}).listen(host, () => {
    console.log(`Server on host ${host}`);
});