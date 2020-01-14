import React, { Component } from 'react';
import Axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    
  this.state = { 
    email:" ",
    name: " ",
    password:" ",
    password2:" ",
   }

   this.changehandler = this.changehandler.bind(this);
   this.submit = this.submit.bind(this);
  }

  changehandler(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit(e){
    e.preventDefault();
    const {name,password,email} = this.state

    Axios.post('/register', {name:name,password:password,email:email}).then(res=>{
      console.log(res);
      
    }) 
  } 
  render() { 
    return (
            <div>
              <form className="form" onSubmit={this.submit}>
                <div class="form-group">
                    <label >Email</label>
                    <input type="email" name="email" class="form-control" onChange={this.changehandler} value={this.state.email}  />
                </div>
                <div class="form-group">
                    <label >Name</label>
                    <input type="text" name="name" class="form-control" onChange={this.changehandler} value={this.state.name} />
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input type="password" name="password"  class="form-control"   onChange={this.changehandler} value={this.state.password} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
           );
  }
}
 
export default Register;