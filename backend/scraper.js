const axios = require('axios') // library to do http requests
const cheerio = require('cheerio') // library to manipulate HTML
const baseUrl = 'https://news.ycombinator.com/'

const getScraping = () => {
    return axios.get(baseUrl)
        .then(response => 
            {
                // works just like $ jQuery function
                const $ = cheerio.load(response.data)
                const entries = $('tr.athing').map((_,element) => { // get all the tr.athing in the page
                    const titlesText = $(element).find('td.title span.titleline a').first().text() // get the first a element that contains the title
                    const subTitleText =  $(element).next('tr').find('td.subtext span.subline') // get sublines tat contains score and comments
                    const score = subTitleText.find('span.score').text()
                    const comments = subTitleText.find('a').last().text()
                    return { 
                        pos: _ + 1, 
                        title: titlesText, 
                        points: score ? Number(score.match(/(\d+)/)[0]) : 0, // to match only the digits
                        comments: /\d/.test(comments) ? Number(comments.match(/(\d+)/)[0]) : 0 // this can contains sometimes only words so check first if has digits
                    }
                })
                .toArray() // to transform jQuery elements to JS array
                
                return entries
            }
        )
}

module.exports = {
    getScraping
}