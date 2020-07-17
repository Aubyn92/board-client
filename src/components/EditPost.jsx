import React, { Component } from 'react'

export default class EditPost extends Component {
  state = { title: "", image_url: "", description: "", tag: "", loading: true, id: this.props.match.params.id };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { id, title, image_url, description, tag } = this.state
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image_url, description, tag }),
    });
    this.props.history.push("/posts");
  };

  async componentDidMount() {
    const { id } = this.state
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const { title, image_url, description, tag } = await response.json();
    this.setState({ title, image_url, description, tag, loading: false });
  }

  render() {
    const { title, image_url, description, tag, loading } = this.state;
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
            <label htmlFor="image_url">Image</label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              onChange={this.onInputChange}
              value={image_url}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              onChange={this.onInputChange}
              value={description}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    );
  }
}

