import { useEffect } from "react"
import { useState } from "react"

const NewsBoard = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.API_KEY}`;
        fetch(url).then(res => res.json()).then(data => setArticles(data.articles))
    },[])
  return (
    <div>
        <h2 className="text-center mt-3">Latest <span className="badge bg-danger">News</span></h2>
    </div>
  )
}

export default NewsBoard