import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token") !== null) {
    return (
      <nav>
        <Link to="/">BOARD</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/create">Create Post</Link>
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
  }else{
    return (
      <nav>
        <Link to="/">BOARD</Link>
        <Link to="/login" data-testid="login">
          Login
        </Link>
        <Link to="/sign-up" data-testid="sign-up">
          Sign Up
        </Link>
      </nav>
    );
  }
};

export default NavBar;