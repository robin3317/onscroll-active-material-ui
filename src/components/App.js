// Packages
import React, { Component, Fragment } from 'react';

// Components
import Header from './nav/Header';
import Posts from './posts/Posts';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Header title='BlogSite' />
        <Posts />
      </Fragment>
    );
  }
}

export default App;