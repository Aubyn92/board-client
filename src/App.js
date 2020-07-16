import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import EditPost from '/components/EditPost';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import NavBar from './components/shared/NavBar';
<<<<<<< HEAD
import ViewPost from './components/ViewPost';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import CategoryPage from './components/CategoryPage';
import NoMatch from './components/NoMatch';

=======
import SignUp from './components/Signup';
import UserProfile from './components/UserProfile';
import ViewPost from './components/ViewPost';
>>>>>>> c62c6316e18f41fc792b3edb721c814c58204a70


function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
<<<<<<< HEAD

     
=======
      <Route exact path={"/"} component ={HomePage} />
      <Route exact path={"/login"} component ={Login}/>
      <Route exact path={"/newpost"} component ={NewPost} />
      <Route exact path={"/posts/:id"} component ={Posts} />
>>>>>>> c62c6316e18f41fc792b3edb721c814c58204a70
      <Route exact path="/posts/:id/edit" component={EditPost} />
      <Route exact path="/posts/create" component={NewPost} />
      <Route exact path="/posts/:id" component ={Posts} />
      <Route exact path="/posts/:id/userprofile" component ={UserProfile} />
      <Route exact path="/posts/categorypage" component = {CategoryPage}/>
      <Route exact path="/login" component ={Login}/>
      <Route exact path="/signup" component ={SignUp}/>
      <Route exact path="/" component ={HomePage} />
      <Route exact path="/posts/viewpost" component ={ViewPost} />
      <Route component={NoMatch} />
    </BrowserRouter>
    </>
    );
  }
  
  export default App;

