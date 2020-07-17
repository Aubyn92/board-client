import React, { Component } from 'react'

export default class NewPost extends Component {
  render() {
  return (
    <h1>Create new post</h1>
    // onInputChange = (event) => {
    //   this.setState({
    //     [event.target.id]: event.target.value
    //   })
    // }
    
    // onFormSubmit = async (event) => {
    //   event.preventDefault()
    //   await fetch("http://localhost:3000/create", {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify(this.state)
    //   })
    //   this.props.history.push("/posts")
    // }

    // return (
    //   <div className="container">
    //     <form>
    //       <label htmlFor="title">Title</label>
    //       <input type="text" name="title" id="title" />
    //       <label htmlFor="url">Url</label>
    //       <input type="text" name="url" id="url" />
    //       <label htmlFor="description">Description</label>
    //       <textarea name="description" id="description"></textarea>
    //       <input type="submit" value="Submit" />
    //     </form>
    //   </div>
  )
  }
}


