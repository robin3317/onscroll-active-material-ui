// Packages
import React, { Component } from 'react';
// Components
import Post from './Post';
import PostsList from '../posts-list/PostsList'

// Resources, Styles
import posts from '../../db/posts.json';
import './index.css';

class Posts extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current);
  }

  render() {
    const postsCardList = posts.map(post => {
      return(
        <div ref={this.myRef} key={post.id}>
          <Post
            title={post.title}
            subTitle={post.postDetails}
            img={post.image}
          />
        </div>
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
                selected={false}
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