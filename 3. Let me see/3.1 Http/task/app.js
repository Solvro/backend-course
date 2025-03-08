const http = require('http')

const mins = new Date().getMinutes()
const textToWrite = 'Elo żelo'
const arrToWrite = new Array(mins).fill(textToWrite + '\n')
const host = 1234

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    arrToWrite.forEach((e)=>response.write(e))
    response.end();
}).listen(host, () => {
    console.log(`Server on host ${host}`);
});