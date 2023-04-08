import { useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import searchAllNews from './api';
import ArticleList from './components/ArticleList';
import PopularNews from './components/PopularNews';
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);
	
  const fetchNews = async (term) => {
    const result = await searchAllNews(term);
	  
	setArticles(result);
  };

  useEffect(() => {
	fetchNews()
  }, []);

return (
  <div>
    <div className="search">
      <h1>Current News Articles</h1>
	  <SearchBar onSubmit={fetchNews} />
	</div>
	<div className="both-articles">
	  <div className="main-articles">  
        <ArticleList articles={articles} />
	  </div>
	  <div className="side-articles">  
	    <PopularNews />
	  </div>
	</div>
  </div>
 );
}

export default App;

