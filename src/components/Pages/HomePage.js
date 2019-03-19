import React, { Component } from "react";
import { Link } from "react-router-dom";

import ButtonLink from "../General/ButtonLink.js";
import HeaderLanguage from "../HeadersAndFooters/HeaderLanguage.js";
import Footer from "../HeadersAndFooters/Footer.js";

import InstagramLogo from "../../images/Instagram_logo.png";
import DownloadApple from "../../images/getinonappstore.png";
import DownloadGoogle from "../../images/getinongoogleplay.png";
import ImageDesktop from "../../images/imagedesktop.jpeg";
import imgDesktopScreen from "../../images/imgDesktopScreen.jpeg";

import "./HomePage.css";
import CheckScreen from "../Pages/CheckScreen.js";

class HomePage extends Component {
  render() {
    return (
      <section className="HomePage">
        <HeaderLanguage />

        {/* MODAL CheckScreen TO MAKE SURE THE USER IS ON A PHONE SCREEN SIZE */}
        <CheckScreen />
        <div className="HomePageBody HomePageBodyDesktop">
          <div className="HomePageBodyWrap">
            <div className="HomePagePicturePhone">
              <img
                className="phoneDesktop"
                src={ImageDesktop}
                alt="phone with instagram app on it"
              />
            </div>

            <div className="HomePageDesktopRightForm">
              <div className="HomePageDesktopUpPart">
                <img
                  className="instagramlogofirstpage"
                  src={InstagramLogo}
                  alt="instagram logo"
                />

                <div className="HomePageDesktopTextForm">
                  <p className="signup">
                    Sign up to see photos and videos from your friends.
                  </p>
                </div>

                <ButtonLink
                  text="Log In"
                  styling="blue-button large"
                  link="/accounts/login"
                  className="buttonlink2"
                />

                <div className="d-flex flex-row align-items-center hrop DesktopHP">
                  <hr className="hroi1" />
                  <p className="oro">OR</p>
                  <hr className="hroi2" />
                </div>

                <div className="imgDesktopScreen1">
                  <img
                    src={imgDesktopScreen}
                    alt="sign up"
                    className="imgDesktopScreen"
                  />
                </div>

                <p className="bysigningup">
                  By signing up, you agree to our
                  <b className="blackwords2"> Terms</b>. Learn how we collect,
                  use and share your data in our
                  <b className="blackwords2"> Data Policy</b> and how we use
                  cookies and similar technology in our
                  <b className="blackwords2"> Cookies Policy</b>.
                </p>
              </div>

              <div className="HomePageDesktopHide">
                <div className="sectiondown">
                  <Link to="/accounts/signup" className="signupemail">
                    Sign up with email
                  </Link>
                </div>
              </div>

              <div className="HomePageDesktopDownloadPart">
                <p className="HomePageDesktopGetTheApp">Get the app.</p>
                <div className="HomePageDesktopDownloadIcon">
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

                  <a
                    href="https://itunes.apple.com/app/instagram/id389801252?mt=8&vt=lo"
                    className="downloadgoogle"
                  >
                    <img
                      src={DownloadGoogle}
                      alt="download app on google"
                      className="imagegoogle"
                    />
                  </a>
                </div>
              </div>
            </div>
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
