import React, { Component } from "react";
import NoMatch from "./NoMatch";
import { Link } from "react-router-dom";
import moment from "moment";

export default class ViewPost extends Component {
  state = { post: null, error: false, count: 0, comments: [] };
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const anotherResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${id}`
      );
      if (anotherResponse.status >= 400) {
        throw "error";
      }
      const { post, comments } = await anotherResponse.json();
      console.log(post);
      this.setState({ post: post, count: post.like, comments: comments });
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
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post: { like: like } }),
    });
  };

  onButtonClick = async (id, e) => {
    const body = { comment: { body: this.state.comment } };
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/posts/${id}/comments`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      }
    );
    const comment = await response.json();
    this.setState((state) => {
      return {
        comments: [...state.comments, comment],
      };
    });
    this.textArea.current.value = "";
  };

  onTextAreaChange = (e) => {
    const text = e.target.value;
    this.setState({ comment: text });
  };

  renderComments = () => {
    console.log(this.state.comments);
    return this.state.comments.map((comment, index) => {
      return (
        <div className="comment" key={index}>
          <p>
            {" "}
            {comment.commenter}:{comment.body}
          </p>
          <hr />
        </div>
      );
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
                              💜 Likes: {this.state.count}
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
                          type="text"
                          name="body"
                          placeholder="Add a comment..."
                          onChange={this.onTextAreaChange}
                          ref={this.textArea}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="column is-10">
                    <nav className="level">
                      <div className="level-left">
                        <div className="level-item">
                          <button
                            className="button is-link is-small is-light is-outlined"
                            onClick={(e) => this.onButtonClick(post.id, e)}
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div class="column is-10">
                    <article class="message is-small is-info">
                      <div class="message-body color-p">
                        {this.renderComments()}
                      </div>
                    </article>
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
