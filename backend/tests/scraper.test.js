const supertest = require('supertest')
const {app, server} = require('../index.js')

const api = supertest(app)

test('scraping is returned as json', () => {
    return api
        .get('/api/scraping')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('there are 30 scraping news', () => {
    return api
        .get('/api/scraping')
        .then(response => {
            expect(response.body).toHaveLength(30)
        })
})


afterAll(() => {
    server.close()
})