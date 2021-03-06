
import React, { Component } from 'react';
import Logout from './Logout';
import {Link} from 'react-router-dom';
import logo from '../img/broadbrush.png'
class Navbar extends Component {
  state = { 
      collapsed: true,  
   }

  toggleNavbar =()=>{
      this.setState({
        collapsed:!this.state.collapsed,
      })
  }
  render() { 
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse   flex-row-reverse ' : 'collapse navbar-collapse show ';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed ' : 'navbar-toggler navbar-toggler-right';
    
    return (
      <nav id={this.props.css} className="navbar navbar-expand-lg navbar-light sticky-top">

        
      {/* <img src={logo}/> */}
      <Link to="/" className="navbar-logo "> Broad Brush </Link>
      {/* <Link to="/">Navbar</Link> */}
  
      <button onClick={this.toggleNavbar}  className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${classOne} `} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active navbar-space">
            <Link to="/" >Home</Link>
          </li>
         
          <li className="nav-item navbar-space">
             <Link to="/dashboard"> Profile</Link>
          </li>
          <li className="nav-item ">
            <Logout /> 
          </li>
        
        </ul>
      </div>
    </nav>

      );
  }
}
 
export default Navbar;

// import logo from '../img/newlogo1.png'


