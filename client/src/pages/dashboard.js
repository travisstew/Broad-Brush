import React, { Component } from 'react';
import UpdateForm from '../components/updateForm';
import axios from 'axios';
import PhotoComponent from '../components/Photo';
import ArtworkCards from '../components/ArtwokCards';
import Imageupload from '../components/Imageupload';
import Navbar from '../components/Navbar';
import FilesUploadComponent from "../components/files-upload.component";
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';
import Profile from '../components/Profile';

class Dashboard extends Component {

    state = { 
      
      name:'',
      bio:'',
      id:null,
      category:'',
      zip:'',
      profilePic:'',
      artwork:[],
      profileTab: false,
      dash_heading:'',
      on:true,
      gallery:true,
      
    }
 //===toggle buttons ===//
      

  toggle=(e)=>{      
      this.setState({
          on:true,
          profileTab:true,
          gallery:true
      });


      switch (e.currentTarget.dataset.btn) {
        case "Edit":
            this.setState({
                on:!this.state.on,
                dash_heading:"Edit"
              });
              if(!this.state.on){
                this.setState({
                  dash_heading:""
                });
              }  
          break;   
        case "Profile":
            this.setState({
              profileTab:!this.state.profileTab,
              dash_heading:"Profile"
            });
            if(!this.state.profileTab){
              this.setState({
                dash_heading:""
              });
            } 
          break;
        case "Gallery":
            this.setState({
              gallery:!this.state.gallery,
              dash_heading:"Gallery"
            });
            if(!this.state.profileTab){
              this.setState({
                dash_heading:""
              });
            } 
          break;

        default:
          break;
      }

  }
//==== toggle buttons end === //
  updateChange = (e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
  }

  submitUpdate =(e)=>{
        e.preventDefault();
        fetch('/api/dashboard', {
          method: 'PUT',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            // this.props.history.push('/');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        });

  }

  imageDelete=(e)=>{
      e.preventDefault();
      console.log(e.target.id)
      fetch('/api/delete', {
        method: 'PUT',
        body: JSON.stringify({id: e.target.id}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=>{
        window.location.reload(true);
      });

  }
  
 componentDidMount=()=>{
    axios(`/api/dashboard`).then(res=>{
      console.log(res);
            this.setState({name:res.data.name,id:res.data._id,bio:res.data.bio,category: res.data.category,profilePic:res.data.profileImg, artwork:res.data.artwork , zip:res.data.zip})           
    });  
 }

  render() { 
    
     
      
    return (  
      <div>
 
       
  {/* <div className="container-fluid">     
      <div className="row">
        <div className="col-4 first-col">
            <div className="profile-header">
              <img id="profile-pic" src={this.state.profilePic} alt="profile pic"></img>
              <h5 className="card-title">{this.state.name}</h5>
              <p className="card-text">{this.state.bio}</p>

    
            </div>
        </div>
    <div className="col-8">
      2 column
    </div> 
  </div>

 </div>  */}




 <nav id="navbar" class="navbar sticky-top flex-md-nowrap ">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0 navbar-logo" href="/">Broad Brush</a>
      {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
         <Link to="signout" ><Logout /> </Link>
        </li>
      </ul>
 </nav>

    <div class="container-fluid h-100">
      <div class="row h-100">
        <nav id="sidebar" class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item dash-side-bar">
                <h6 onClick={this.toggle} data-btn="Profile">Profile</h6>
              </li>
              <li class="nav-item dash-side-bar">
                <h6 onClick={this.toggle} data-btn="Edit">Edit</h6>
              </li>
              <li class="nav-item dash-side-bar">
              <h6 onClick={this.toggle} data-btn="Gallery">Gallery</h6>
              </li>
              <li class="nav-item dash-side-bar">
                <h6>Dashboard</h6>
              </li>
              
            </ul>

          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">{this.state.dash_heading}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          <div>

          {this.state.on ? null :
          <div>           
            <div class="container">
                <div class="row">
                  <div class="col"> 
                      <UpdateForm   updateChange={this.updateChange} 
                                    submitUpdate={this.submitUpdate} 
                                    name={this.state.name} 
                                    bio={this.state.bio}
                                    zip={this.state.zip}
                                    category={this.state.category}

                                  />        
                  </div>
                  <div class="col">
                      <h3>Profile pic</h3>
                      <Imageupload />
                      <h3>gallery pics</h3>
                      <PhotoComponent />
                  </div>
                </div>            
            </div>
          </div>
          }

          {this.state.profileTab ? null : <Profile 
                                              name={this.state.name} 
                                              bio={this.state.bio}
                                              zip={this.state.zip}
                                              category={this.state.category}
                                              profilePic={this.state.profilePic}


                                               />}

         {
           this.state.gallery ? null :
          <div>
              {this.state.artwork.map(art=>{
               return <div key={art._id} >  <img src={`${art.pic}`} key={art._id} id={art._id}></img> <p id={art._id} onClick={this.imageDelete}>delete image</p></div>
              })}   
           </div>
         }                                      
          
          
        </div>

         
        </main>
      </div>
    </div>


 </div>

 
    );
  }
}
 
export default Dashboard;