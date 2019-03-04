import React, { Component } from "react";
import { Switch, Route, NavLink, Link, Redirect } from "react-router-dom";
import { getLogOut } from "./api";
import { getUserProfile, getUserToUnfollow, getUserToFollow } from "./api.js";
import HomePage from "./components/Pages/HomePage.js";
import ProfilePage from "./components/Pages/ProfilePage.js";
import ProfilesList from "./components/Pages/ProfilesList.js";
import SignupPage from "./components/Pages/SignupPage.js";
import LoginPage from "./components/Pages/LoginPage.js";
import PostDetailPage from "./components/Pages/PostDetailPage.js";
import ModifyProfilePage from "./components/Pages/ModifyProfilePage.js";
import NewsfeedPage from "./components/Pages/NewsfeedPage.js";
import ButtonSubmit from "./components/General/ButtonSubmit.js";
import ButtonLink from "./components/General/ButtonLink.js";
import LikesPage from "./components/Pages/LikesPage";

import "./App.css";

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
        <nav>
          {this.state.currentUser ? (
            <span>
              <b>{this.state.currentUser.email}</b>
              <button onClick={() => this.logoutClick()}>
                <Link exact to="/">
                  Log Out
                </Link>
              </button>
            </span>
          ) : (
            <span className="navbar">
              <NavLink to="/accounts/login">Log In</NavLink>
            </span>
          )}
        </nav>

        <Switch>
          {this.state.currentUser ? (
            <Route exact path="/" component={NewsfeedPage} />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
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
          <Route
            path="/accounts/edit"
            render={() => {
              return (
                <ModifyProfilePage
                  currentUser={this.state.currentUser}
                  editSuccess={user => this.updateUser(user)}
                />
              );
            }}
          />

          {/* BECAUSE OF RENDER, NEED to send match={props.match} */}
          <Route
            exact
            path="/:username"
            render={props => {
              return (
                <ProfilePage
                  currentUser={this.state.currentUser}
                  onFollowCurrentUser={user => this.updateUser(user)}
                  match={props.match}
                />
              );
            }}
          />

          <Route
            path="/:username/:status(followers|following)"
            render={props => {
              return (
                <ProfilesList
                  currentUser={this.state.currentUser}
                  onFollowCurrentUser={user => this.updateUser(user)}
                  match={props.match}
                />
              );
            }}
          />

          <Route
            path="/p/:postId"
            render={props => {
              return (
                <PostDetailPage
                  postInfo={props}
                  currentUser={this.state.currentUser}
                />
              );
            }}
          />
          <Route path="/p/:postId/liked_by" component={LikesPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
