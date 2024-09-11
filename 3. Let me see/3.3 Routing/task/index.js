import http from "http";
import fs from "fs";
import oneLinerJoke from "one-liner-joke";

const CATEGORIES = [
  "animal",
  "car",
  "men",
  "women",
  "life",
  "sport",
  "sarcastic",
];

const handleJokeView = (category) => {
  let view = fs.readFileSync("./joke.html").toString();

  const joke = oneLinerJoke.getRandomJokeWithTag(category).body;

  view = view.replaceAll("{{ category }}", category);
  view = view.replaceAll("{{ joke }}", joke);

  return view;
};

const handleHomeView = () => {
  let view = fs.readFileSync("./home.html").toString();

  const datetime = new Date().toLocaleDateString("pl-PL");

  view = view.replaceAll("{{ datetime }}", datetime);
  view = view.replaceAll(
    "{{ categories }}",
    CATEGORIES.map(
      (category) =>
        `<li><button onclick="location.href='/${category}'">${category}</button></li>`
    )
  );

  return view;
};

http
  .createServer((req, res) => {
    const category = req.url.replace("/", "");
    const view = CATEGORIES.includes(category)
      ? handleJokeView(category)
      : handleHomeView();

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(view);
    res.end();
  })
  .listen(1234);
