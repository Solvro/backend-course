const http = require('http');
const oneLinerJoke = require('one-liner-joke');

function getRandomJoke() {
    const joke = oneLinerJoke.getRandomJoke();
    return joke.body;
}

function generateHTML() {
    const now = new Date();
    const dateTime = now.toLocaleString(); 
    const joke = getRandomJoke();

    return `
        <!DOCTYPE html>
        <html lang="pl">
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
                h2 {
                    margin-top: 30px;
                    color: #FF4B4B;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Elo Żelo</h1>
                <p>Time and date: ${dateTime}</p>
                <h2>Random joke:</h2>
                <p>${joke}</p>
            </div>
        </body>
        </html>
    `;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    const htmlContent = generateHTML();
    res.end(htmlContent);
});

server.listen(1234, () => {
    console.log('should work on http://localhost:1234');
});