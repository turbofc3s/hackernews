function MainNewsFeed({article}) {
	return (
	  <div>
	    <img src={article.urlToImage} />        
        <a href={article.url} target="_blank">{article.title}</a>
	  </div>
	);  
}

export default MainNewsFeed;





