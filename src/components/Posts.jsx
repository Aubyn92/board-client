import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class Posts extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {});

    const data = await response.json();
    console.log(data);
    this.setState({ posts: data.posts });
  };

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <div className="container is-centered">
            <div className="columns is-mobile is-centered">
              <div className="column is-10">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      {/* <p>Likes: {post.like}</p> */}
                      {post.image && <img src={post.image} alt={post.title} />}
                    </figure>
                  </div>
                  <div className="column is-10">
                    <div className="media-content">
                      <div className="content column is-10">
                        <p>
                          {" "}
                          <strong className="brighten">
                            {post.title}
                          </strong>{" "}
                          <small className="robo">
                            {moment(post.created_at)
                              .startOf("minute")
                              .fromNow()}
                          </small>{" "}
                          <br />
                          <small className="cato">Category: {post.tag}</small>
                          <br />
                          {post.description}
                        </p>
                      </div>
                    </div>
                    <div className="column is-10">
                      <nav className="level is-mobile">
                        <div className="level-left">
          
                            <Link
                              to={{
                                pathname: `/posts/${post.id}`,
                                state: post,
                              }}
                            >
                              <button className="button is-small is-link is-light is-outlined">
                                View
                              </button>
                            </Link>
                          </div>
                      </nav>
                    <small className="cato">{post.like} Likes</small>
                    </div>

                    <div className="column is-10">
                      <div className="field">
                        <div className="control">
                          <textarea
                            className="textarea has-fixed-size"
                            placeholder="Add a comment..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="column is-10">
                      <nav className="level">
                        <div className="level-left">
                          <div className="level-item">
                            <Link to className="button is-info is-small">
                              Submit
                            </Link>
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
