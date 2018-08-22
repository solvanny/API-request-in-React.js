import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



export default (props) => {
  return (
    <Card body >
      <CardTitle >
        <b>Title:</b> {props.post.title}
      </CardTitle>
      <CardText>
        {props.post.body}
      </CardText>
      <CardText>
        <b>Autor:</b> {props.user.name}
      </CardText>
      <CardText>
        <Link to={`/post/${props.post.id}`} replace >
          <Button outline color="primary">
            See more
          </Button>
        </Link>
      </CardText>
    </Card>
  );
}

