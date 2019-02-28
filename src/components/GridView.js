import React, { Component } from "react";
import "./GridView.css";
import { getPosts } from "../api";

import { Link } from "react-router-dom";

class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      posts: [
        "https://thewoksoflife.com/wp-content/uploads/2018/03/crystal-steamed-dumplings-11.jpg"
      ],
      images: [
        "https://thewoksoflife.com/wp-content/uploads/2018/03/crystal-steamed-dumplings-11.jpg",
        "http://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg",
        "https://media.blogto.com/events/2018/02/21/20170301-2048-RolSan8.jpg?w=2048&cmd=resize&quality=70",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjMz3q3EErHbzDERelnO8FqVGiLew9p024cxkuc_Q6BVXlEh52A",
        "http://www.dimsumgardenphilly.com/wp-content/uploads/2015/12/Dim-Sum-Garden_025-e1449776224255.jpg",
        "https://www.seriouseats.com/images/20110417-dim-sum-primary.jpg"
      ]
    };
  }

  componentDidMount() {
    getPosts(this.props.currentUser)
      .then(response =>
        // console.log("Posts Data", response.data))
        this.setState({ posts: response.data })
      )
      .catch(() => {
        alert("Sorry we can't find the posts from the user");
      });
  }

  render() {
    // const { images } = this.state;
    const { currentUser } = this.state;
    const { posts } = this.state;

    console.log(currentUser);
    return (
      <div className="GridView container-fluid">
        <div className="row">
          {posts.map(onePost => {
            return (
              <div key={onePost} className="col-4 myCol p-0">
                <div className="square">
                  <a href={"/p/" + onePost._id}>
                    <img
                      src={onePost.image}
                      alt="oneImage"
                      className="square-img"
                    />
                  </a>
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
