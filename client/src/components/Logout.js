import React, { Component } from 'react';

class Logout extends Component {
  state = {
    
    }
  
    onLogout =()=>{
      fetch('/logout',{
        method: 'POST',
      }).then(res=>{
          console.log(res); 
          window.location.href ="/";
      });

    }
   
 
  render() { 
    return (
       <>
       <button id="logout-btn" onClick={this.onLogout}>Logout</button>
       </>   
    );
  }
}
 
export default Logout;