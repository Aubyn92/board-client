import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import NavBar from './components/shared/NavBar';



function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Route exact path={"/"} component ={HomePage} />
      <Route exact path={"/login"} component ={Login}/>
      <Route exact path={"//newpost"} component ={NewPost} />
      <Route exact path={"/posts/:id"} component ={Posts} />
      {/* <Route exact path={"/"} component ={} /> */}
    </BrowserRouter>
    </>
    );
  }
  
  export default App;

