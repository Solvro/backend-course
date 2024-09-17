const http = require('http');
const { format } = require('date-fns');
const { pl } = require('date-fns/locale');
const { getRandomJoke } = require('one-liner-joke');


const PORT = 1234;

const requestHandler = (req, res) => {
  // Pobranie aktualnej daty i godziny
  const now = new Date();
  const formattedDate = format(now, 'dd-MM-yyyy HH:mm:ss', { locale: pl });

  // Pobranie losowego żartu
  const joke = getRandomJoke().body;

  // Generowanie treści HTML
  const responseContent = `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Elo Żelo</title>
    </head>
    <body>
      <h1>Elo Żelo</h1>
      <p>Aktualna data i godzina: ${formattedDate}</p>
      <p><strong>Losowy żart:</strong> ${joke}</p>
    </body>
    </html>
  `;

  // Ustawienie nagłówków odpowiedzi
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(responseContent);
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
