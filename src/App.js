import { useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import searchAllNews from './api';
import ArticleList from './components/ArticleList';
// import PopularNews from './components/PopularNews';
import ArticleList2 from './components/ArticleList2';

function App() {
	const [articles, setArticles] = useState([]);
	
	const handleSubmit = async (term) => {
	  const result = await searchAllNews(term);
	  
	  setArticles(result);
};

useEffect(() => {
	searchAllNews()
}, []);

return (
	<div>
	  <SearchBar onSubmit={handleSubmit} />
	  <ArticleList articles={articles} />
	  <ArticleList2 articles={articles} />
	</div>
    );
}

export default App;

