import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const User = (props) => {
  return (
    <div>
      <Card style={{width:360}}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.user.name}</CardTitle>
          <CardSubtitle><b>E-mail:</b> {props.user.email}</CardSubtitle>
          
          <CardText><b>Company:</b> {props.user.company.name}</CardText>
          <CardText><b>Web Site:</b> {props.user.website}</CardText>

          <Link to={`/profile/${props.user.id}`} replace >
            <Button outline color="primary">
              See Details
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default User;