import React, { Component } from "react";

export default class EditPost extends Component {
  state = {
    title: "",
    tag: "",
    description: "",
    image: '',
    loading: true,
    id: Number(this.props.match.params.id),
    // error: null,
    // postProps: null,
    // id: this.props.match.params.id,
  };

  onInputChange = (event) => {
    const key = event.target.id;
    if (event.target?.files) {
      this.setState({
        uploadedImage: event.target.files[0]
      })
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
      data.append('post[image]', uploadedImage)
    // await fetch(`http://localhost:3000/posts/${id}`, {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      body: data,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
      })
      image = await response.text()
    }
    // this.dispatch("update", {
    //   title,
    //   tag,
    //   description,
    //   id,
    //   updated_at: new Date(),
    //   image

    // })
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post: { title, tag, description, image } }),
    });
    this.props.history.push("/posts");
  };

  async componentDidMount() {
    const { id } = this.state;
    // const foundPost = this.posts.find((post) => {
    //   return post.id === this.state.id
    // })
    // this.setState({ ...foundPost, loading: false });
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const { title, tag, description, image } = await response.json();
    this.setState({ title, image, description, tag, loading: false });
  }

  render() {
    const { title, tag, description, image, loading } = this.state;
    return (
      !loading && (
        <div className="container">
          <h1>Edit a post</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.onInputChange}
              value={title}
            />
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              name="tag"
              id="tag"
              onChange={this.onInputChange}
              value={tag}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={this.onInputChange}
              value={description}
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
        </div>
      )
    );
  }
}
