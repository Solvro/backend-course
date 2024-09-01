import { getRandomJokeWithTag } from "./node_modules/one-liner-joke/index.js";
import http from "http";
import fs from "fs";

http
  .createServer((request, response) => {
    let view = "";
    let tag = request.url.match(/(?<=\/categories\/)\w+/)?.[0];
    switch (true) {
      case tag ? true : false:
        view = handleCategoriesView(tag);
        break;

      case request.url === "/":
        view = handleHomeView();
        break;

      default:
        view = handleHomeView();
        break;
    }

    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write(view);
    response.end();
  })
  .listen(1234);

function handleHomeView() {
  let view = fs.readFileSync("./index.html").toString();
  view = view.replaceAll("{{dateNow}}", new Date().toLocaleString("pl-PL"));

  const categories = [
    "animal",
    "car",
    "men",
    "women",
    "life",
    "sport",
    "sarcastic",
  ];
  const buttonsHtml = categories
    .map((category) => {
      return `<button onclick="window.location.href='http://localhost:1234/categories/${category}'">${category}</button>`;
    })
    .join("");
  view = view.replaceAll("{{buttons}}", buttonsHtml);

  return view;
}

function handleCategoriesView(tag) {
  let view = fs.readFileSync("./category.html").toString();
  const joke = getRandomJokeWithTag(tag);
  view = view.replaceAll("{{tag}}", tag);
  view = view.replaceAll("{{joke}}", joke.body);
  return view;
}
