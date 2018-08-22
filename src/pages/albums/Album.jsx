import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody} from 'reactstrap';

  
export default (props) => {
  return(
    <Card  style={{width:340}}>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.album.title}</CardTitle>
        <CardText><b>Autor:{props.user.name}</b> </CardText>
        <Button color="primary" >Button</Button>{' '}
      </CardBody>
    </Card>
  );
}