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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
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
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5">
            <div className="box">
              <div>
                <h1 className="title has-text-centered">Create a post</h1>
              </div>
              <form onSubmit={this.onFormSubmit} encType="multipart/form-data">
                <div className="field">
                  <label className="label" htmlFor="title">
                    Title
                  </label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title"
                      onChange={this.onInputChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="tag">
                    Category
                  </label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="tag"
                      id="tag"
                      placeholder="Category"
                      onChange={this.onInputChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-tag"></i>
                    </span>
                  </div>
                </div>

                <label className="label" htmlFor="description">
                  Description
                </label>
                <textarea class="textarea"
                  name="description"
                  id="description"
                  onChange={this.onInputChange}
                ></textarea>

                <div className="field">
                  <label className="label" htmlFor="image">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={this.onInputChange}
                  />
                </div>

                <div className="buttons"></div>
                <input className="button is-link" type="submit" value="Post" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
