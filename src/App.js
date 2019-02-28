import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import SignupPage from "./components/SignupPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          WELCOME INSTAGRAM
          <Switch>
            <Route path="/accounts/signup" component={SignupPage} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
