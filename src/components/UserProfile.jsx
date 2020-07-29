import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class UserProfile extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/profile`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    this.setState({ posts: data.posts });
  };

  deletePost = async (id) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`, {
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

                      <div class="column is-10">
                        <Link
                          to={{
                            pathname: `/posts/${post.id}`,
                            state: post,
                          }}
                        ></Link>
                        <React.Fragment>
                          <Link to={`/posts/${post.id}/edit`}>
                            <button className="button is-small is-link is-info is-light">
                              Edit
                            </button>
                          </Link>{" "}
                          <button
                            className="button is-small is-link is-danger is-light"
                            onClick={() => this.deletePost(post.id)}
                          >
                            Delete
                          </button>{" "}
                          <button
                            className="button is-small is-info is-link is-light"
                            onClick={this.props.history.goBack}
                          >
                            Back
                          </button>
                        </React.Fragment>
                      </div>
                    </div>
                  </div>
                </article>
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
