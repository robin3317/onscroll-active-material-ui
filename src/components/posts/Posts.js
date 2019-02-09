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
    super(props);

    this.postRef = React.createRef();
    this.listRef = React.createRef();
  }

  componentDidMount() {
    // Initially first element of list will be highlighted
    this.listRef.current.childNodes[0].childNodes[0].style.borderLeft = '.1rem solid red';
    this.listRef.current.childNodes[0].childNodes[0].style.backgroundColor = 'rgba(255, 0, 0, .1)';
    this.postRef.current.addEventListener('load', this.selectList())
  }

  selectList = () => {
    // onscroll fires every time when scrolling
    onscroll = () => {

      let position;

      for(let i = 0; i < this.postRef.current.childNodes.length; i++) {
        position = this.postRef.current.childNodes[i].childNodes[0].childNodes[0].getBoundingClientRect().y;

        // According to card position, highlight the list
        if(position <= 246 && position > -104) {
          this.listRef.current.childNodes[0].childNodes[i].style.borderLeft = '.1rem solid red';
          this.listRef.current.childNodes[0].childNodes[i].style.backgroundColor = 'rgba(255, 0, 0, .1)';
        }else {
          this.listRef.current.childNodes[0].childNodes[i].style.borderLeft = '';
          this.listRef.current.childNodes[0].childNodes[i].style.backgroundColor = '';
        }
      }
    }
  }

  render() {
    const postsCardList = posts.map(post => {
      return(
        <div key={post.id}>
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
              />
            )
          })}
      </div>

    return(
      <div className="container">
        <span className="card" ref={this.postRef}>{postsCardList}</span>
        <span className="list" ref={this.listRef}>{postsList}</span>
      </div>
    );
  }
}

export default Posts;