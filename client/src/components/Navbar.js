import React from 'react';

function Navbar(){
  return (
    <nav  id="navbar" className="navbar navbar-expand-lg ">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin" >Sign In</a>
        </li>
      
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;