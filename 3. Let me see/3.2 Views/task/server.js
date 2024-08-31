import { getRandomJoke } from "./node_modules/one-liner-joke/index.js";
import http from "http";
import fs from "fs";

const generateText = (text) => text.repeat(new Date().getMinutes());

http
  .createServer((_, response) => {
    let view = fs.readFileSync("./index.html").toString();
    view = view.replaceAll("{{dateNow}}", new Date().toLocaleString("pl-PL"));
    const joke = getRandomJoke();
    view = view.replaceAll("{{randomJoke}}", joke.body);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write(view);
    response.end();
  })
  .listen(1234);
