import React from 'react';
import Album from './Album';
import { Col} from 'reactstrap';


 const AlbumList = (props) => {
   function getUser(userId) {
    let users = props.getAppState('users');
    let list = users.filter((user) => {
      return user.id === userId;
    });

  if (list.length) {
    return list[0];
  }
}
   let albums = props.getAppState('albums');
  return(
      albums.map((album) => {
        return(
          <Col >
            <Album key={album.id} album={album} user={getUser(album.userId)}/>
          </Col >
        );
      })
   
  );
}

export default AlbumList;