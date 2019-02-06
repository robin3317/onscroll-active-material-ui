// Packages
import React, { Component } from 'react';

// Material components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Styles
import './posts.css';

class Posts extends Component {
  render() {
    return(
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Image Name"
            height="120"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/2000px-Facebook_New_Logo_%282015%29.svg.png"
            title="title"
          />
          <CardContent>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Posts;