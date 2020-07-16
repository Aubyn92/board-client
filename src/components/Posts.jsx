import React, { Component } from 'react'

export default class Posts extends Component {
  state = { posts: [] }

  getPosts = async () => {
    const response = await fetch("http://localhost:3000")
    const posts = await response.json()
    this.setState({ posts: posts })
  }

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <span><a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a></span>
          <hr/>
        </div>
      )
    })
  }

  async componentDidMount() {
    this.getPosts()
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    )
  }
}
