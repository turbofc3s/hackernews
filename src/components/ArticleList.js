import MainNewsFeed from './MainNewsFeed'; 

function ArticleList({articles}) {

	const renderedArticles = articles.map((article, index) => {
		return <MainNewsFeed key={index} article={article} />;		
    });

	return <div>{renderedArticles}</div>;
}

export default ArticleList;