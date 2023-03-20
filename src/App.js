import { useState} from 'react';
import SearchBar from './components/SearchBar';
import searchAllNews from './api';
import ArticleList from './components/ArticleList';
import PopularNews from './components/PopularNews';

function App() {
	const [articles, setArticles] = useState([]);
	
	const handleSubmit = async (term) => {
	  const result = await searchAllNews(term);
	  
	  setArticles(result);
};

return (
	<div>
	  <SearchBar onSubmit={handleSubmit} />
	  <ArticleList articles={articles} />
	  <PopularNews />
	</div>
    );
}

export default App;