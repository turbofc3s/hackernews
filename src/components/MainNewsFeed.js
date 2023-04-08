function MainNewsFeed({article}) {

	return (
	  <div>
	    <div className="ind-article">
	      <img className="article-img" src={article.urlToImage} />        
          <h3><a href={article.url} target="_blank">{article.title}</a></h3>
        </div>  
	  </div>
	);  
}

export default MainNewsFeed;





