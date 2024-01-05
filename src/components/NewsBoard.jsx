import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"



const NewsBoard = ( {category} ) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(res => res.json()).then(data => {
            console.log(data); 
            setArticles(data.articles); 
        })
    },[category])
    
  return (
    <div>
        <h2 className="text-center mt-3">Latest <span className="badge bg-danger">News</span></h2>
        {articles
            .filter(news => news.content !== "[Removed]")
            .map((news, index) => (
                <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                ></NewsItem>
        ))}
    </div>
  )
}

export default NewsBoard