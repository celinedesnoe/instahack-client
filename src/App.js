import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import SignupPage from "./components/SignupPage.js";

class App extends Component {
  constructor(props) {
    super(props);

    let userInfo = localStorage.getItem("currentUser");
    if (userInfo) {
      // turn the string back into an objects if we are logged in
      userInfo = JSON.parse(userInfo);
    }

    this.state = {
      currentUser: userInfo
    };
  }

  updateUser(newUser) {
    if (newUser) {
      // save the user info in localStorage if we are logging in
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      // save the user info in localStorage if we are logging in
      // (turn it into a JSON string before we save)
      localStorage.removeItem("currentUser");
    }
    this.setState({ currentUser: newUser });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          WELCOME INSTAGRAM
          <Switch>
            <Route
              path="/signup"
              render={() => {
                return (
                  <SignupPage
                    currentUser={this.state.currentUser}
                    signupSuccess={user => this.updateUser(user)}
                  />
                );
              }}
            />{" "}
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
