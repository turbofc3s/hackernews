import {useState} from 'react';

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');
  
  const handleFormSubmit = (event) => {   
    event.preventDefault();
    
    onSubmit(term)
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">CurrentSphere News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
        <input className="input-value form-control me-2" type="search" value={term} onChange={handleChange} placeHolder="search" aria-label="Search"/>
      </form>

        </div>
      </div>
    </nav>
    
  );
}

export default SearchBar;         


           
           