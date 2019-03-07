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

  componentDidMount() {
    getAllUsers()
      .then(response =>
        // console.log("Profile Details", response.data)
        this.setState({
          allUsers: response.data
        })
      )
      .catch(() => {
        alert("Sorry cannot find all the users");
      });
  }

  updateSearch(event) {
    const { value } = event.target;
    this.setState({ searchUser: value });
    console.log(this.state.searchUser);
  }

  searchUser() {
    const { searchUser, allUsers } = this.state;
    var allResults = allUsers.filter(oneUser => {
      return oneUser.username.indexOf(searchUser) > -1;
    });
    return allResults;
  }

  render() {
    const { allUsers, searchUser } = this.state;
    return (
      <div className="SearchPage">
        {/* <SearchBar
          search={this.state.searchUser}
          searchChange={event => this.updateSearch(event)}
        /> */}

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

        {/* {allUsers.map(oneUser => {
          return <div>{oneUser.username}</div>;
        })} */}
      </div>
    );
  }
}

export default SearchPage;
