import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';



class Sculpting extends Component {
  
  state = { 
    users:[],
  }

  profileClick=(e)=>{
    console.log(e.target.id)
    this.props.history.push(`/profile/${e.target.id}`)
  }


  componentDidMount(){ 
    axios('/api/sculpting').then(res=>{

      var newArray =[];

      res.data.forEach(e=>{
            newArray.push({email:e.email,id:e._id, pics:e.artwork})
           e.artwork.map(e=>{
            console.log(e.pic);      
           });
      });
      console.log(newArray);
      
      this.setState({
        users: newArray
      });
    
    });  

  }

  render() { 
    
      

    return ( 
       <>
          <Navbar css="navbar" />
          
            <div className="container">
            
                {
                  this.state.users.map(e=>{
                    console.log(e)
                    return e.pics.map(r=>{
                           return  <img src={r.pic} id={`${e.id}`} onClick={this.profileClick} data-email={`${e.email}`} key={r._id}></img>
                      });
                  })      
                }

              
            </div>
            
          
       </>
    );
  
  }
}
 
export default Sculpting ;