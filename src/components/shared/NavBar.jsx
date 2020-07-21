import React from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
  // render() {
  //   return (
      <nav>
  {/* //       <ul>
  //         <li>
  //           <a href="/">home</a>
  //         </li>
  //         <li>
  //           <a href="/posts">posts</a>
  //         </li>
  //         <li>
  //           <a href="/login" data-testid="login">Login</a>
  //         </li>
         <li>
        <a href="/posts/create">create new post</a>
          // </li>
  //         <li>
  //         <a href="/signup">sign up</a>
  //         </li>
  //         <li>
  //         <a href="/posts/:id/userprofile">user profile</a>
  //         </li>
  //         <li>
  //         <a href="/posts/categorypage">categories page</a>
  //         </li>
  //         <li>
  //         <a href="/posts/viewpost">view post</a>
  //         </li>
  //         <li>
  //         <a href="/posts/:id/edit">edit post</a>
  //         </li>
  //       </ul> */}
  {/* //     </nav> */}
  {/* //   ); */}
  {/* // } */}
  {/* const NavBar = () => { */}
    {/* <div> */}
    <Link to="/">BOARD</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/create">Create new post</Link>
      <Link to="/login" data-testid="login">Login</Link>
      <Link to="/sign-up" data-testid="sign-up">Sign Up</Link>
      <span
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/login");
        }}
      >
        Logout
      </span>
    </nav>
  );
};

export default NavBar;