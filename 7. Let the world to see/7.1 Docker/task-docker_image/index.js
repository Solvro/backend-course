import http from 'http'
import fs from 'fs'
import oneLinerJoke from 'one-liner-joke'

function handleHomePageView(jokeCategories) {
    let view = fs.readFileSync('./index.html').toString()

    const date = new Date()
    view = view.replaceAll('{{dateTime}}', `${date.toLocaleDateString('pl-PL')}  ${date.toLocaleTimeString('pl-PL')}`)

    const jokeCategoriesViewList = jokeCategories.map((jokeCategory) => {
        return `<li><a href="${'/'.concat(jokeCategory)}"> ${jokeCategory} </a></li>`
    })

    view = view.replaceAll('{{jokeCategories}}', jokeCategoriesViewList.join(''))

    return view
}

function handleJokeCategoryPageView(jokeCategory) { 
    let view = fs.readFileSync('./jokeCategory.html').toString()
    view = view.replaceAll('{{joke}}', oneLinerJoke.getRandomJokeWithTag(jokeCategory).body)
    return view
}

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html;  charset=utf-8' })

    const jokeCategories = ['animal', 'car', 'men', 'women', 'life', 'sport', 'sarcastic']
    if(jokeCategories.includes(request.url.slice(1))) {
        response.write(handleJokeCategoryPageView(request.url.slice(1)))
    } else {
        response.write(handleHomePageView(jokeCategories))
    }

    response.end()
}).listen(80)