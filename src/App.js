import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage.js";
// import GridView from "./components/GridView.js";
import ProfilePage from "./components/ProfilePage.js";
import SignupPage from "./components/SignupPage.js";
import LoginPage from "./components/LoginPage.js";

import PostDetail from "./components/PostDetail.js";
import { getLogOut } from "./api";

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
      // turn it into a JSON string with name "currentuser" before we save
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      // delete the user info from localStorage if we are logging IN
      localStorage.removeItem("currentUser");
    }
    this.setState({ currentUser: newUser });
  }

  logoutClick() {
    getLogOut().then(response => {
      console.log("Log Out", response.data);
      // set the currentUser state to empty
      this.updateUser(null);
    });
  }

  render() {
    // console.log(this.state.currentUser);
    return (
      <div className="App">
        <header className="App-header">WELCOME INSTAGRAM</header>
        <nav>
          {this.state.currentUser ? (
            <span>
              <b>{this.state.currentUser.email}</b>
              <button onClick={() => this.logoutClick()}>Log Out</button>
            </span>
          ) : (
            <span className="navbar">
              <NavLink to="/accounts/signup">Sign Up</NavLink>
              <NavLink to="/accounts/login">Log In</NavLink>
            </span>
          )}
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route
            path="/accounts/signup"
            render={() => {
              return (
                <SignupPage
                  currentUser={this.state.currentUser}
                  signupSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />
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

          {/* PROFILE PAGE PATH TO BE MODIFIED AND ADD RENDER */}
          <Route exact path="/:username" component={ProfilePage} />

          <Route path="/p/:postId" component={PostDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
