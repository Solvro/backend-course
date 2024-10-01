"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const currentMinutes = new Date().getMinutes();
    const message = 'Elo żelo\n'.repeat(currentMinutes);
    res.end(message);
};
const server = http_1.default.createServer(requestListener);
const PORT = 1234;
server.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
