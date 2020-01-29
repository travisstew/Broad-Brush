import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';


class Painting extends Component {
  
  state = { 
    users:[],
  }


  componentDidMount(){ 
    axios('/api/gallery').then(res=>{
      console.log(res);
      
       const newArray=[];
          
        res.data.forEach(element => {
        newArray.push(element.artwork)
      });
      
        // console.log(newArray);
        
      this.setState({
          users: newArray
      });
    });  

  }

  render() { 
     console.log(this.state.users);

    return ( 
       <>
          <Navbar css="navbar" />
          
            <div className="container">
 
            </div>
            
          
       </>
    );
  }
}
 
export default Painting ;