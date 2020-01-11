import React, { Component } from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signin";
import Footer from "./components/Footer";
import Register from "./pages/register";

// Check for token to keep user logged in

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Navbar/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route component={NotFound}></Route>
              </Switch>
              <Footer />
            </div>
          </Router>
          
    );
  }
}
export default App;
