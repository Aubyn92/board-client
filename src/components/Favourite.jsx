import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class Favourite extends Component {
  state = { 
      count: 0
   };

//   getPosts = async () => {
//     const response = await fetch("http://localhost:3000/posts", {});

//     const data = await response.json();
//     console.log(data);
//     this.setState({ posts: data.posts });
//   };

  renderPosts = () => {
      return (
                    <div class="column is-10">
                      <nav className="level is-mobile">
                        <div className="level-left">
       
                          <a href className="level-item">
                            <span className="icon is-small">
                              <i className="fas fa-heart"></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>


      );
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}
