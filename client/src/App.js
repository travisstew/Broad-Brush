import React, { Component } from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signin";
import Register from "./pages/register";
import Secret from "./pages/Secret";
import withAuth from "./components/withAuth"
import Gallery from "./pages/gallery";
import Painting from "./pages/Painting";



// Check for token to keep user logged in

class App extends Component {
  render() {
    return (
          <Router basename="/" >
            <div>
          
              <div id='main'>
             
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route  path="/dashboard"  component={withAuth(Dashboard) }></Route>
                  <Route path="/signin" component={SignIn}></Route>
                  <Route path="/register" component={Register}></Route>
                  <Route path="/secret" component={Secret}></Route>
                  <Route path="/gallery" component={Gallery}></Route>
                  <Route path="/painting" component={Painting}></Route>
                  <Route component={NotFound}></Route>
              </Switch>

              </div>
              
            </div>
          </Router>
          
    );
  }
}
export default App;
