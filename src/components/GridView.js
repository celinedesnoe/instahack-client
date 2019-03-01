import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./GridView.css";

class GridView extends Component {
  // componentDidMount() {
  //   const { profileUser } = this.props;
  //   console.log("User profile in GridView", profileUser);

  //   getUserProfile(profileUser.username)
  //     .then(
  //       response => console.log("Posts Data", response.data.postResults)
  //       // this.setState({ posts: response.data })
  //     )
  //     .catch(() => {
  //       alert("Sorry we can't find the posts from the user");
  //     });
  // }

  render() {
    // const { images } = this.state;
    const { profilePosts } = this.props;

    return (
      <div className="GridView container-fluid">
        <div className="row">
          {profilePosts.map(onePost => {
            return (
              <div key={onePost} className="col-4 myCol p-0">
                <div className="square">
                  <Link to={"/p/" + onePost._id}>
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

      //  <div className="GridView container-fluid">
      //     <div className="row">
      //       {images.map(oneImage => {
      //         return (
      //           <div className="col-4 myCol p-0">
      //             <div className="square">
      //               <a href={"/p/" + }>
      //                 <img src={oneImage} alt="oneImage" className="square-img" />
      //               </a>
      //             </div>
      //           </div>
      //         );
      //       })}
      //     </div>
      //   </div>
    );
  }
}

export default GridView;
