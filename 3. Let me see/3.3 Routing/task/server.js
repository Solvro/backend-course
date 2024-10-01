"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs = require('fs');
const path = require('path');
const oneLinerJoke = require("one-liner-joke");
const requestListener = (req, res) => {
    const now = new Date();
    const formattedDate = now.toLocaleString('pl-PL', { dateStyle: 'full', timeStyle: 'long' });
    const categories = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic'];
    if (req.url === '/') {
        const joke = oneLinerJoke.getRandomJoke().body;
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Błąd serwera');
                return;
            }
            content = content.replace('{{date}}', formattedDate).replace('{{joke}}', joke);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
        });
    }
    else if (req.url && categories.includes(req.url.slice(1))) {
        const category = req.url.slice(1);
        const jokeCategory = oneLinerJoke.getRandomJokeWithTag(category).body;
        fs.readFile(path.join(__dirname, 'public', 'category.html'), 'utf-8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Błąd serwera');
                return;
            }
            content = content.replace('{{jokeCategory}}', jokeCategory);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Nie znaleziono');
    }
};
const server = http_1.default.createServer(requestListener);
const PORT = 1234;
server.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
