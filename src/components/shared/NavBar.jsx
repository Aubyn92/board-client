import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/posts">posts</a>
          </li>
          <li>
            <a href="/login">log in</a>
          </li>
          <li>
          <a href="/posts/create">create new post</a>
          </li>
          <li>
          <a href="/signup">sign up</a>
          </li>
          <li>
          <a href="/posts/:id/userprofile">user profile</a>
          </li>
          <li>
          <a href="/posts/categorypage">categories page</a>
          </li>
          <li>
          <a href="/posts/viewpost">view post</a>
          </li>
          <li>
          <a href="/posts/:id/edit">edit post</a>
          </li>
        </ul>
      </nav>
    );
  }
}
