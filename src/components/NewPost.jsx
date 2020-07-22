import React, { Component } from "react";
import { PostsContext } from "../context/posts-context";

export default class NewPost extends Component {
  static contextType = PostsContext;
  onInputChange = (event) => {
    const key = event.target.id;
    if (event.target?.files) {
      this.setState({
        [key]: event.target.files[0],
      });
    } else {
      this.setState({
        [key]: event.target.value,
      });
    }
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (let key in this.state) {
      data.append(`post[${key}]`, this.state[key]);
    }
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: data,
    });
    const { image, post } = await response.json();
    this.context.dispatch("add", {...post, image});
    this.props.history.push("/posts");
  };

  render() {
    return (
      <>
        <h1>Create a post</h1>
        <form onSubmit={this.onFormSubmit} encType="multipart/form-data">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
          />
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            name="tag"
            id="tag"
            onChange={this.onInputChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={this.onInputChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
