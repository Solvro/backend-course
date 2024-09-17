import http from "http";
import fs from "fs";
import oneLinerJoke from "one-liner-joke";

const PORT = 1234;

function handleJokeView(category) {
  let view = fs.readFileSync("./joke.html").toString();
  view = view.replaceAll(
    "{{joke}}",
    oneLinerJoke.getRandomJokeWithTag(category.slice(1)).body
  );
  return view;
}

function handleDefaultView(categories) {
  let view = fs.readFileSync("./index.html").toString();
  const date = new Date();
  const categoriesList = categories.map(
    (category) =>
      `<li><a href="${category}">${category}</a></li>
        `
  );

  view = view.replaceAll("{{date}}", date.toLocaleDateString("pl-PL"));
  view = view.replaceAll("{{categories}}", categoriesList.join(""));
  return view;
}

http
  .createServer((request, response) => {
    const categories = [
      "/animal",
      "/car",
      "/men",
      "/women",
      "/life",
      "/sport",
      "/sarcastic",
    ];
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (categories.includes(request.url)) {
      response.write(handleJokeView(request.url));
    } else {
      response.write(handleDefaultView(categories));
    }
    response.end();
  })
  .listen(PORT);
