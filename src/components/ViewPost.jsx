import React, { Component } from "react";
import NoMatch from "./NoMatch";
import moment from "moment";

export default class ViewPost extends Component {
  state = { post: null, error: false };
  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const anotherResponse = await fetch(`http://localhost:3000/posts/${id}`);
      if (anotherResponse.status >= 400) {
        throw "error";
      }
      const post = await anotherResponse.json();
      console.log(post);
      this.setState({ post: post });
    } catch (error) {
      this.setState({ error: true });
    }
  }

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
              {/* <div class="box"> */}
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
                        <small>Category: {post.tag}</small>
                        <br />
                        {post.description}
                      </p>
                    </div>
                    <div class="column is-10">
                      <button
                        className="button is-small is-link is-light is-info"
                        onClick={this.props.history.goBack}
                      >
                        Back
                      </button>
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

                {/* <form action="/posts/{{post_id}}/comments" method="post">
          <textarea class='form-control' name="content" placeholder="Comment"></textarea>
          <div class="text-right">
          <button type="submit" class="btn btn-primary">Save</button> */}
              </article>
              <hr />
            </div>
          </div>
        </div>
      )
    );
  }
}

