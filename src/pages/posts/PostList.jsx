import React, { Component } from 'react';
import Post from './Post';
import { getPosts, getUsers} from '../api';

async function getPostsData() {
  let posts = localStorage.getItem('posts');
  if(!posts) {
    posts = await getPosts();
    localStorage.setItem('posts', JSON.stringify(posts));
  } else {
    posts = JSON.parse(posts);
  }
  return posts;
}

async function getUsersData() {
  let users = localStorage.getItem('users');
  if (!users) {
    users = await getUsers();
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    users = JSON.parse(users);

  }
  return users;
}

class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      posts: []
    }
  }

  componentWillMount() {
    this.setState((state, props) => {
      return {
        users: getUsersData(),
        posts: getPostsData()
      };
    });
  }
  

  getUser(userId) {
    let users = this.state.users;
    console.log(users)
    let list = users.filter( user => {
      return user.id === userId;
    });
    if (list.length) {
      return list[0];
    }
  }

  getStatePosts() {
    let posts = this.state.posts
    return posts;
  }
  
  render() {
     const posts = this.getStatePosts();
     console.log(posts)
    return(
      posts.map((post) => {
        return(
          <Post key={post.id} post={post} user={this.getUser(post.userId)} />
        );
      }) 
    )
  };
}

export default PostList;