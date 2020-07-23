// import React, { Component } from "react";

// export default class Comments extends Component {
//   render() {
//     const comment = this.state.comment;
//     const error = this.state.error;
//     if (error) {
//       return <NoMatch />;
//     }
//     return (
//       comment && (
//         <div>
//           <h1>Title: {post.title}</h1>
//           <p>Category: {post.tag}</p>
//           <p>Description: {post.description}</p>
//           <p>{moment(post.created_at).startOf("minute").fromNow()}</p>
//           {post.image && <img src={post.image} alt={post.title} />}
//           <button onClick={this.props.history.goBack}>Back</button>
//           <Link to={`/posts/new_comment/${post.id}/post_id`}>
//             <button className="card-foot-item button is-dark">
//               Add Comment
//             </button>
//           </Link>
//           <form action="/posts/{{post._id}}/comments" method="post">
//             <textarea
//               class="form-control"
//               name="content"
//               placeholder="Comment"
//             ></textarea>
//             <div class="text-right">
//               <button type="submit" class="btn btn-primary">
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )
//     );
//   }
// }


