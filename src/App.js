import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopMenu from './menu/TopMenu';
import PostList from './pages/posts/PostList';
import AlbumList from './pages/albums/AlbumList';
import UserList from './pages/users/UserList';
import { CardGroup } from 'reactstrap';
import SinglePost from './pages/posts/SinglePost';
import Profile from './pages/users/Profile';
import UserAlbums from './pages/users/UserAlbums';
import UserComments from './pages/users/UserComments';
import UserPosts from './pages/users/UserPosts';
import { getPosts, getUsers, getComments, getAlbums, getPhotos } from './pages/api';
import Page  from './pagination/Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      comments: [],
      posts: [],
      albums: [],
      photos: [],
      error: null
    }
    this.getAppState = this.getAppState.bind(this);
    this.setAppState = this.setAppState.bind(this);
  }

  getAppState(name) {
    if (!name) {
      return this.state;
    }
    if (this.state[name] === undefined) {
      throw Error('Not existing state');
    }
    return this.state[name];
  }

  setAppState([partialState, callback]) {
      return this.setState(partialState, callback)
    }

  //   componentWillMount() {
  //     localStorage.getItem('users', 'posts', 'comments', 'photos', 'albums') && this.setState({
  //       users: JSON.parse(localStorage.getItem('users')),
  //       posts: JSON.parse(localStorage.getItem('posts')),
  //       comments: JSON.parse(localStorage.getItem('comments')),
  //       photos: JSON.parse(localStorage.getItem('photos')),
  //       albums: JSON.parse(localStorage.getItem('albums')),
  //       isLoading: false
  //     })
  //   }


  // async componentDidMount() {
  //   if(!localStorage.getItem('users', 'posts', 'comments', 'photos', 'albums')) {
  //     try {
  //       let addUsers = await getUsers();
  //       let addComments = await getComments();
  //       let addPosts = await getPosts();
  //       let addAlbums = await getAlbums();
  //       let addPhotos = await getPhotos();
  //       this.setState({
  //         users: addUsers.data,
  //         posts: addPosts.data,
  //         comments: addComments.data,
  //         photos: addPhotos.data,
  //         albums: addAlbums.data
  //       });
  //       localStorage.setItem('users', JSON.stringify(this.state.users));
  //       localStorage.setItem('posts', JSON.stringify(this.state.posts));
  //       localStorage.setItem('comments', JSON.stringify(this.state.comments));
  //       localStorage.setItem('photos', JSON.stringify(this.state.photos));
  //       localStorage.setItem('albums', JSON.stringify(this.state.albums));
  //       localStorage.setItem('callDate', Date.now());
  //     } catch(e) {
  //       this.setState({error: "API is down!!!"});
  //     };
  //   } else {
  //     console.log('Using data from localStorage!')
  //   }
      
  // }  

 

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <React.Fragment>
              <TopMenu />
              <PostList  {...this.props} getAppState={this.getAppState} setAppState={this.setAppState} />
              <Page />
            </React.Fragment>
          </Route>

          <Route path="/album-list" exact >
            <React.Fragment>
              <TopMenu />
              <CardGroup>
                <AlbumList {...this.props} getAppState={this.getAppState} setAppState={this.setAppState} />
              </CardGroup>
            </React.Fragment>
          </Route>

           <Route path="/user-list" exact >
            <React.Fragment>
              <TopMenu />
              <CardGroup>
                <UserList {...this.props} getAppState={this.getAppState} setAppState={this.setAppState} />
              </CardGroup>
            </React.Fragment>
          </Route>

           <Route path="/post/:id" exact render={(props) => (
            <React.Fragment>
              <TopMenu />
              <SinglePost {...props} getAppState={this.getAppState} setAppState={this.setAppState} />
            </React.Fragment>
          )} />
          
          <Route path="/profile/:id" exact render={(props) => (
            <React.Fragment>
              <TopMenu />
              <Profile {...props} getAppState={this.getAppState} setAppState={this.setAppState} />
            </React.Fragment>
          )} />

          <Route path="/comments/:id" exact render={(props) => (
            <React.Fragment>
              <TopMenu />
              <UserComments {...props} getAppState={this.getAppState} setAppState={this.setAppState} />
            </React.Fragment>
          )} />
          <Route path="/posts/:id" exact render={(props) => (
            <React.Fragment>
              <TopMenu />
              <UserPosts {...props} getAppState={this.getAppState} setAppState={this.setAppState} />
            </React.Fragment>
          )} />
          <Route path="/albums/:id" exact render={(props) => (
            <React.Fragment>
              <TopMenu />
              <UserAlbums {...props} getAppState={this.getAppState} setAppState={this.setAppState} />
            </React.Fragment>
          )} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
