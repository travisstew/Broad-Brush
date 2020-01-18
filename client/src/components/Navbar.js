import React from 'react';
import Logout from './Logout';
// import {Link} from 'react-router-dom';

function Navbar(){
  return (
    <nav  id="navbar" className="navbar navbar-expand-lg sticky-top">
    <a className="navbar-brand" href="/">Navbar</a>
    {/* <Link to="/">Navbar</Link> */}

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register" >Register</a>
        </li>
        <li className="nav-item">
          <Logout /> 
        </li>
      
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;