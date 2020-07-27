import React, { Component } from "react";

export default class Comment extends React.Component {
render() {
    return (
/* <p>
  <strong>Title:</strong>
    {post.title}
</p>
 
<p>
  <strong>Text:</strong>
  {post.description}
</p> */
 
/* <h2>Add a comment:</h2> */
 
<div className="column is-10">
<div className="field">
<div className="control">
    <textarea
    className="textarea has-fixed-size"
    placeholder="Add a comment..."
    ></textarea>
</div>
</div>
</div>

<div className="column is-10">
<nav className="level">
<div className="level-left">
    <div className="level-item">
    <Link to className="button is-info is-small">
        Submit
    </Link>
    <Link to className="button is-info is-small">
        Edit
    </Link>
    <Link to className="button is-info is-small">
        Back
    </Link>  
    </div>
</div>
</nav>
</div>
)
    }