import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default class Posts extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    this.setState({ posts: data })
  }

  deletePost = async (id) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"
    })
    this.getPosts()
  }

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>{moment(post.created_at).startOf('minute').fromNow()}</p>
          <div className="edit-delete-container">
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            <button onClick={() => this.deletePost(post.id)}>Delete</button>
          </div>
          <hr/>
        </div>
      )
    })
  }

  componentDidMount() {
    this.getPosts();
  }

 render() {
    return this.renderPosts() 
  }
}
