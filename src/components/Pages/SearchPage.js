import React, { Component } from "react";
import { getAllUsers } from "../../api.js";

import SearchResults from "../Pages/SearchResults.js";

import "./SearchPage.css";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      searchUser: ""
    };
  }

  // DISPLAY ALL THE USERS FROM INSTAHACK
  componentDidMount() {
    getAllUsers()
      .then(response =>
        this.setState({
          allUsers: response.data
        })
      )
      .catch(() => {
        alert("Sorry cannot find all the users");
      });
  }

  // UPDATE THE STATE ACCORDING TO THE USER INPUT
  updateSearch(event) {
    const { value } = event.target;
    this.setState({ searchUser: value });
  }

  // GIVE THE RESULTS OF THE USER SEARCH
  searchUser() {
    const { searchUser, allUsers } = this.state;
    var allResults = allUsers.filter(oneUser => {
      return oneUser.username.indexOf(searchUser) > -1;
    });
    return allResults;
  }

  render() {
    const { searchUser } = this.state;
    return (
      <div className="SearchPage">
        <div className="searchheader">
          <div className="searchbar">
            <input
              onChange={event => this.updateSearch(event)}
              name="search"
              value={searchUser}
              type="text"
              placeholder="Search"
              className="searchinput"
            />
          </div>
          <p className="bold cancel">Cancel</p>
        </div>

        <p className="suggested">Suggested</p>

        <SearchResults allUsers={this.searchUser()} />
      </div>
    );
  }
}

export default SearchPage;
