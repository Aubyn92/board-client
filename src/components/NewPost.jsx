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
    this.props.history.push("/posts");
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="field">
            <div className="columns is-centered">
              <div className="column is-half">
                <h1>Create a post</h1>
                <form
                  onSubmit={this.onFormSubmit}
                  encType="multipart/form-data"
                >
                  <label className="label" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="title"
                    id="title"
                    onChange={this.onInputChange}
                  />
                  <label className="label" htmlFor="tag">
                    Tag
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="tag"
                    id="tag"
                    onChange={this.onInputChange}
                  />

                  <label className="label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    onChange={this.onInputChange}
                  ></textarea>
                  <label className="label" htmlFor="image">
                    Image
                  </label>
                  <input className="button is-info"
                    type="file"
                    name="image"
                    id="image"
                    onChange={this.onInputChange}
                  />
                  <input
                    className="button btn-color"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
