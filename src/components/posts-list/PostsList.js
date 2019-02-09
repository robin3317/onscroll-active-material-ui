// Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class PostsList extends Component {

  render() {
    const { title, avatar, createdAt } = this.props;
    return(
      <List>
        <ListItem alignItems="flex-start" button>
          <ListItemAvatar>
            <Avatar alt={title} src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
                <Typography component="span" color="textPrimary">
                  {createdAt}
                </Typography>
            }
          />
        </ListItem>
      </List>
    )
  }
}

PostsList.defaultProps = {
  title: "Image Title"
}

PostsList.propTypes = {
  title: PropTypes.string
}

export default PostsList;