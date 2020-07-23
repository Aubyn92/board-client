// import React, { Component } from "react";

// export default class Comment extends React.Component {
//   render () {
//     return(
//       <div className="comment">
//         <p className="comment-header">{this.props.author}</p>
//         <p className="comment-body">- {this.props.body}</p>
//         <div className="comment-footer">
//           <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
//         </div>
//       </div>
//     );
//   }
//   _deleteComment() {
//     alert("-- DELETE Comment Functionality COMMING SOON...");
//   }
// }

// render() {
//   <CommentBox />
// }


// ReactDOM.render(<CommentBox />, document.getElementById('main'));

import React from "react";

export default function Comment(props) {
  const { name, message, time } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
        alt={name}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        {message}
      </div>
    </div>
  );
}
   
