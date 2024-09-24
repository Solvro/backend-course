import http from 'http'
import fs from 'fs'
import oneLinerJoke from 'one-liner-joke';


http.createServer((request, response) => {
    let view = fs.readFileSync('./index.html').toString()
    const date = (new Date())

    view = view.replaceAll('{{date}}', `${date.toLocaleDateString('pl-PL')} ${date.toLocaleTimeString('pl-PL')}`)
    view = view.replaceAll('{{joke}}', oneLinerJoke.getRandomJoke().body)


    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.write(view);
    response.end();
}).listen(process.env.PORT || 8080);
