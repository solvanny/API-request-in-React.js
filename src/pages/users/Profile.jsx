import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';




class Profile extends Component {
  getUser(id) {
    id = parseInt(id);
    let users = this.props.getAppState('users');
    let userSearch = users.filter((user) => {
      return user.id === id
    });
    if(userSearch.length)
    return userSearch[0];
  }
  render() {
    let user = this.getUser(this.props.match.params.id);

    return(
      <Card>
        <CardBody>
          <CardTitle>
          <b>Name:</b> {user.name}
          </CardTitle>
          <CardSubtitle>
          <b>Username:</b> {user.username}
          </CardSubtitle>
          <CardText>
          <b>E-mail:</b> {user.email}
          </CardText>
          <CardText>
          <b>Phone number:</b> {user.phone}
          </CardText>
          <CardText>
          <b>Web Site:</b> {user.website}
          </CardText>
          <CardText>
          <p>Address:</p> 
          <b>Street:</b> {user.address.street}<br/>
          <b>Suite:</b> {user.address.suite}<br/>
          <b>City:</b> {user.address.city}<br/>
          <b>Zip Code:</b> {user.address.zipcode}<br/>
          </CardText>
          <CardText>
         <p> Work situation: </p>
          <b>Company name:</b> {user.company.name}<br/>
          <b>Company ocupation:</b> {user.company.catchPhrase}<br/>
          <b>Work position:</b> {user.company.name}<br/>
          </CardText>
        </CardBody>
        <CardBody>
          
        <Link to={`/comments/${user.id}`} replace style={{marginRight: '10px'}}>
          <Button outline color="primary">
            See comments
          </Button>
        </Link>

        <Link to={`/posts/${user.id}`} replace style={{marginRight: '10px'}}>
          <Button outline color="primary">
            See posts
          </Button>
        </Link>

        <Link to={`/albums/${user.id}`} replace >
          <Button outline color="primary">
            See albums
          </Button>
        </Link>
        </CardBody>
      </Card>
    );
  };

  
}

export default Profile;