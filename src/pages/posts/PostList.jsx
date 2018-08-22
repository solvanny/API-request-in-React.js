import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {

  getUser(userId) {
  let users = this.props.getAppState('users');
  let list = users.filter( user => {
    return user.id === userId;
  });
    if (list.length) {
      return list[0];
    }
  }

  
  render() {
    const posts = this.props.getAppState('posts');

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