import React from "react";
import { Link } from "react-router-dom";

const handleLogout = (props) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("auth");
  // props.context.dispatch("logout");
  props.history.push("/");
};

const LoggedInNavbar = (props) => (
  <>
    <div className="logged-in-links">
      <Link to="/">BOARD</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/new">Create Post</Link>
    </div>
    <div className="welcome-user">
      <span id="logout" onClick={() => handleLogout(props)}>
        Logout
      </span>
      <Link to="/profile">User Profile</Link>
    </div>
  </>
);

export default LoggedInNavbar;
