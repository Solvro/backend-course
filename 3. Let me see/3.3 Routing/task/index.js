import http from 'http'
import fs from 'fs'
import oneLinerJoke from 'one-liner-joke'

function getIndexPage(categories) {
    const date = new Date()
    let page = fs.readFileSync('./index.html').toString()
    const categoriesList = categories.map(category => {
        return `<li><a href="${category}">${category}</a></li>`
    })

    page = page.replaceAll('[date]', `${date.toLocaleDateString('pl-PL')} ${date.toLocaleTimeString('pl-PL')}`);
    page = page.replaceAll('[categories]', categoriesList.join('\n'))
    return page
}

function getJokePage(category) {
    let page = fs.readFileSync('./joke.html').toString()
    page = page.replaceAll('[joke]', oneLinerJoke.getRandomJokeWithTag(category).body)
    return page
}

http.createServer(async (req, res) => {
    const categories = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic']
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    const reqCategory = req.url.replaceAll('/', '')
    if (categories.includes(reqCategory)) {
        res.write(getJokePage(reqCategory))
    } else {
        res.write(getIndexPage(categories))
    }
    res.end()
}).listen(1234)