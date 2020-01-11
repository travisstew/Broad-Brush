import React, { Component } from 'react';

class Register extends Component {
  state = { 
    email:"",
    name:"",
    password:"",
    password2:"",
   }



  render() { 
    return (
            <div>
              <form>
                <div class="form-group">
                  <label >Email</label>
                  <input type="text" name="email" class="form-control" id="formGroupExampleInput" placeholder=""/>
                </div>
                <div class="form-group">
                  <label >Name</label>
                  <input type="text" name="name" class="form-control" id="formGroupExampleInput" placeholder=""/>
                </div>
                <div class="form-group">
                  <label >Password</label>
                  <input type="text" name="password" class="form-control" id="formGroupExampleInput" placeholder=""/>
                </div>
                <div class="form-group">
                  <label >Confirm Password</label>
                  <input type="text" name="password2" class="form-control" id="formGroupExampleInput" placeholder=""/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
           );
  }
}
 
export default Register;