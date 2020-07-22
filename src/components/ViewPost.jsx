import React, { Component } from "react";
import NoMatch from "./NoMatch";

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
        <div>
          <h1>Title: {post.title}</h1>
          <p>Category: {post.tag}</p>
          <p>Description: {post.description}</p>
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
      )
    );
  }
}
