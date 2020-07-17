import React, { Component } from 'react'

export default class NewPost extends Component {
  
    onInputChange = (event) => {
      const key = event.target.id;
      this.setState({
        [key]: event.target.value,
      });
    };

    onCheckBoxChange = (event) => {
      console.log(event.target.value);
    }
    
    onFormSubmit = async (event) => {
      event.preventDefault()
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(this.state)
      })
      this.props.history.push("/posts");
    }
render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>

          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />

          <label htmlFor="tag">Tag</label>
          <input type="text" name="tag" id="tag" />

          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
  )
  }
}


