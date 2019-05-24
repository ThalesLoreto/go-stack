/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import NavBar from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Thales Loreto',
        avatar:
          'https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.0-9/15241151_1392623674115088_6920924001925384140_n.jpg?_nc_cat=101&_nc_ht=scontent.fbsb9-1.fna&oh=29dad0f66c024009af02c5aec9bea53e&oe=5D9421FA',
        time: 'há 10 minutos',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sit amet lectus in dictum. Mauris odio leo, suscipit et justo eleifend, feugiat iaculis magna.',
      },
      {
        id: 2,
        name: 'Pedro Henrique Loures',
        avatar:
          'https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.0-9/24232625_1233629846781980_1730431972252626207_n.jpg?_nc_cat=108&_nc_ht=scontent.fbsb9-1.fna&oh=b3d59195bc7bd9cb5e81e83919ff9c16&oe=5D9F8CF8',
        time: 'há 12 minutos',
        body:
          'Iti malia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan sit amet lectus in dictum. Mauris odio leo, suscipit et justo eleifend, feugiat iaculis magna.',
      },
    ],
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <NavBar />
        <div className="post-container">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    );
  }
}
