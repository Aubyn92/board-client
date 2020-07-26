import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class UserProfile extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await response.json();
    console.log(data);
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
                          <strong>{post.title}</strong>{" "}
                          <small>
                            {moment(post.created_at)
                              .startOf("minute")
                              .fromNow()}
                          </small>{" "}
                          <br />
                          <small>Category: {post.tag}</small>
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
                            <button className="button is-small is-link is-info is-light is-outlined">
                              Edit
                            </button>
                          </Link>{" "}
                          <button
                            className="button is-small is-link is-danger is-light is-outlined"
                            onClick={() => this.deletePost(post.id)}
                          >
                            Delete
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
