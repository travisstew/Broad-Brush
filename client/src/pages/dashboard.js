import React, { Component } from 'react';
import UpdateForm from '../components/updateForm';
import axios from 'axios';
import PhotoComponent from '../components/Photo';
import ArtworkCards from '../components/ArtwokCards';


class Dashboard extends Component {

    state = { 
      on:false,
      name:'',
      bio:'',
      id:null,
      category:'',
      zip:'',
      profilePic:'',
      artwork:[]
    }

  toggle=()=>{
    this.setState({
      on: !this.state.on
    });
  }

  updateChange = (e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
  }

  submitUpdate =(e)=>{
        e.preventDefault();
        const {name,zip,bio,category} = this.state;
        console.log(name);
        
       const userdata ={
          name: name,
          zip: zip,
          bio: bio,
          category: category
        }

      axios.put(`http://localhost:5000/dashboard/${this.props.match.params.id}`,userdata).then(res=>{
          console.log('got it');
          window.location.reload(true);
      });
  }
  
 componentDidMount=()=>{
    axios(`http://localhost:5000/dashboard/${this.props.match.params.id}`).then(res=>{
      console.log(res.data);
            this.setState({name:res.data.name,id:res.data._id,bio:res.data.bio,category: res.data.category,profilePic:res.data.profileImg, artwork:res.data.artwork })
           
    });  
 }

  render() { 
      // console.log(this.props.match.params.id);
      // console.log(this.state.id);
      console.log(this.state.artwork);
      
    return (  
      <div>
        <div>
          <img id="profile-pic" src={this.state.profilePic} alt="profile pic"></img>
        </div>
        
        <div className="card1" style={{width: 18+"rem"}}>
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.state.category}</h6>
            <p className="card-text">{this.state.bio}</p>
            <a href="/" className="card-link">Card link</a>
            <a href="/" className="card-link">Another link</a>
          </div>
        </div>

       
        <div>
        {/* <FilesUploadComponent params={this.props.match.params.id} /> */}

          {this.state.on && <UpdateForm 
                              updateChange={this.updateChange} 
                              submitUpdate={this.submitUpdate} 
                              name={this.state.name} 
                              bio={this.state.bio}
                              zip={this.state.zip}
                              category={this.state.category}
                              params={this.props.match.params.id}
                              />}

          <button type="button" onClick={this.toggle} className="btn btn-primary">Edit Profile</button>
        </div>

        <PhotoComponent params={this.props.match.params.id}/>

        {this.state.artwork.map(art=> <ArtworkCards source={art.pic} /> )
        }
        
      </div>
    );
  }
}
 
export default Dashboard;