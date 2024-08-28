import http from "http";

import oneLinerJoke from "one-liner-joke";

import fs from "fs";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    let view = fs.readFileSync("./index.html").toString();

    const datetime = new Date().toDateString();
    const joke = oneLinerJoke.getRandomJoke().body;

    view = view.replaceAll("{{datetime}}", datetime);
    view = view.replaceAll("{{joke}}", joke);
    res.write(view);
    res.end();
  })
  .listen(1234);
