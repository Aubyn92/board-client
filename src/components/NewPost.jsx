import React, { Component } from "react";

export default class NewPost extends Component {
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

  // onCheckBoxChange = (event) => {
  //   console.log(event.target.value);
  // };

  onFormSubmit = async (event) => {
    event.preventDefault();
    var data = new FormData();
    for (let key in this.state) {
      data.append(`post[${key}]`, this.state[key]);
    }
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      // body: JSON.stringify(this.state),
      body: data,
    });
    // const { image, post } = await response.json();
    // const newPost = await Response.json()
    this.props.history.push("/posts");
  };

  render() {
    return (
      <>
        <h1>Create a post</h1>
        <form onSubmit={this.onFormSubmit} encType="multipart/form-data">
          {/* <div className="container"> */}
          {/* <form onSubmit={this.onFormSubmit}> */}
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
        {/* </div> */}
      </>
    );
  }
}
