
import Navbar from '../components/Navbar';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Profile extends Component {
  state = { 
      userPic:"",
      name:'',
      artwork: [],
      bio: '',
      city: '',
      category:'',

   }


   componentDidMount(){

    const {id} = this.props.match.params;
      axios(`/api/profile/${id}`).then(e=>{
          console.log(e.data);
          
            this.setState({
                userPic: e.data.profileImg,
                name: e.data.name,
                bio: e.data.bio,
                artwork:e.data.artwork,
                category: e.data.category
            })
    });

   }

  render() { 
    return ( 
      <div>
      <Navbar css="navbar" />
      
        <div className="container">
          <div className="card" id="profile-card" style={{width: 18+"rem"}}>
            <div id="card-img" style={{backgroundImage :`url(${this.state.userPic})`}} >
              {/* <img src={require('../img/headshot.png')} alt="headshot"/> */}
            </div>

            <div className="card-body">
              <h5 className="card-title">{this.state.name}</h5>
              <p className="card-text">{this.state.bio}</p>
              <Link to="/gallery" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div>
              {this.state.artwork.map(art=>{
               return <div key={art._id} >  <img className="dash-gal-pic" src={`${art.pic}`} key={art._id} id={art._id}></img> </div>
              })}   
           </div>

        </div>
      </div>



     );
  }
}
 
export default Profile;








