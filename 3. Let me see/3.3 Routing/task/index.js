const http = require('http');
const fs = require('fs');
const path = require('path');
const jokes = require("one-liner-joke");
const dat = new Date()

function serveIndex(res) {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('500 - Internal Server Error');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(data);
        }
    });
}

function serveTemplate(res, route) {
    const filePath = path.join(__dirname, 'temp.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('500 - Internal Server Error');
        } else {
            let j = jokes.getRandomJokeWithTag(route)
            const modifiedData = data.replace(/{{ROUTE}}/g, route).replace(/{{j}}/g, j.body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(modifiedData);
        }
    });
}


const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        serveIndex(res);
    } else {
        const route = req.url.slice(1);
        serveTemplate(res, route);
    }
});

const port = 1234;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});
