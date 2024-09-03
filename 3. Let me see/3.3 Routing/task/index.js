const fs = require("node:fs");
const oneLinerJoke = require("one-liner-joke");
const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 1234;

const categories = [
  "/animal",
  "/car",
  "/men",
  "/women",
  "/life",
  "/sport",
  "/sarcastic",
];

function handleJokeView(category) {
  let view = fs.readFileSync("./joke.html").toString();
  const joke = oneLinerJoke.getRandomJokeWithTag(category.slice(1)).body;
  view = view.replaceAll("{{joke}}", joke);
  return view;
}
function handleDefaultView(categories) {
  let view = fs.readFileSync("./index.html").toString();
  const categoriesList = categories
    .map(
      (category) =>
        `<li><a href="${category}">${category}</a></li>
    `
    )
    .join("");

  const date = new Date().toLocaleDateString("pl-PL");
  view = view.replaceAll("{{categories}}", categoriesList);
  view = view.replaceAll("{{date}}", date);
  return view;
}

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (categories.includes(req.url)) {
    res.write(handleJokeView(req.url));
  } else {
    res.write(handleDefaultView(categories));
  }

  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
