import { useState, useEffect } from 'react'

const FETCH_URL = 'https://api.spaceflightnewsapi.net/v3/articles/'

export function News () {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch(FETCH_URL)
      .then((response) => response.json())
      .then((data) => setNews(data))
  }, [news])

  const newsList = news.map((_new) =>
    <li key={_new.id}>{_new.title}</li>
  )

  return (
    <>
      <h1>Show News</h1>
      <ul>
        {
      !news.length > 0
        ? <h3>Cargando Noticias...</h3>
        : newsList
      }
      </ul>
    </>
  )
}
