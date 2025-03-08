const http = require('http')
const fs = require('fs')
const joke = require('one-liner-joke')

const host = 1234
const categories = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic']

const mainPage = () => {
    let view = fs.readFileSync('./index.html').toString()
    const date = (new Date()).toLocaleDateString('pl-PL')
    const jokeLine = joke.getRandomJoke()
    view = view.replaceAll('{{ date }}', date)
    view = view.replaceAll('{{ joke }}', jokeLine.body)

    return view
}

const jokePage = (path) => {
    let view = fs.readFileSync('./joke.html').toString()
    let category = path.toString().slice(1)
    if (!categories.includes(category)) {
        jokeLine = 'category doesnt exists'
    } else {
        jokeLine = joke.getRandomJokeWithTag(category)
    }
    view = view.replaceAll('{{ category }}', category)
    view = view.replaceAll('{{ joke }}', jokeLine.body)

    return view
}

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    let view = ''

    switch (request.url) {
        case '/':
            view = mainPage()
            break
        default:
            view = jokePage(request.url)
            break
    }
    response.write(view)
    response.end();
}).listen(host, () => {
    console.log(`Server on host ${host}`);
});