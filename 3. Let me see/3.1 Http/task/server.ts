import http from 'http';

const requestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const currentMinutes = new Date().getMinutes();
    const message = 'Elo żelo\n'.repeat(currentMinutes);
    res.end(message);
};

const server = http.createServer(requestListener);

const PORT = 1234;
server.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
