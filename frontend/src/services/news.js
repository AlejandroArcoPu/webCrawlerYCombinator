import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/scraping'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
        .then(response => response.data)
        .catch(err => 
            console.log(err)
        )
}

export default { getAll }