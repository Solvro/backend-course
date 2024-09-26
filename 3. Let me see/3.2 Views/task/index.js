var http = require('http')
var fs = require('fs')
var olj = require('one-liner-joke')

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const currentTime = date.toLocaleTimeString();

    const joke = olj.getRandomJoke().body;

    let site = fs.readFileSync('./site.html')
    let site_str = site.toString()

    site_str = site_str.replace('{{date}}', `${currentDate} ${currentTime}`);
    site_str = site_str.replace('{{joke}}', joke);

    res.write(site_str);
    res.end();
}).listen(1234, () => {
    console.log('Server is running on http://localhost:1234');
});