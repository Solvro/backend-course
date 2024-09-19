import http from 'http'
import fs from 'fs'
import joker from 'one-liner-joke'

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    let view = req.url.startsWith("/category")
        ? handleCategoryView(req.url.substring("/category".length + 1, req.url.length - 1))
        : handleMainView();
    res.end(view);
}).listen(1234);

function handleCategoryView(category) {
    const joke = joker.getRandomJokeWithTag(category).body;
    return fs.readFileSync("./joke.html").toString()
        .replaceAll('{{joke}}', joke);
}

function handleMainView() {
    const categories = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic'];
    return fs.readFileSync("./index.html").toString()
        .replaceAll('{{dateTime}}', new Date().toLocaleString('pl'))
        .replaceAll('{{categories}}', categories.map(category =>
            `<button type="submit" formaction="/category/${category}">${category}</button><br><br>\n\t`).join(""));
}
