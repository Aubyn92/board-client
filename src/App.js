import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/shared/NavBar";
import Posts from "./components/Posts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import CategoryPage from "./components/CategoryPage";
import ViewPost from "./components/ViewPost";
import EditPost from "/components/EditPost";
import NewPost from "./components/NewPost";
import NoMatch from "./components/NoMatch";
import ProtectedRoute from "./ProtectedRoute";
import Secrets from "./Secrets";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <ProtectedRoute exact path="/secrets" component={Secrets} />
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/posts/:id"} component={Posts} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/posts/:id/userprofile" component={UserProfile} />
          <Route exact path="/posts/categorypage" component={CategoryPage} />
          <Route exact path="/posts/viewpost" component={ViewPost} />
          <Route exact path="/posts/:id/edit" component={EditPost} />
          <Route exact path="/posts/create" component={NewPost} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
