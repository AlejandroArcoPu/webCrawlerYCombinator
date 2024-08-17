const express = require('express') // node server
const cors = require('cors') // CORS
const scraper = require('./scraper') 

const app = express()

app.use(cors())

app.get('/api/health', (request,response) => {
    response.send('<p>Healthy :)<p>')
})

app.get('/api/scraping',(request,response) => {
    scraper
    .getScraping()
    .then(result => {
        response.json(result)
    }).catch( err => {
        console.log(err)
        response.status(500).json({
            error: 'scraping failure'
        })
    })
})

const PORT = 3001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = {app, server}