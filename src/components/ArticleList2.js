import PopularHtml from './PopularHtml'; 

function ArticleList2({articles}) {

	const renderedNewArticles = articles.map((article, index) => {
		return <PopularHtml key={index} article={article} />;		
    });

	return <div>{renderedNewArticles}</div>;
}

export default ArticleList2;
