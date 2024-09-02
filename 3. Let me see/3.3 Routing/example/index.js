import http from 'http'
import fs from 'fs'
import oneLinerJoke from 'one-liner-joke';

function handleJokeView() {
    let view = fs.readFileSync('./joke.html').toString()
    view = view.replaceAll('{{joke}}', oneLinerJoke.getRandomJoke().body)
    return view
}
function handleRandomView() {
    let view = fs.readFileSync('./random.html').toString()
    view = view.replaceAll('{{random}}', Math.random())
    return view

}
function handleDefaultView() {
    let view = fs.readFileSync('./index.html').toString()
    const date = (new Date())

    view = view.replaceAll('{{date}}', date.toLocaleDateString('pl-PL'))
    return view
}

http.createServer((request, response) => {
    let view = ''
    switch (request.url) {
        case '/joke':
            view = handleJokeView()
            break;
        case '/random':
            view = handleRandomView()
            break;
        default:
            view = handleDefaultView()
            break;

    }
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.write(view);
    response.end();
}).listen(80);
