// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = props => {
  return(
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  title: 'Brand Name'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;