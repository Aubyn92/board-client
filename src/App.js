import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/shared/NavBar";
import Posts from "./components/Posts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import CategoryPage from "./components/CategoryPage";
import ViewPost from "./components/ViewPost";
import EditPost from "./components/EditPost";
import ProtectedRoute from "./components/ProtectedRoute";
import NewPost from "./components/NewPost";
import NoMatch from "./components/NoMatch";
import { PostsContext, dispatch } from '../context/posts-context';

class App extends React.Component {
  state = { posts: [], dispatch: dispatch.bind(this) }

  render() {
    return (
      <PostsContext.Provider value={this.state}>
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <ProtectedRoute exact path={"/posts"} component={Posts} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <ProtectedRoute exact path="/posts/:id/userprofile" component={UserProfile} />
          <Route exact path="/posts/categorypage" component={CategoryPage} />
          <Route exact path="/posts/viewpost" component={ViewPost} />
          <ProtectedRoute exact path="/posts/:id/edit" component={EditPost} />
          <ProtectedRoute exact path="/posts/create" component={NewPost} />
          <Route component={NoMatch} />
        </Switch>
        </PostsContext.Provider>
    );
  }
}

export default App;
