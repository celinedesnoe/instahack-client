import React, { Component } from "react";
import { Link } from "react-router-dom";

import ButtonLink from "./ButtonLink.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

import InstagramLogo from "../images/Instagram_logo.png";
import DownloadApple from "../images/getinonappstore.png";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <section className="HomePage">
        <Header />

        <img
          className="instagramlogo"
          src={InstagramLogo}
          alt="instagram logo"
        />
        <p className="signup">
          Sign up to see photos and videos from your friends.
        </p>
        <ButtonLink
          text="Log In"
          styling="blue-button"
          link="/accounts/login"
          className="loginbutton"
        />

        <div className="d-flex flex-row align-items-center hro">
          <hr />
          <p className="or">OR</p>
          <hr />
        </div>

        <Link to="/accounts/signup" className="signupemail">
          Sign up with email
        </Link>
        <a
          href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo"
          className="downloadapple"
        >
          <img src={DownloadApple} alt="download app on apple" />
        </a>

        <Footer
          text="Have an account?"
          link="/accounts/login"
          textLink="Log in"
        />
      </section>
    );
  }
}

export default HomePage;
