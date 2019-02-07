// Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Resources, Styles
import './index.css';

class Post extends Component {
  constructor(props) {
    super(props);

    this.postRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.postRef.current);
  }

  render() {
    return(
      <div ref={this.postRef}>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={this.props.title}
              height="140"
              image={this.props.img}
              title={this.props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography component="p">
                {this.props.subTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">Share</Button>
              <Button size="small" color="primary">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Post.defaultProps = {
  title: "Image Title",
  subTitle: "Description goes here...",
}

Post.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default Post;