import axios from 'axios';
// import { useState} from 'react';

let api = "https://newsapi.org/v2/top-headlines?q="
let term = ''
let api_key = "&apiKey=5de73c6ffb9d410ea260605dce98197f"

// function PopularNews() {
//   const [news, setNews] = useState([]);

  const popularNews = async (term) => {
	const allResponse = await axios.get(api + term + api_key, {
      headers: {
      	Authorization: "Bearer 5de73c6ffb9d410ea260605dce98197f"
      }
    });
    console.log(allResponse)
     return allResponse;
	// setNews(allResponse.data.articles)
  };

export default popularNews; 


// function PopularNews({article}) {
// 	return (
// 	  <div>        
//         <a href={article.url}>{article.title}</a>
// 	  </div>
// 	);  
// }

// export default PopularNews;
