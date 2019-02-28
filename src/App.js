import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import SignupPage from "./components/SignupPage.js";
import LoginPage from "./components/LoginPage.js";

class App extends Component {
  constructor(props) {
    super(props);
    // get the initial value of currentUser from localStorage
    let userInfo = localStorage.getItem("currentUser");

    if (userInfo) {
      // turn the string back into an object if we are logged in
      userInfo = JSON.parse(userInfo);
    }

    this.state = {
      currentUser: userInfo
    };
  }

  updateUser(newUser) {
    if (newUser) {
      // save the user info in the localStorage if we are logging in
      // turn it into a JSON string before we save
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      // delete the user info from localStorage if we are logging IN
      localStorage.removeItem("currentUser");
    }
    this.setState({ currentUser: newUser });
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <header className="App-header">WELCOME INSTAGRAM</header>

        <nav>
          <NavLink to="/accounts/login">Log In</NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/accounts/signup" component={SignupPage} />

          <Route
            path="/accounts/login"
            render={() => {
              return (
                <LoginPage
                  currentUser={this.state.currentUser}
                  loginSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
