import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class Posts extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts", {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    });

    const data = await response.json();
    console.log(data)
    this.setState({ posts: data.posts });
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
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">{post.title}</p>
            </header>
            <div className="card-content">
              <div className="content">
                <p>Category: {post.tag}</p>

                <p>{post.description}</p>
                <p>{moment(post.created_at).startOf("minute").fromNow()}</p>
                <div className="card-image">
                  <figure className=" image is-4by3">
                {post.image && <img  src={post.image} alt={post.title} />}
                </figure>
                </div>
              </div>
            </div>
            <div className="edit-delete-container">
              <footer className="card-footer">
                {this.state.currentUser === post.user_id && (
                  <React.Fragment>
                    <Link to={`/posts/${post.id}/edit`}>
                      <button className="card-foot-item button is-dark">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="card-footer-item button is-dark"
                      onClick={() => this.deletePost(post.id)}
                    >
                      Delete
                    </button>
                  </React.Fragment>
                )}
                <Link
                  to={{
                    pathname: `/posts/${post.id}`,
                    state: post,
                  }}
                >
                  <button className="card-footer-item button is-dark">
                    Show
                  </button>
                </Link>
              </footer>
            </div>
            <hr />
          </div>
        </div>
      );
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    console.log(this.context);
    // this.context.dispatch();
    return <div>{this.renderPosts()}</div>;
  }
}
