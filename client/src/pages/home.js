import React from 'react';

function Home(){
  return (
    <>
    <div className="jumbotron">
        <div className="float-right">
        <h1 className="display-4">Hello, world!</h1>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
         <a  id="signin-btn" className="btn  btn-lg" href="/signin" role="button">Sign In</a> 
         </div>
    </div>

    <div className="container">
        <div className="homepage-gallery-text">
            <h4 id="homepage-logo">Logo</h4>
            <p id="local-artist">Find Local & Nationwide Arist and Creators</p>
            
        <form class="form-inline">
          <p id="view-gallery">View Gallery</p>
          <div class="form-group mx-sm-3 mb-2">
            <input id="zip-input" type="text" class="form-control"  placeholder="Enter Zip Code"/>
          </div>
          <button id="zip-button" type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}
export default Home;