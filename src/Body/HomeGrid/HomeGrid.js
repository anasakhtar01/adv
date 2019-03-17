import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './titleData';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 600,

    },
  });

  function HomeGrid(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <img src="./assets/Homepic.png" style={{width: 700, paddingLeft:50}}></img>
        </Grid>
        </Grid>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

HomeGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(HomeGrid);
