const http = require('http');
const url = require('url');
const oneLinerJoke = require('one-liner-joke');

const categories = ["animal", "car", "men", "women", "life", "sport", "sarcastic"];

function getRandomJoke(category) {
    if (category && categories.includes(category)) {
        const joke = oneLinerJoke.getRandomJokeWithTag(category);
        return joke.body;
    } else {
        return oneLinerJoke.getRandomJoke().body;
    }
}

function generateMainPageHTML() {
    const now = new Date();
    const dateTime = now.toLocaleString();

    let buttons = categories.map(cat => `<a href="/${cat}" class="btn">${cat}</a>`).join(' ');

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Elo Żelo</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #2D3E50;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background-color: #3E4B61;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                h1 {
                    color: #FF4B4B;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 18px;
                    margin: 10px 0;
                }
                .btn {
                    display: inline-block;
                    margin: 5px;
                    padding: 10px 15px;
                    background-color: #FF4B4B;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .btn:hover {
                    background-color: #e43a3a;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Elo Żelo</h1>
                <p>Current date and time: ${dateTime}</p>
                <h2>Pick a joke category:</h2>
                ${buttons}
            </div>
        </body>
        </html>
    `;
}

function generateCategoryPageHTML(category) {
    const joke = getRandomJoke(category);

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Elo Żelo - ${category}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #2D3E50;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background-color: #3E4B61;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                h1 {
                    color: #FF4B4B;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 18px;
                    margin: 10px 0;
                }
                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 15px;
                    background-color: #FF4B4B;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                }
                a:hover {
                    background-color: #e43a3a;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Category: ${category}</h1>
                <p>${joke}</p>
                <a href="/">return (elo żelo stąd)</a>
            </div>
        </body>
        </html>
    `;
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname.replace('/', '');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (path === '' || !categories.includes(path)) {
        const htmlContent = generateMainPageHTML();
        res.end(htmlContent);
    } else {
        const htmlContent = generateCategoryPageHTML(path);
        res.end(htmlContent);
    }
});

server.listen(1234, () => {
    console.log('should work on http://localhost:1234');
});