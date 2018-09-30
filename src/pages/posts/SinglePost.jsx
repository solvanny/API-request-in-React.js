import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { getPostById, getUsers, getComments } from '../api';

class SinglePost extends Component {
  constructor() {
    super()
    this.state = {
      post:[],
      users:[],
      comments:[]
    }
  }

  // async getPost(id) {
  //   id = parseInt(id);
  //   let post = await getPostById(id);
  //   return post.data[id-1].body;
  // }
  
  getUser(id) {
    id = parseInt(id);
    let users = this.state.users;
    let userSearch = users.filter(user => {
      return user.id === id;
    })
    if (userSearch.length) {
      return userSearch[0];
    }
  }
  
  getComments(id) {
    id = parseInt(id);
    let comments = this.state.comments;
    let commentSearch = comments.filter(comment => {
      return comment.postId === id;
    })
    return commentSearch;
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    let addPost = await getPostById(id);
    let addUsers = await getUsers();
    let addComments = await getComments();
    this.setState({
      post: addPost.data,
      users:  addUsers.data,
      comments: addComments.data
    })
  }

  render() {
    let post = this.state.post;
    let posUsertId = post.map((post) => post.userId);
    let postId = post.map((post) => post.id);
   // let users = this.state.users;
    post.getUser = this.getUser(posUsertId);
    post.comments = this.getComments(postId);
    // let comments = this.state.comments;
    
    
    return(
      <Card body >
        <CardTitle >
          <b>Title:</b> {post.title} 
        </CardTitle>
        <CardText>
          {post.body}
        </CardText>
        <CardText>
          {/* <b>Autor:</b> {post.user.name}  */}
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