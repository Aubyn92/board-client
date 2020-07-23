import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { PostsContext } from '../../context/posts-context';
// import LoggedInNavbar from './LoggedInNavbar';
// import LoggedOutNavbar from './LoggedOutNavbar';

const NavBar = () => {
  const history = useHistory();
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token") != null) {
    return (
      <nav>
        <Link to="/">BOARD</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/create">Create Post</Link>
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
        <Link to="/posts">Posts</Link>
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
// class NavBar extends React.Component {
//   // static contextType = PostsContext

//   render() {
//     return (
//       <nav>
//         {this.context.currentUser || sessionStorage.getItem("auth") ? (
//           <LoggedInNavbar history={this.props.history} context={this.context} />
//         ) : (
//           <LoggedOutNavbar />
//         )}
//       </nav>
//     )
//   }
// };

export default NavBar;