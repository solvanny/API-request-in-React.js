import React from 'react';
import User from './User';
import {getUsers} from '../api';

async function getApiUsers()
{
  let users = await getUsers();

  return users;
}

const UserList = (props) => {
  let users = getApiUsers();
  return(
    users.map((user) => {
      return(
        <User key={user.id} user={user} />
      );
    })
  );
}

export default UserList;