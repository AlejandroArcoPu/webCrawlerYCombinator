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
    <div className="grid grid-cols-1 justify-items-center">
      <a href="https://news.ycombinator.com/" target="_blank">
        <img className="mb-5" src={hackerLogo} alt="Hacker News logo" />
      </a>      
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hacker News Crawler</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Click the buttons to filter
      </p>
      <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4 disabled:bg-gradient-disabled disabled:opacity-50 disabled:cursor-not-allowed" disabled={filterPoints} onClick={() => setFilterComments(!filterComments)}>Filter by Comments (more than 5 title words)</button>
      <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5 disabled:bg-gradient-disabled disabled:opacity-50 disabled:cursor-not-allowed" disabled={filterComments} onClick={() => setFilterPoints(!filterPoints)}>Filter by Points (less or equal than 5 title words)</button>
      <News newsToShow={newsToShow}/>
    </div>
    </>
  )
}

export default App
