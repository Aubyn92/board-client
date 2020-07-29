import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class Posts extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/posts`,
      {}
    );

    const data = await response.json();
    console.log(data);
    this.setState({ posts: data.posts });
  };

  onButtonClick = async (id) => {
    const body = { body: this.state.comment };
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
    console.log(await response.json());
  };

  onTextAreaChange = (e) => {
    const text = e.target.value;
    this.setState({ comment: text });
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
                      <small className="cato">{post.like} Likes</small>
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
    console.log(this.state);
    return <div>{this.renderPosts()}</div>;
  }
}
