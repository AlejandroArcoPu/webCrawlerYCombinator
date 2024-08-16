import { useState,useEffect } from 'react'
import hackerLogo from '/hacker-news.svg'
import newsService from './services/news'

function App() {

  const [news,setNews] = useState(null)
  const [filterComments,setFilterComments] = useState(false)
  const [filterPoints,setFilterPoints] = useState(false)

  useEffect(() => {
    newsService
      .getAll()
      .then(initialNews => {
        setNews(initialNews)
      })
  }, [])

  if(!news) return null

  const newsToShow = !filterComments
  ? news
  : news.filter(n => n.title.split(' ').length > 5).sort((a,b) => b.comments - a.comments) // split to count spaced words

  return (
    <>
    <div>
      <a href="https://news.ycombinator.com/" target="_blank">
        <img src={hackerLogo} alt="Hacker News logo" />
      </a>      
      <h1>Hacker News Crawler</h1>
      <p>
        Click the buttons to filter
      </p>
      <button onClick={() => setFilterComments(!filterComments)}>Filter by Comments (more than 5 title words) {filterComments ? 'true' : 'false'}</button>
      <button onClick={() => setFilterPoints(!filterPoints)}>Filter by Points (less or equal than 5 title words) {filterPoints ? 'true' : 'false'}</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Title</th>
            <th scope="col">Score</th>
            <th scope="col">Comments</th>
          </tr>
        </thead>
        <tbody>
          {newsToShow.map((n) => 
          <tr key={n.pos}>
            <td>{n.pos}</td>
            <td>{n.title}</td>
            <td>{n.score}</td>
            <td>{n.comments}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
