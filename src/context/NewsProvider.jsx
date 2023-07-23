import { useState, useEffect, createContext } from "react"
import { PropTypes } from "prop-types"
import axios from "axios"

const NewsContext = createContext()

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general")
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [newsTotal, setNewsTotal] = useState(0)

  // Filtra las noticias por categoría y las guarda en el estado
  useEffect(() => {
    const callAPI = async () => {
      const urlNews = `${import.meta.env.VITE_NEWS_API_URL}/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      
      const { data } = await axios(urlNews) // data es la respuesta de la API en formato JSON (objeto) que contiene las noticias

      setNews(data.articles)
      setNewsTotal(data.totalResults)
      setPage(1)
    }
    callAPI()
  }, [category])

  // Filtra las noticias por categoría y página y las guarda en el estado
  useEffect(() => {
    const callAPI = async () => {
      const urlNews = `${import.meta.env.VITE_NEWS_API_URL}/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      const { data } = await axios(urlNews)

      setNews(data.articles)
      setNewsTotal(data.totalResults)
    }
    callAPI()
  }, [page, category])


  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
  }

  // Cambia la página de noticias
  const handleChangePage = (e, value) => {
    setPage(value)
  }

  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        news,
        newsTotal,
        handleChangePage,
        page
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

// PropTypes validation (similar a Typescript)
NewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { NewsProvider }

export default NewsContext
