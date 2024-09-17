const http = require("http");
const { format } = require("date-fns");
const { pl } = require("date-fns/locale");
const { getRandomJokeWithTag } = require("one-liner-joke");

const PORT = 1234;

const requestHandler = (req, res) => {
  const now = new Date();
  const formattedDate = format(now, "dd-MM-yyyy HH:mm", { locale: pl });
  const url = req.url || "";

  const categories = [
    "animal",
    "car",
    "men",
    "women",
    "life",
    "sport",
    "sarcastic",
  ];

  if (url === "/") {
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
      <p>${formattedDate}</p>
      <p>Kategorie żartow:</p>
      <ul>
        ${categories.map(
          (category) =>
            `<li><a href="/${category}">${category}</a></li>`
        ).join('')}
      </ul>
    </body>
    </html>
  `;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(responseContent);
  } else if (categories.includes(url.slice(1))) {
    // Strona z żartem na podstawie kategorii
    const category = url.slice(1);
    const joke = getRandomJokeWithTag(category).body;
    const responseContent = `
      <!DOCTYPE html>
      <html lang="pl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Żart z kategorii ${category}</title>
      </head>
      <body>
        <h1>Żart z kategorii ${category}</h1>
        <p>${joke}</p>
        <p><a href="/">Wróć do strony głównej</a></p>
      </body>
      </html>
    `;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(responseContent);
  }else{
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end('404 error');
  }
};
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
