import React, { Component } from "react";
import { Link } from "react-router-dom";

import ButtonLink from "../General/ButtonLink.js";
import HeaderLanguage from "../HeadersAndFooters/HeaderLanguage.js";
import Footer from "../HeadersAndFooters/Footer.js";

import InstagramLogo from "../../images/Instagram_logo.png";
import DownloadApple from "../../images/getinonappstore.png";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <section className="HomePage">
        <HeaderLanguage />
        <div className="HomePageBody">
          <img
            className="instagramlogofirstpage"
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

          <div className="d-flex flex-row align-items-center hrop">
            <hr className="hroi1" />
            <p className="oro">OR</p>
            <hr className="hroi2" />
          </div>

          <div className="sectiondown">
            <Link to="/accounts/signup" className="signupemail">
              Sign up with email
            </Link>
            <a
              href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo"
              className="downloadapple"
            >
              <img
                src={DownloadApple}
                alt="download app on apple"
                className="imageapple"
              />
            </a>
          </div>
        </div>
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
