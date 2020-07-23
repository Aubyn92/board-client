import React from 'react'
import { Link } from 'react-router-dom'

const LoggedOutNavbar = () => (
  <div className="logged-out-links">
    <Link to="/">logout</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/login" data-testid="login">Log In</Link>
    <Link to="/sign-up" data-testid="sign-up">Sign Up</Link>
  </div>
)

export default LoggedOutNavbar