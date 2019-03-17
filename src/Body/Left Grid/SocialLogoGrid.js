import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import titleSocialData from './titleSocialLogo';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1200,

    },
  });

  function SocialLogoGrid(props) {
      console.log("Social: " + props.social)
    const { classes } = props;
    let social1 = ''
    console.log(social1)
    social1 = titleSocialData.filter(function(social){ console.log(social.id); return social.id==props.social});
    console.log(social1)
  console.log(props)
    return (
      <div className={classes.root}>
      <GridList cellHeight={120} className={classes.gridList} cols={5}>
          {social1.map(tile => (
            <GridListTile key={props.social} cols={tile.cols || 1}>
              <a href='javascript:void(0)' onClick={() => {
                  console.log(tile)
                  alert(props.social)
  
             }}><img src={tile.img} alt={tile.title} style={{width: 105}} /></a>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  SocialLogoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SocialLogoGrid);
