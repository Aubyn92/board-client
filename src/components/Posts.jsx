import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class Posts extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts", {});

    const data = await response.json();
    console.log(data);
    this.setState({ posts: data.posts });
  };

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                {post.image && <img src={post.image} alt={post.title} />}
              </p>
            </figure>

            <div className="media-content">
              <div className="content">
                <p>
                  {" "}
                  <strong>{post.title}</strong> <small>{post.tag}</small>{" "}
                  <small>
                    {moment(post.created_at).startOf("minute").fromNow()}
                  </small>
                  <br />
                  {post.description}
                </p>
                <Link
                  to={{
                    pathname: `/posts/${post.id}`,
                    state: post,
                  }}
                >
                  <button className="button is-small is-link is-light">
                    View
                  </button>
                </Link>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a href className="level-item">
                    <span className="icon is-small">
                      <i className="fas fa-reply"></i>
                    </span>
                  </a>
                  <a href className="level-item">
                    <span className="icon is-small">
                      <i className="fas fa-retweet"></i>
                    </span>
                  </a>
                  <a href className="level-item">
                    <span className="icon is-small">
                      <i className="fas fa-heart"></i>
                    </span>
                  </a>
                </div>
              </nav>
              <div className="field">
                <p className="control">
                  <textarea
                    class="textarea is-one-third-desktop"
                    placeholder="Add a comment..."
                  ></textarea>
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <a href className="button is-info is-small">
                      Submit
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </article>

          <hr />
        </div>
      );
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    // console.log(this.context);
    return <div>{this.renderPosts()}</div>;
  }
}
