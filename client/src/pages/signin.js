import React, { Component } from 'react';
// import axios from "axios";

class SignIn extends Component {

  state = {
    email:"",
    password:""
   }

  onFormChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  OnSignIn =(e)=>{
   e.preventDefault(); 
 
  fetch('/signin', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.status === 200) {
      this.props.history.push('/');
    } else {
      const error = new Error(res.error);
      throw error;
    }
  })
  .catch(err => {
    console.error(err);
    console.log('Error logging in please try again');
  });

  }

  render() { 
    return ( 
    <div>
      <form id="form" onSubmit={this.OnSignIn}>
          <div className="form-group">
            <label >Email address</label>
            <input  type="email" name="email" onChange={this.onFormChange} value={this.state.email} className="form-control" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onFormChange}/>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    );
  }
}
 
export default SignIn ;