var http = require('http')
var fs = require('fs')
var olj = require('one-liner-joke')

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const currentTime = date.toLocaleTimeString();

    const category = req.url.slice(1);

    console.log(category);

    let joke;

    if (category) {
        joke = olj.getRandomJokeWithTag(category).body || `No jokes found for category: ${category}`;
    } else {
        joke.olj.getRandomJoke().body;
    }

    let site = fs.readFileSync('./templates/home_page.html')
    let site_str = site.toString()

    site_str = site_str.replace('{{date}}', `${currentDate} ${currentTime}`);
    site_str = site_str.replace('{{joke}}', joke);

    const redirectPaths={
        '/Animal':'http://localhost:1234/animal',
        '/Car':'http://localhost:1234/car',
        '/Men':'http://localhost:1234/men',
        '/Women':'http://localhost:1234/women',
        '/Life':'http://localhost:1234/life',
        '/Sport':'http://localhost:1234/sport',
        '/Sarcastic':'http://localhost:1234/sarcastic',
    }

    if (redirectPaths[req.url]) {
        res.writeHead(302, {'Location': redirectPaths[req.url]});
        res.end();
    } else {
        res.write(site_str);
        res.end();
    }

}).listen(1234, () => {
    console.log('Server is running on http://localhost:1234');
});