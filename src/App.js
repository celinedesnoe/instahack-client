import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import SignupPage from "./components/SignupPage.js";
import LoginPage from "./components/LoginPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          WELCOME INSTAGRAM
          <Switch>
            <Route path="/accounts/signup" component={SignupPage} />
            <Route path="/accounts/login" component={LoginPage} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
