import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';


class Logout extends Component {
  state = {
    
    }
  
    onLogout =()=>{
      fetch('/logout',{
        method: 'POST',
        body: '',
        headers: {
      'Content-Type': 'application/json'
    }
      }).then(res=>{
          console.log(res);
          this.props.history.push('/');
          
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
 
export default withRouter(Logout) ;