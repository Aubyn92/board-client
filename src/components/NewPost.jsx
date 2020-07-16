import React, { Component } from 'react'

export default class NewPost extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="url">Url</label>
          <input type="text" name="url" id="url" />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


