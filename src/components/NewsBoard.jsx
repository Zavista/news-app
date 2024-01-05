import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"



const NewsBoard = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(res => res.json()).then(data => {
            console.log(data); 
            setArticles(data.articles); 
        })
    },[])
    
  return (
    <div>
        <h2 className="text-center mt-3">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news, index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}></NewsItem>
        })}
    </div>
  )
}

export default NewsBoard