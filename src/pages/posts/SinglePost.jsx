import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { getPosts, getUsers, getComments } from '../api';

class SinglePost extends Component {

  getPost(id) {
    id = parseInt(id);
    let posts = this.props.getAppState('posts');
    let post = posts.filter(post => {
      return post.id === id;
    })
    if (post.length) {
      return post[0];
    }
    
  }
  
  getUser(id) {
    id = parseInt(id);
    let users = this.props.getAppState('users');
    let userSearch = users.filter(user => {
      return user.id === id;
    })
    if (userSearch.length) {
      return userSearch[0];
    }
  }
  
  getComments(id) {
    id = parseInt(id);
    let comments = this.props.getAppState('comments');
    let commentSearch = comments.filter(comment => {
      return comment.postId === id;
    })
    return commentSearch;
  }

  

  render() {
    let post = this.getPost(this.props.match.params.id);
    post.user = this.getUser(post.userId);
    post.comments = this.getComments(post.id);
    
    return(
      <Card body >
        <CardTitle >
          <b>Title:</b> {post.title} 
        </CardTitle>
        <CardText>
          {post.body}
        </CardText>
        <CardText>
          <b>Autor:</b> {post.user.name} 
        </CardText>
        <p className="text-primary"><b>Comments:</b></p>
          {post.comments.map((comment) => {
            return(
              <Card body >
              <CardTitle >
                <b>Name:</b> {comment.name} 
              </CardTitle>
              <CardText>
                <b>E-mail:</b> {comment.email}
              </CardText>
              <CardText>{comment.body}</CardText> 
            </Card>
            );
          })}
      </Card>
    );
  }
}

export default SinglePost;