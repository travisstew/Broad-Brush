import React, { Component } from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";


// Check for token to keep user logged in

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home}/>
              </Switch>
            </div>
          </Router>
          
    );
  }
}
export default App;
