import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./GridView.css";

class GridView extends Component {
  render() {
    const { profilePosts } = this.props;

    return (
      <div className="GridView container-fluid">
        <div className="row">
          {profilePosts.map(onePost => {
            return (
              <div key={onePost._id} className="col-4 myCol p-0">
                <div className="square">
                  <Link postId={onePost._id} to={"/p/" + onePost._id}>
                    <img
                      src={onePost.image}
                      alt="oneImage"
                      className="square-img"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GridView;
