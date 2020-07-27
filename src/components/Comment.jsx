// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import moment from "moment";

// export default class Comment extends Component {
//     state = { comments: null };

// getPosts = async (id) => {
//     const response = await fetch(
//         `http://localhost:3000/posts/${id}/comments`,
//         {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     });

//     const data = await response.json();
//     // console.log(data);
//     console.log(data.posts[0])
//     this.setState({ posts: data.posts[0], count: data.posts[0].like});    };


// showComment = async (id) => {
//     const response = await fetch(
//         `http://localhost:3000/posts/${id}/comments`,
//         {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         }
//     );
//     const data = await response.json();
//     // console.log(data)
//     this.setState({ comments: data });
//     };

// renderComments = () => {
//     // console.log(this.state.comments)
//     return this.state.comments.map((comment, index) => {
//         return (
//         <div className="post-index" key={index}>
//             <p>
//             {" "}
//             {comment.user.first_name}:{comment.content}
//             </p>
//             <p>{comment.created_at}</p>
//             <hr />
//         </div>
//         );
//     });
//     };

//     onInputChange = (event) => {
//         this.setState({
//           [event.target.id]: event.target.value,
//         });
//         console.log(this.state);
//         // console.log(this.props);
//         // console.log(this.body);
//       };
  
//       onCommentFormSubmit = async (event) => {
//         const b = this.props.match.params.id;
//         event.preventDefault();
    
//         const body = { content: this.state.content };
    
//         await fetch(`http://localhost:3000/wishes/${b}/comments`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify(body),
//         });
//         window.location.reload();
//         // this.setState((state)=>{
//         //   return {comments: [...state.comments, ]}
//         // })
//       };

//       createComments = () => {
//         return (
//           <div className="form-container-wish" style={{ margin: "0 0 35px 0" }}>
//             <form className="comment-form" onSubmit={this.onCommentFormSubmit}>
//               <h4>Add a comment:</h4>
//               {/* <label htmlFor="content">Content: </label> */}
//               <input
//                 className="comment-input"
//                 type="text"
//                 name="content"
//                 id="content"
//                 onChange={this.onInputChange}
//               />
//               <input
//                 type="submit"
//                 data-testid="comments-button"
//                 value="Add A Comment"
//               />
//             </form>
//           </div>
//         );
//       };