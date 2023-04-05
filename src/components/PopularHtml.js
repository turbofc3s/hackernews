function PopularHtml({article}) {
	return (
	  <div>
	    <div className="img">
	      <img src={article.urlToImage} />
	    </div>
	    <div>        
          <a href={article.url} target="_blank">{article.title}</a>
        </div>  
	  </div>

	);  
}

export default PopularHtml;
