import React from 'react';
import Footer from '../components/Footer'
import logo from '../img/broadbrush.png'
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
function Home(){
  return (
    <>
        {/* 
        <div id="jumbotron" className="jumbotron">

            <div className="float-right">
            <h1 className="display-4">Hello, world!</h1>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <a  id="signin-btn" className="btn  btn-lg" href="/signin" role="button">Sign In</a> 
            </div>
        </div> 
        */}
  
    <div className="background">
      <div id="background-color">
      </div>
      <Navbar css="home-nav" /> 
   </div> 
    <div className="home-heading-title">
        <h1 className="display-4">Hello, world!</h1>
        <p className="home-heading-p">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <Link to="/signin" id="signin-btn" className="btn  btn-lg" href="/signin" role="button">Sign In</Link> 
    </div>
    <div className="container">
        <div className="homepage-gallery-text">
            {/* <h4 id="homepage-logo">Logo</h4> */}
            <img className="logo-home" src={logo} alt="logo"></img>
            <p id="local-artist" >Find Local & Nationwide Arist and Creators</p>
            
        <form className="form-inline">
          <p id="view-gallery">View Gallery</p>
          <div className="form-group mx-sm-3 mb-2">
            <input id="zip-input" type="text" className="form-control"  placeholder="Enter Zip Code"/>
          </div>
          <button id="zip-button" type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
     
    </div>
    <Footer />
    </>
  );
}
export default Home;