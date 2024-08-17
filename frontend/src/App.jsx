import { useState,useEffect } from 'react'
import hackerLogo from '/hacker-news.svg'
import newsService from './services/news'
import News from './components/News'

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

  const filteringByCommentsPoints = (newsWithoutFilter) => {
    if(!filterComments && !filterPoints) return newsWithoutFilter
    if(filterComments) return news.filter(n => n.title.split(' ').length > 5).sort((a,b) => b.comments - a.comments)
    if(filterPoints) return news.filter(n => n.title.split(' ').length <= 5).sort((a,b) => b.points - a.points)
  }

  const newsToShow = filteringByCommentsPoints(news) // split to count spaced words

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
      <button disabled={filterPoints} onClick={() => setFilterComments(!filterComments)}>Filter by Comments (more than 5 title words)</button>
      <button disabled={filterComments} onClick={() => setFilterPoints(!filterPoints)}>Filter by Points (less or equal than 5 title words)</button>
      <News newsToShow={newsToShow}/>
    </div>
    </>
  )
}

export default App
