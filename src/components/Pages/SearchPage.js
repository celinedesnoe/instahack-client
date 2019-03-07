import React, { Component } from "react";
import { getAllUsers } from "../../api.js";

import "./SearchPage.css";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      searchUser: {}
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

  searchProducts() {
    const { searchUser, allUsers } = this.state;
    var allResults = allUsers.data.filter(oneProduct => {
      return oneProduct.name.indexOf(searchUser) > -1;
    });
    return allResults;
  }

  render() {
    const { allUsers } = this.state;
    return (
      <div>
        {/* <SearchBar
          search={this.state.searchedProduct}
          searchChange={event => this.updateSearch(event)}
        /> */}

        {allUsers.map(oneUser => {
          return <div>{oneUser.username}</div>;
        })}
      </div>
    );
  }
}

export default SearchPage;
