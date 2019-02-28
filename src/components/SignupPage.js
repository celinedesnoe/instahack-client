import React, { Component } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { postSignUp } from "../api.js";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      originalPassword: "",
      bio: "",
      website: "",
      profilePic: "",
      phoneNumber: null,
      gender: ""
    };
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleNext(event) {
    event.preventDefault();

    // postSignUp(this.state).then(response => {
    //   console.log("sign up result", response.data);

    //   this.props.signupSuccess(response.data);
    // });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <section className="SignupPage">
        {currentUser ? (
          <div>
            <h2>REDIRECT TO NEWSFEED</h2>
          </div>
        ) : (
          <div>
            <header>
              <p>LEFT ARROW ICON</p>
              <h2>Register</h2>
            </header>
            <form onSubmit={event => this.handleNext(event)}>
              <h1>SCREEN 1</h1>

              <label>
                EMAIL
                <input
                  onChange={event => this.genericOnChange(event)}
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email Address"
                />
              </label>
              <button>Next (ACTIVATE ONLY ONCE FIELD HAS BEEN FILLED)</button>
            </form>
            <form onSubmit={event => this.handleNext(event)}>
              <h1>SCREEN 2</h1>
              DON'T SHOW UNTIL EMAIL IS SUBMITTED
              <input
                onChange={event => this.genericOnChange(event)}
                type="text"
                name="fullName"
                value={this.state.fullName}
                placeholder="Full Name"
              />
              <input
                onChange={event => this.genericOnChange(event)}
                type="password"
                name="originalPassword"
                value={this.state.originalPassword}
                placeholder="Password"
              />
              <button>
                Next (ACTIVATE ONLY ONCE BOTH FIELDS HAVE BEEN FILLED)
              </button>
            </form>
            <div>
              <h1>SCREEN 3</h1>

              <h3>Welcome to Instagram, [ASSIGNED USERNAME]</h3>
              <p>
                Find people to follow and start sharing photos. You can change
                your username anytime.
              </p>
              <Link to="#">Change username</Link>
              <button>Next</button>
              <p>
                By signing up, you agree to our <b>Terms</b>.
              </p>
              <p>
                Learn how we collect, use and share your data in our
                <b> Data Policy</b> and how we use cookies and similar
                technology in our <b>Cookies Policy</b>.
              </p>
            </div>
            <div>
              <h1>SCREEN 4</h1>
              <p>
                <i>(skipping phone number and connect FB steps)</i>
              </p>
              <p>[icon of person]</p>
              <h4>Add a profile photo</h4>
              <p>Add a profile photo so your friends know it's you.</p>
              <button>Next</button>
              <Link to="#">Skip</Link>
            </div>
            <div>
              <h1>SCREEN 4</h1>
              <p>
                <i>(skipping phone number and connect FB steps)</i>
              </p>
              <p>[icon of person]</p>
              <h4>Add a profile photo</h4>
              <p>Add a profile photo so your friends know it's you.</p>
              <button>
                Next (TAKES YOU TO TAKE PHOTO PROCESS -- version PROFILE)
              </button>
              <Link to="#">Skip</Link>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default SignupPage;
