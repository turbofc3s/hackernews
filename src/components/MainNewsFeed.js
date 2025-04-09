import image from '../assets/news.jpg';

function MainNewsFeed({article}) {
	// if(article.urlToImage) {
    // console.log(article.urlToImages


	return (
		<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{maxWidth: '345px'}}>
        <img src={article.urlToImage?article.urlToImage:image } style={{height:'200px', objectFit: 'cover'}} className="card-img-top" alt="The Image is not available"/>
        <div className="card-body">
          <h5 className="card-title">{article.title.slice(0, 50)}</h5>
          <p className="card-text">{article.description?article.description.slice(0,90):'This is a current event. It is news about something that has just occurred. '}</p>
          <a href={article.url} className="btn btn-primary">Read More</a>
        </div>
     </div>

	);  
}

export default MainNewsFeed;





