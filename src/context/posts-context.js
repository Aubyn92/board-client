import React from 'react'

function dispatch(action, value) {
  switch(action) {
    case "populate":
      this.setState( { posts: value.posts, currentUser: value.currentUser } )
      break;
    case "add":
      this.setState((state) => {
        return { posts: [...state.posts, value] }
      })
      break;
    case "delete": 
      this.setState((state) => {
        const posts = state.posts.filter((post) => {
          return post.id !== value
        })
        return {
          posts: posts
        }
      })
      break;
    case "update": 
      this.setState((state) => {
        const posts = state.posts.map((posts) => {
          if (value.id === post.id) {
            return value
          } else {
            return post
          }
        })
        return {
          posts: posts
        }
      })
      break;
    case "logout": 
      this.setState({ currentUser: false, posts: [] })
      break;
    case "current user":
      this.setState({ currentUser: value })
      break;
    default: 
      console.log("in posts")
  }
}

const PostsContext = React.createContext({
  posts: [],
  dispatch: () => {},
  currentUser: false
})

export {
  PostsContext,
  dispatch
}