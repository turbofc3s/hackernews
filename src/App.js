import SearchBar from './components/SearchBar';
import MainNewsFeed from './components/MainNewsFeed';
import PopularNews from './components/PopularNews';

function App() {
	const handleSubmit = async (term) => {
	const result = await PopularNews(term);
	console.log(result);
};

return (
	<div>
	  <SearchBar onSubmit={handleSubmit}/>
	</div>
   );
}

export default App;