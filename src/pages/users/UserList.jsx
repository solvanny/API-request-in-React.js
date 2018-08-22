import React from 'react';
import User from './User';

const UserList = (props) => {
  let users = props.getAppState('users');
  return(
    users.map((user) => {
      return(
        <User key={user.id} user={user} />
      );
    })
  );
}

export default UserList;