import oneLinerJoke from "one-liner-joke"
import http from 'http'
import fs from 'fs'

function defaultView(categories, res) {
    let view = fs.readFileSync('./index.html', 'utf8').toString()
    const date = new Date()
    view = view.replaceAll('{date}', `${date.toLocaleDateString('pl-PL')} ${date.toLocaleTimeString('pl-PL')}`)
    view = view.replaceAll('{categories}', categories.map(category => `<li><a href="/${category}">${category}</a></li>`).join(''))

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(view);
}

function jokeView(category, res) {
    let view = fs.readFileSync('./joke.html', 'utf8').toString()
    let joke = oneLinerJoke.getRandomJokeWithTag(category)

    view = view.replaceAll('{joke}', joke.body)

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(view);
}

http.createServer(function (req, res) {
    const allowedCategories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"]
    const category = req.url.slice(1);

    if(category === '') {
        defaultView(allowedCategories, res);

    } else if(allowedCategories.includes(category)) {
        jokeView(category, res);

    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
    }
    res.end();
}).listen(8080);
