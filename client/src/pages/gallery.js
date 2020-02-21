import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import pic from '../img/ladypaint.jpg'
import photography from '../img/photography.jpg'
import { Link } from 'react-router-dom';
import sculpt from '../img/sculpting.jpeg'
import arch from '../img/arch.jpeg'
import ceramic from '../img/ceramic.jpeg';
import creative from '../img/creative.jpeg';

class Gallery extends Component {

  state = { 
        zip:'',
        showGenres: true,
        users:[],
        on:true,
        categorybtn:true,
  }

  genres=()=>{
      this.setState({
        showGenres:!this.state.showGenres,
      });
  }
  zipChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  zipSubmit =(e)=>{
      e.preventDefault();
      const zip = {
            zip: this.state.zip
      }

      axios.post('/api/zip', zip).then(res=>{
              // window.location.reload(true);
              console.log(res);         
      });
  }

  category=(e)=>{
      switch (e.currentTarget.dataset.btn) {
        case "painting":
                console.log('painting');
                this.setState({
                  users: this.state.users.filter(paint=> paint.category === "painting" ),
                });
        break;

        default:
          break;
      }
  }

  componentDidMount(){ 
      axios('/api/gallery').then(res=>{
          console.log(res.data)
          this.setState({
            users: res.data,
          })
      });
  }


  render() { 
      
      this.state.users.map(art=>{
        console.log(art.artwork);
      });
     
    return ( 

      <div>
           <Navbar css="navbar" />
            <div className="container" >
            {/* <div className="row">
                      <div className="col-sm-12 d-flex justify-content-center pb-5 pt-3 ">
                            <form className="form-inline" onSubmit={this.zipSubmit}>
                                  <div className="form-group mx-sm-3 mb-2">
                                    <input type="text" class="form-control form-control-sm" name="zip" onChange={this.zipChange} placeholder="Enter Zip Code"/>
                                  </div>
                                  <button type="submit" id='btn' class="btn btn-primary form-control-sm mb-2">Submit</button>
                            </form>
                      </div>
                    </div> */}
        {/* ======= show category bar ====== */}

          {this.state.showGenres && 
              
            
                <div>
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center pb-5 ">
                                <h1 className="kavoon">Gallery</h1>
                            </div>
                        </div>   
                        <div class="row">
                        
                              <div class="col-sm d-flex justify-content-center">
                                  <Link to="/painting">
                                      <div class="gallery-image-over" onClick={this.category} data-btn="painting" data-content="Painting">
                                          <img src={pic} class="rounded gallery-cat" alt="painting"/>
                                      </div>
                                 </Link>
                              </div>
                 
                              <div class="col-sm d-flex justify-content-center">
                              <Link to="/photography">
                                  <div class="gallery-image-over" data-btn="photography" data-content="Photograpy">
                                      <img src={photography} style={{height:`${10}rem`}}   class="rounded gallery-cat" alt="painting"/>
                                  </div>
                              </Link>
                              </div>
                      
                              <div class="col-sm d-flex justify-content-center">
                                <Link to="/sculpting">
                                    <div class="gallery-image-over" data-btn="sculpting" data-content="Sculpting">
                                        <img src={sculpt} style={{height:`${10}rem`}}   class="rounded gallery-cat" alt="painting"/>
                                    </div>
                                </Link>
                              </div>
                           

                        </div>
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center pb-5 ">
                            
                            </div>
                        </div>   
                        <div class="row">
                        
                              <div class="col-sm d-flex justify-content-center">
                                  <Link to="/architecture">
                                      <div class="gallery-image-over" onClick={this.category} data-btn="architecture" data-content="Architecture">
                                          <img src={arch} style={{height:`${10}rem`}} class="rounded gallery-cat" alt="painting"/>
                                      </div>
                                 </Link>
                              </div>
                 
                              <div class="col-sm d-flex justify-content-center">
                                <Link to="/ceramic">
                                  <div class="gallery-image-over" style={{height:`fit-content`}} data-btn="ceramic" data-content="Ceramic">
                                      <img src={ceramic} style={{height:`${10}rem`}}  class="rounded gallery-cat" alt="painting"/>
                                  </div>
                                </Link>
                              </div>
                              <div class="col-sm d-flex justify-content-center">
                                <Link to="/creative">
                                  <div class="gallery-image-over" style={{height:`fit-content`}} data-btn="creative" data-content="Creativity">
                                      <img src={creative}  style={{height:`${11}rem`}} class="rounded gallery-cat" alt="painting"/>
                                  </div>
                                </Link>
                              </div>
                           

                        </div>
              </div>      
       
          }

        {/* ======= end show category bar ====== */} 

        
           


           </div>
          </div> 
    );
  }
}
 
export default Gallery ;