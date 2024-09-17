const http = require('http');


const PORT = 1234;

const requestHandler = (req, res) => {

  const minutes = new Date().getMinutes();

  const responseContent = Array(minutes).fill('Elo żelo').join('\n');

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(responseContent);
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});