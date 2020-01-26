import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

class Gallery extends Component {

  state = { 

         }
  componentDidMount(){
    axios.get('/api/gallery').then(res=>{
        console.log(res)
    });
  }

  render() { 
    return ( 
          <div>
           <Navbar css="navbar" />
          </div> 
    );
  }
}
 
export default Gallery ;