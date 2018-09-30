import axios from 'axios';



export async function getPostById(id)
{
  let config = {
    params: {
      id: id
    }
  };

  return  axios.get('http://jsonplaceholder.typicode.com/posts', config);
  
  // if (responce.status === 200) {
  //    console.log(responce)
  //   return responce.data;
  // }
}


export async function getUsers() {
  let responce = await axios.get('http://jsonplaceholder.typicode.com/users');

  return responce.data;
};

export async function getPosts() {
  let responce = await axios.get('http://jsonplaceholder.typicode.com/posts');

  return responce.data;
};

export async function getComments() {
  return axios.get('http://jsonplaceholder.typicode.com/comments');
};

export async function getAlbums() {
  return axios.get('http://jsonplaceholder.typicode.com/albums');
};

export async function getPhotos() {
  return axios.get('http://jsonplaceholder.typicode.com/photos');
};
