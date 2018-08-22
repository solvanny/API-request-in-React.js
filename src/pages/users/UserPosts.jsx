import React from 'react';
import { Card, CardTitle, CardText} from 'reactstrap';

async function getUserPosts(id) {
  let posts = this.props.setAppState(posts);
  id = parseInt(id);
  let userPosts = posts.filter((post) => {
    return post.userId === id;
  })
  return userPosts;
};

function getAutor(id) {
  id = parseInt(id);
  let users = this.props.getAppState('users');
  let user = users.filter((user) => {
    return user.id === id;
  })
  return user;
}



function getComments(id) {
  id = parseInt(id);
  let comments = this.props.getAppState('comments');
  let commentsId = comments.filter((comment) => {
    return comment.postId === id;
  })
  return commentsId;
}

const UserPosts = (props) => {
  let userPosts = getUserPosts(props.match.params.id);
  userPosts.autor = getAutor(props.match.params.id);
  userPosts.autorName = userPosts.autor.map((autor) => {return autor.name});
  userPosts.comments = getComments(userPosts.id);
  console.log(props.match.params.id)
  return(
    userPosts.map((post) => {
      return(
        <Card body >
          <CardTitle >
            <b>Title:</b> {post.title}
          </CardTitle>
          <CardText>{post.body}</CardText>
          <CardText><b>Autor: </b>{userPosts.autorName} </CardText>

            <Card body >
              <CardTitle >
                <b>Title:</b> {post.title}
              </CardTitle>
              <CardText>{post.body}</CardText>
              <CardText><b>Autor: </b>{userPosts.autorName} </CardText>
            </Card>

        </Card>
      )
    })
  );
}

export default UserPosts;