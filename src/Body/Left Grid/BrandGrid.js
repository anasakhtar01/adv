import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileBrandData from './titleBrandData';
import { Link } from 'react-router-dom'
import './BrandGrid.css'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
      height: 330

    },
  });

  function BrandGrid(props) {
    const { classes } = props;
    const getGridListCols = () => {
      if (isWidthUp('xl', props.width)) {
        return 4;
      }
  
      if (isWidthUp('lg', props.width)) {
        return 3;
      }
  
      if (isWidthUp('md', props.width)) {
        return 2;
      }
      if (isWidthUp('sm', props.width)) {
        return 2;
      }
      if (isWidthUp('xs', props.width)) {
        return 1;
      }
  
      return 1;
    }
    
  
    return (
      <div className={classes.root}>
      <h2>Brands Icon for View</h2>
        <GridList cellHeight={160} className={classes.gridList} cols={getGridListCols}>
          {tileBrandData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
             <Link to={`/brandpage/${tile.title}`}> <img src={tile.img} alt={tile.title} style={{width: 340}} className="imagedropshadow" /></Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  BrandGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(BrandGrid);
