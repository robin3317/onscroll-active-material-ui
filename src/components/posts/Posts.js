// Packages
import React, { Component, Fragment } from 'react';

// Components
import Post from './Post';
import PostsList from '../posts-list/PostsList'

// Resources, Styles
import posts from '../../db/posts.json';
import './Post.css';

class Posts extends Component {
  render() {
    const postsCardList = posts.map(post => {
      return(
        <Post
          key={post.id}
          title={post.title}
          subTitle={post.postDetails}
          img={post.image}
        />
      );
    });

    const postsList = posts.map(post => {
      return(
        <PostsList
          key={post.id}
          title={post.title}
          avatar={post.image}
          createdAt={post.createdAt}
        />
      )
    });

    return(
      <div className="container">
        <span className="card">{postsCardList}</span>
        <span className="list">{postsList}</span>
      </div>
    );
  }
}

export default Posts;