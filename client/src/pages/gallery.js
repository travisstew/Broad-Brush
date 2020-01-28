import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Zip from '../components/Zip';
import pic from '../img/ladypaint.jpg'
class Gallery extends Component {

  state = { 
        zip:'',
        showGenres: true, 
  }


  genres=()=>{
      this.setState({
        showGenres:!this.state.showGenres,
      });
      console.log('got it');    
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
          {this.state.showGenres && 
          
                  
        <div className="container" >
                  <div className="row">
                      <div className="col-sm-12 d-flex justify-content-center ">
                          <h1 className="kavoon">Gallery</h1>
                      </div>
                  </div>   

                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-center ">
                            <form className="form-inline">
                                  <div className="form-group mx-sm-3 mb-2">
                                    <label for="inputPassword2" class="sr-only">Password</label>
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                                  </div>
                                  <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
                            </form>
                      </div>
                    </div>

                  <div class="row">
                  
                        <div class="col-sm d-flex justify-content-center">
                            <div class="gallery-image-over" data-content="Painting">
                                <img src={pic} class="rounded gallery-cat" alt="painting"/>
                            </div>
                        </div>
                        <div class="col-sm d-flex justify-content-center">
                            <div class="gallery-image-over">
                            <img src={pic} class="rounded gallery-cat" alt="painting"/>
                        </div>
                        </div>
                        <div class="col-sm">
                          One of three columns
                        </div>

                  </div>

        </div>
          }
          </div> 
    );
  }
}
 
export default Gallery ;