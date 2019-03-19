import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { getLogOut } from "./api";
import HomePage from "./components/Pages/HomePage.js";
import ProfilePage from "./components/Pages/ProfilePage.js";
import ProfilesList from "./components/Pages/ProfilesList.js";
import SignupPage from "./components/Pages/SignupPage.js";
import LoginPage from "./components/Pages/LoginPage.js";
import PostDetailPage from "./components/Pages/PostDetailPage.js";
import ModifyProfilePage from "./components/Pages/ModifyProfilePage.js";
import NewsfeedPage from "./components/Pages/NewsfeedPage.js";
import SearchPage from "./components/Pages/SearchPage.js";
import LikesPage from "./components/Pages/LikesPage.js";
import FooterLogged from "./components/HeadersAndFooters/FooterLogged.js";

import EditPicturePage from "./components/Pages/EditPicturePage.js";
import EditPostDetailsPage from "./components/Pages/EditPostDetailsPage.js";

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
      // set the currentUser state to empty
      this.updateUser(null);
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* ########################################
              ROUTES FOR HOMEPAGE (LOGGED/NOT LOGGED)
              ########################################
          */}

          {this.state.currentUser ? (
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <NewsfeedPage
                    toLogout={() => this.logoutClick()}
                    currentUser={this.state.currentUser}
                    rerouteUrl="/"
                    onFollowCurrentUser={user => this.updateUser(user)}
                  />
                );
              }}
            />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}

          {/* ######################################
              ROUTES FOR ACCOUNT AUTHORIZATION/MODIFICATION
              ######################################
          */}

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
          {/* ######################################
              ROUTES TO VIEW USER PROFILE DETAILS
              ######################################
          */}

          <Route
            exact
            path="/:username"
            render={props => {
              return (
                <ProfilePage
                  currentUser={this.state.currentUser}
                  onFollowCurrentUser={user => this.updateUser(user)}
                  match={props.match}
                  toLogout={() => this.logoutClick()}
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

          {/* ######################################
              ROUTES TO VIEW ONE POST'S DETAILS
              ######################################
          */}

          <Route
            exact
            path="/p/:postId"
            render={props => {
              return (
                <PostDetailPage
                  postInfo={props}
                  currentUser={this.state.currentUser}
                  rerouteUrl="/p/:postId"
                />
              );
            }}
          />
          <Route
            path="/p/:postId/liked_by"
            render={props => {
              return (
                <LikesPage
                  currentUser={this.state.currentUser}
                  onFollowCurrentUser={user => this.updateUser(user)}
                  match={props.match}
                />
              );
            }}
          />

          {/* ######################################
              ROUTES TO CREATE A POST
              ######################################
          */}

          {/* <Route path="/take-pic" component={TakePhotoPage} /> */}

          <Route
            exact
            path="/create/style/"
            render={props => {
              return (
                <EditPicturePage
                  currentUser={this.state.currentUser}
                  props={props}
                />
              );
            }}
          />

          <Route
            exact
            path="/create/details/"
            render={props => {
              return (
                <EditPostDetailsPage
                  currentUser={this.state.currentUser}
                  props={props}
                />
              );
            }}
          />

          {/* ######################################
              SEARCH PAGE BY USERNAME
              ######################################
          */}

          <Route exact path="/explore/search" component={SearchPage} />
        </Switch>

        <footer className="footerprofilelogged">
          {this.state.currentUser && (
            <FooterLogged currentUser={this.state.currentUser} />
          )}
        </footer>
      </div>
    );
  }
}

export default App;
