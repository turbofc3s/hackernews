function PopularHtml({article}) {
	return (
	  <div>        
        <a href={article.url}>{article.title}</a>
	  </div>
	);  
}

export default PopularHtml;
