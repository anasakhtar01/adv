import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './titleData';
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

  function LeftGrid(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={6}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
             <Link to={`/brand/${tile.id}`}> <img src={tile.img} alt={tile.title} style={{width: 188}} /></Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

LeftGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(LeftGrid);
