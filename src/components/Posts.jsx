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
         <div class="container is-centered">
         <div class="columns is-mobile is-centered">
              <div class="column is-10"> 
          {/* <div class="box"> */}
          <article className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                {post.image && <img src={post.image} alt={post.title} />}
              </figure>
            </div>
            <div class="column is-10">
              <div className="media-content">
                <div className="content">
                  <p>
                    {" "}
                    <strong>{post.title}</strong>
                    <small>
                      {moment(post.created_at).startOf("minute").fromNow()}
                    </small>
                    <br />
                    <small>Category: {post.tag}</small> <br />
                    {post.description}
                  </p>
                </div>
                <div class="column is-10">
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
              </div>
              <div class="column is-10">
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
              </div>
              <div class="column is-10">
                <div className="field">
                  <p className="control">
                    <textarea
                      class="textarea"
                      placeholder="Add a comment..."
                    ></textarea>
                  </p>
                </div>
              </div>
              <div class="column is-10">
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
            </div>
          </article>
          <hr />
        </div>
          </div>
         </div>
         </div>
      );
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}
