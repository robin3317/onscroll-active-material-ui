// Packages
import React, { Component, Fragment } from 'react';

// Components
import Post from './Post';

// Resources, Styles
import posts from '../../db/posts.json';

class Posts extends Component {
  render() {
    const postsList = posts.map(post => {
      return(
        <Post
          key={post.id}
          title={post.title}
          subTitle={post.postDetails}
          img={post.image}
        />
      );
    });

    return <Fragment>{postsList}</Fragment>
  }
}

export default Posts;