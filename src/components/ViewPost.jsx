import React, { Component } from "react";
import NoMatch from "./NoMatch";
import { Link } from "react-router-dom";
import moment from "moment";

export default class ViewPost extends Component {
  state = { post: null, error: false, count: 0 };

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const anotherResponse = await fetch(`http://localhost:3000/posts/${id}`);
      if (anotherResponse.status >= 400) {
        throw "error";
      }
      const post = await anotherResponse.json();
      console.log(post);
      this.setState({ post: post, count: post.like });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  incrementMe = async () => {
    const id = this.props.match.params.id;
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });

    let like = this.state.count + 1;
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post: { like: like } }),
    });
  };

  render() {
    const post = this.state.post;
    const error = this.state.error;
    if (error) {
      return <NoMatch />;
    }
    return (
      post && (
        <div class="container is-centered">
          <div class="columns is-mobile is-centered">
            <div class="column is-10">
              <article className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      {/* <p>Likes: {post.like}</p> */}
                      {post.image && <img src={post.image} alt={post.title} />}
                    </figure>
                </div>

                <div class="column is-10">
                  <div className="media-content">
                    <div className="content column is-10">
                      <p>
                        {" "}
                        <strong className="brighten">{post.title}</strong>{" "}
                        <small className="robo">
                          {moment(post.created_at).startOf("minute").fromNow()}
                        </small>{" "}
                        <br />
                        <small className="cato">Category: {post.tag}</small>
                        <br />
                        {post.description}
                      </p>
                    </div>
                    <div className="column is-10">
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <Link to className="level-item">
                            <button
                              className="button is-small is-light is-link is-info is-outlined"
                              onClick={this.incrementMe}
                            >
                              {" "}
                              💜  Likes: {this.state.count}
                            </button>
                          </Link>
                          <button
                            className="button is-small is-light is-link is-info is-outlined"
                            onClick={this.props.history.goBack}
                          >
                            Back
                          </button>
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div class="column is-10">
                    <div className="field">
                      <div className="control">
                        <textarea
                          class="textarea has-fixed-size"
                          placeholder="Add a comment..."
                        ></textarea>
                      </div>
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
      )
    );
  }
}
