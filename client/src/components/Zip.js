import React, { Component } from 'react';

class Zip extends Component {
  
  state = { 
  
   }

  render() { 
    return ( 
      <div>
          <form className="zip-form w-25 justify-content-center ">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
             
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
     );
  }
}
 
export default Zip;