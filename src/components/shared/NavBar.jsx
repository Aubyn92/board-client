import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token") != null) {
    return (
      <div className="display is-flex-mobile">
        <nav className="navbar background-color">
        <nav className="navbar background-color" role="navigation" aria-label="main navigation">
          <div className="navbar-start">
            <a href className="navbar-item">
              <Link to="/">BOARD</Link>
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li>
                    {" "}
                    <Link to="/posts">Posts</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/posts/create">Create Post</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/profile">Profile</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <span
                      onClick={() => {
                        localStorage.removeItem("token");
                        history.push("/login");
                      }}
                    >
                      Logout
                    </span>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="display is-flex-mobile">
        <nav className="navbar background-color" role="navigation" aria-label="main navigation">
          <div className="navbar-start">
            <a href className="navbar-item">
              <Link to="/">BOARD</Link>
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li>
                    <li>
                      {" "}
                      <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/login" data-testid="login">
                        Login
                      </Link>
                    </li>
                    <li></li>{" "}
                    <Link to="/sign-up" data-testid="sign-up">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar;
