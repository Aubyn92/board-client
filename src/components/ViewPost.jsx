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
        <div>
          <h1>Title: {post.title}</h1>
          <p>Category: {post.tag}</p>
          <p>Description: {post.description}</p>
          <p>{moment(post.created_at).startOf("minute").fromNow()}</p>
          {post.image && <img src={post.image} alt={post.title} />}
          <button onClick={this.props.history.goBack}>Back</button>
          <form action="/posts/{{post._id}}/comments" method="post">
          <textarea class='form-control' name="content" placeholder="Comment"></textarea>
          <div class="text-right">
          <button type="submit" class="btn btn-primary">Save</button>
          </div>
          </form>
        </div>
      )
    );
  }
}


// above code is for a form in the show area of viewing a post, so that the user can write a 
// comment if they're viewing this post.