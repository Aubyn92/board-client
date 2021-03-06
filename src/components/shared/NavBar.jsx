import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const [isActive, setisActive] = React.useState(false);
  const history = useHistory();
  if (localStorage.getItem("token") != null) {
    return (
      <nav
        class="navbar background-color is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-start">
          <div class="navbar-brand">
            <a class="navbar-item">
              <Link to="/">BOARD</Link>
            </a>
            <a
              onClick={() => {
                setisActive(!isActive);
              }}
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div class="navbar-end">
            <div class="navbar-item">
              <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <a class="navbar-item">
                    <li>
                      {" "}
                      <Link to="/posts">Posts</Link>{" "}
                    </li>
                  </a>
                  <a class="navbar-item">
                    <li>
                      {" "}
                      <Link to="/posts/create">Create Post</Link>{" "}
                    </li>
                  </a>
                  <a class="navbar-item">
                    <li>
                      {" "}
                      <Link to="/profile">Profile</Link>{" "}
                    </li>
                  </a>
                  <a class="navbar-item">
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
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        class="navbar background-color"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-start">
          <div class="navbar-brand">
            <a class="navbar-item">
              <Link to="/">BOARD</Link>
            </a>

            <a
              onClick={() => {
                setisActive(!isActive);
              }}
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div class="navbar-end">
            <div class="navbar-item">
              <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <a class="navbar-item">
                    <li>
                      {" "}
                      <Link to="/posts">Posts</Link>
                    </li>
                  </a>
                  <a class="navbar-item">
                    <li>
                      {" "}
                      <Link to="/login" data-testid="login">
                        Login
                      </Link>
                    </li>
                  </a>
                  <a class="navbar-item">
                    <li>
                      {" "}
                      <Link to="/sign-up" data-testid="sign-up">
                        Sign Up
                      </Link>
                    </li>
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
