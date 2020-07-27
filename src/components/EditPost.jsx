import React, { Component } from "react";

export default class EditPost extends Component {
  state = {
    title: "",
    tag: "",
    description: "",
    loading: true,
    id: Number(this.props.match.params.id),
    image: "",
  };

  onInputChange = (event) => {
    const key = event.target.id;
    if (event.target?.files) {
      this.setState({
        uploadedImage: event.target.files[0],
      });
    } else {
      this.setState({
        [key]: event.target.value,
      });
    }
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    let { id, title, tag, description, image, uploadedImage } = this.state;
    if (uploadedImage) {
      const data = new FormData();
      data.append("post[image]", uploadedImage);
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      image = await response.text();
    }

    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post: { title, tag, description } }),
    });
    this.props.history.push("/posts");
  };

  async componentDidMount() {
    // const { id } = this.state;
    // const foundPost = this.context.posts.find((post) => {
    // return post.id === this.state.id
    // })
    // this.setState({ ...foundPost, loading: false }); #removed id below
    const response = await fetch(`http://localhost:3000/posts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const { title, tag, description, image } = await response.json();
    this.setState({ title, image, description, tag, loading: false });
  }

  render() {
    const { title, tag, description, loading } = this.state;
    return (
      !loading && (
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              <div className="box">
                <div>
                  <h1 className="title has-text-centered">Edit a post</h1>
                  <form
                    onSubmit={this.onFormSubmit}
                    encType="multipart/form-data"
                  >
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
                    <textarea
                      class="textarea"
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
                    <input
                      className="button is-link"
                      type="submit"
                      value="Update Post"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
