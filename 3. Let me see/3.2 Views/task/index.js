import http from 'http'
import fs from 'fs'
import oneLinerJoke from 'one-liner-joke'

http.createServer(async (req, res) => {
    const date = new Date();
    let page = fs.readFileSync('./index.html').toString();

    page = page.replaceAll('[date]', `${date.toLocaleDateString('pl-PL')} ${date.toLocaleTimeString('pl-PL')}`);
    page = page.replaceAll('[joke]', oneLinerJoke.getRandomJoke().body)

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(page);
    res.end();
}).listen(1234);