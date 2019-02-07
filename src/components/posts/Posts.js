// Packages
import React, { Component } from 'react';

// Components
import Post from './Post';
import PostsList from '../posts-list/PostsList'

// Resources, Styles
import posts from '../../db/posts.json';
import './index.css';

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

    const postsList =
      <div className="posts-list">
        { posts.map(post => {
            return(
              <PostsList
                key={post.id}
                title={post.title}
                avatar={post.image}
                createdAt={post.createdAt}
              />
            )
          })}
      </div>

    return(
      <div className="container">
        <span className="card">{postsCardList}</span>
        <span className="list">{postsList}</span>
      </div>
    );
  }
}

export default Posts;