import React, { Component } from 'react'

export default class ViewPost extends Component {
  render() {
    const post = this.props.post.state;
    return (
      <div>
        <h1>Title: {post.title}</h1>
        <p>Category: {post.tag}</p>
        <p>Description: {post.description}</p>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}
  //   state = {
  //     id: this.props.match.params.id,
  //   };
  
  //   async componentDidMount() {
  //     // console.log(this.props)
  //     // console.log(this.props.location.state.location)
  //     const { id } = this.state;
  //     const anotherResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`, {
  //       headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`
  //       }
  //     });
  //     const countries = await response.json();
  //     this.setState({ posts: posts, post: post});
  //   }
  
  //   render() {
  //     const post = this.props.state;
  //     return (
  //       <div className="host">
  //       <>
  //       <div className="host-content">
  //           <h3>Title: {post.title}</h3>
  //           <h3>Category: {post.tag}</h3>
  //           <h3>Description:</h3><p>{post.description}</p>
  //         </div>
  //       </>
  //       </div>
  //     );
  //   }
  // }