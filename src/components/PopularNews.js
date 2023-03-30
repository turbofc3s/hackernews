import axios from 'axios';
import {useState, useEffect} from 'react';
import PopularHtml from './PopularHtml'

function PopularNews() {
  let api = "https://newsapi.org/v2/top-headlines?q="
  let term = ''
  let api_key = "&apiKey=5de73c6ffb9d410ea260605dce98197f"

  const [articles, setArticles] = useState([]);

  const topNews = async (term = 'trump') => {    
	  const allResponse = await axios.get(api + term + api_key, {
        headers: {
      	  Authorization: "Bearer 5de73c6ffb9d410ea260605dce98197f"
        }
    });
        console.log(allResponse.data.articles)
        return (allResponse.data.articles)
       // console.log(allResponse) 
    setArticles(allResponse.data.articles)
  }
  
  useEffect(() => {
    topNews()
   }, []);

  return (
    <div>
      const renderedNewArticles = articles.map((article, index) => {
        return <PopularHtml key={index} article={article} />;   
      });

      return <div>{renderedNewArticles}</div>
    </div>
    )
  }

export default PopularNews; 




