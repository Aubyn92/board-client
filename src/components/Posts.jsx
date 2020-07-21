import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class Posts extends Component {
  state = { posts: [] };

  getPosts = async () => {
    // const isLoggedIn = this.state.isLoggedIn;
    const response = await fetch("http://localhost:3000/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();
    this.setState({ posts: data.posts, currentUser: data.current_user });
  };

  deletePost = async (id) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    this.getPosts();
  };

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>{post.tag}</p>
          <p>{moment(post.created_at).startOf("minute").fromNow()}</p>
          <div className="edit-delete-container">
            {this.state.currentUser === post.user_id && (
              <React.Fragment>
                <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                <button onClick={() => this.deletePost(post.id)}>Delete</button>
              </React.Fragment>
            )}
            <Link
              to={{
                pathname: `/posts/${post.id}`,
                state: post,
              }}
            >
              <button>Show</button>
            </Link>
          </div>
          <hr />
        </div>
      );
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return this.renderPosts();
  }
}
