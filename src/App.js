import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CategoryPage from '/components/CategoryPage';
import EditPost from '/components/EditPost';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NewPost from './components/NewPost';
import NoMatch from './components/NoMatch';
import Posts from './components/Posts';
<<<<<<< HEAD
import NavBar from './components/shared/NavBar';


=======
import SignUp from './components/Signup';
import UserProfile from './components/UserProfile';
import ViewPost from './components/ViewPost';
>>>>>>> ae155abcbbc33cbf185249f5304f1c76352c592d

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
<<<<<<< HEAD
      <Route exact path={"/"} component ={HomePage} />
      <Route exact path={"/login"} component ={Login}/>
      <Route exact path={"//newpost"} component ={NewPost} />
      <Route exact path={"/posts/:id"} component ={Posts} />
      {/* <Route exact path={"/"} component ={} /> */}
=======
      <Route exact path="/posts/:id/edit" component={EditPost} />
      <Route exact path="/posts/create" component={NewPost} />
      <Route exact path="/posts/:id" component ={Posts} />
      <Route exact path="/posts/:id/userprofile" component ={UserProfile} />
      <Route exact path="/posts/categorypage" component ={CategoryPage} />
      <Route exact path="/login" component ={Login}/>
      <Route exact path="/signup" component ={Signup}/>
      <Route exact path="/" component ={HomePage} />
      <Route exact path="/posts/viewpost" component ={ViewPost} />
      <Route component={NoMatch} />
>>>>>>> ae155abcbbc33cbf185249f5304f1c76352c592d
    </BrowserRouter>
    </>
    );
  }
  
  export default App;

