import axios from 'axios';
import { useState} from 'react';

let api = "https://newsapi.org/v2/top-headlines?q="
let term = ''
let api_key = "&apiKey=5de73c6ffb9d410ea260605dce98197f"

// function App() {
// 	// const [articles, setArticles] = useState([]);
	
// 	const handleSubmit = async (term) => {
// 	  const result = await searchAllNews(term);
	  
// 	  setArticles(result);
// };

function PopularNews() {
  const [news, setNews] = useState([]);

  const Popular = async (term) => {
	const allResponse = await axios.get(api + term + api_key, {
      headers: {
      	Authorization: "Bearer 5de73c6ffb9d410ea260605dce98197f"
      }
    });
	setNews(allResponse)
  }
};

// console.log(allResponse);

// return allResponse.data.articles;	 
// };

export default PopularNews; 

