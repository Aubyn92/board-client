import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import EditPost from '/components/EditPost';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import NavBar from './components/shared/NavBar';
import ViewPost from './components/ViewPost';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import CategoryPage from './components/CategoryPage';
import NoMatch from './components/NoMatch';



function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>

     
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

