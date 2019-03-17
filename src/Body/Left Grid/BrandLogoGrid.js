import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import titleBrandLogoData from './titleBrandLogoData';
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

  function BrandLogoGrid(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
      <h2>Brands Logo Represents in KSA.</h2>
        <GridList cellHeight={160} className={classes.gridList} cols={6}>
          {titleBrandLogoData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
             <Link to={`/brand/${tile.id}`}> <img src={tile.img} alt={tile.title} style={{width: 215}} /></Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  BrandLogoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(BrandLogoGrid);
