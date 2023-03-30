import axios from 'axios';

let api = "https://newsapi.org/v2/everything?q="
let term = ''
let api_key = "&apiKey=5de73c6ffb9d410ea260605dce98197f"

const searchAllNews = async (term = 'mars') => {
	const allResponse = await axios.get(api + term + api_key, {
      headers: {
      	Authorization: "Bearer 5de73c6ffb9d410ea260605dce98197f"
      },
    });

    console.log(allResponse.data.articles);

    return allResponse.data.articles;
};

export default searchAllNews;  