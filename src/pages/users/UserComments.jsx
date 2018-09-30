import React, { Component } from 'react';
import { comments, users, posts } from '../api';
import { Card, CardTitle, CardText} from 'reactstrap';



class UserComments extends Component{

  getComments(value) {
    value = parseInt(value);
    let comments = this.props.getAppState('comments');
    let userComments = comments.filter((comment) => {
      return comment.postId === value;
    })
      return userComments;
  };

  getPosts(userId) {
    userId = parseInt(userId);
    let posts = this.props.getAppState('posts')
    let postsId = posts.filter((post) => {
      return post.userId === userId;
    })
      return postsId;
  }

  arr() {
    let postsId = this.getPosts(this.props.match.params.id);
    for(let i in postsId) {
      let userComments = this.getComments(postsId[i].id);
    }
  
  }
  
  render() {
    
    return(
    <p>{this.arr()}</p>
  );
  }
  
  
  
  
  
}

export default UserComments;