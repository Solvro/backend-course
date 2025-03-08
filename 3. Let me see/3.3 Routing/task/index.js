import http from 'http'
import fs from 'fs'
import oneLinerJoke from 'one-liner-joke'

function handleHomePage(categories){
    let view = fs.readFileSync('./index.html').toString()

    const date = new Date()
    view = view.replaceAll('{{date}}', `${date.toLocaleDateString('pl-PL')} ${date.toLocaleTimeString('pl-PL')}`)

    const categoriesList = categories.map((category) => {
     return  `<li><a href="${category}">${category}</a></li>`
    })


    view = view.replaceAll('{{categories}}', categoriesList.join(''))
    return view

} 
function handleJoke(jokeCategory) {
    let view = fs.readFileSync('./joke.html').toString()
    view = view.replaceAll('{{joke}}', oneLinerJoke.getRandomJokeWithTag(jokeCategory.slice(1)).body)
    return view
}


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
//     - animal
// - car
// - men
// - women
// - life
// - sport
// - sarcastic
    const categories = ['/animal', '/car', '/men', '/women', '/life', '/sport', '/sarcastic']

    if (categories.includes(req.url)) {
        res.write(handleJoke(req.url))
    } else {
        res.write(handleHomePage(categories))
    }
    res.end()
}).listen(1234)