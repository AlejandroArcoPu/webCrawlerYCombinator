const express = require('express') // node server
const axios = require('axios') // library to do http requests
const cors = require('cors') // CORS
const cheerio = require('cheerio') // library to manipulate HTML

const baseUrl = 'https://news.ycombinator.com/'

const app = express()

app.use(cors())

const getScraping = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        const $ = cheerio.load(response.data)
        const titles = $('.titleline').each((_,element) => {
            const $element = $(element)
            const title = $element.find('a').first() // first a has the title if not you can get more a inside the span
            const titleText = title.text()
            console.log(titleText)
        }
        )
    })
}


app.get('/health', (request,response) => {
    response.send('<p>Healthy :)<p>')
})

app.get('/scraping',(request,response) => {
    getScraping()
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
