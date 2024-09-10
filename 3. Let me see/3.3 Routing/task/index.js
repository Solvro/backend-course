import http from 'http'
import fs from 'fs'
import oneLinerJoke from 'one-liner-joke';

function getJokeView(category) {
    let view = fs.readFileSync('./joke.html').toString();
    view = view.replaceAll('{{joke}}', oneLinerJoke.getRandomJokeWithTag(category.slice(1)).body)

    return view
}

function getDefaultView(categories) {
    let view = fs.readFileSync('./view.html').toString()

    const date = (new Date())
    const categoriesList = categories.map(category =>`<li><a href="${category}">${category}</a></li>`)

    view = view.replaceAll('{{date}}', date.toLocaleDateString())
    view = view.replaceAll('{{categories}}', categoriesList.join(''))

    return view
}

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    
    
    const categories = ['/animal', '/car', '/men', '/women', '/life', '/sport', '/sarcastic'];
    if (categories.includes(request.url)) {
        response.write(getJokeView(request.url))
    } else {
        response.write(getDefaultView(categories))
    }
    response.end();
}).listen(8080);
