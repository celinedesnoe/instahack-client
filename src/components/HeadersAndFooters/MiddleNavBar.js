import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import greedempty from "../../images/greedempty.png";
import greedfull from "../../images/greedfull.png";
import listempty from "../../images/listempty.png";
import listfull from "../../images/listfull.png";
import pickempty from "../../images/pickempty.png";
import pickfull from "../../images/pickblue.png";
import profileempty from "../../images/profilesquareempty.png";
import profilefull from "../../images/profilesquarefull.png";

import "./MiddleNavBar.css";

class MiddleNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: false,
      profilesquared: false
    };
  }

  colouredGreed() {
    this.setState({
      picked: false,
      profilesquared: false
    });
  }

  colouredList() {
    this.setState({
      picked: false,
      profilesquared: false
    });
  }

  colouredPick() {
    this.setState({
      picked: true,
      profilesquared: false
    });
  }

  colouredProfile() {
    this.setState({
      picked: false,
      profilesquared: true
    });
  }

  render() {
    return (
      <div className="MiddleNavBar">
        <div className="greed">
          {this.props.greeded ? (
            <div class="buton">
              <img
                onClick={event => this.colouredGreed(event)}
                src={greedfull}
                alt="greed empty"
                className="okbutton"
              />
              <Redirect to="#" />
            </div>
          ) : (
            <div class="buton">
              <img
                onClick={event => {
                  this.colouredGreed(event);
                  this.props.changeToGrid(event);
                }}
                src={greedempty}
                alt="greed full"
                className="okbutton"
              />
            </div>
          )}
        </div>

        <div className="list">
          {this.props.listed ? (
            <div class="buton">
              <img
                onClick={event => this.colouredList(event)}
                src={listfull}
                alt="list empty"
                className="okbutton"
              />
              <Redirect to="#" />
            </div>
          ) : (
            <div class="buton">
              <img
                onClick={event => {
                  this.colouredList(event);
                  this.props.changeToTimeline(event);
                }}
                src={listempty}
                alt="list full"
                className="okbutton"
              />
            </div>
          )}
        </div>

        <div className="picke">
          {this.state.picked ? (
            <div class="buton">
              <img
                onClick={event => this.colouredPick(event)}
                src={pickfull}
                alt="pick empty"
                className="okbutton"
              />
              <Redirect to="#" />
            </div>
          ) : (
            <div class="buton">
              <img
                onClick={event => this.colouredPick(event)}
                src={pickempty}
                alt="pick full"
                className="okbutton"
              />
            </div>
          )}
        </div>

        <div className="profilesquare">
          {this.state.profilesquared ? (
            <div class="buton">
              <img
                onClick={event => this.colouredProfile(event)}
                src={profilefull}
                alt="profile empty"
                className="okbutton"
              />
              <Redirect to="#" />
            </div>
          ) : (
            <div class="buton">
              <img
                onClick={event => this.colouredProfile(event)}
                src={profileempty}
                alt="profile full"
                className="okbutton"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MiddleNavBar;
