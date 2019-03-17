import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import titleWebsiteLogoData from './titleWebsiteLogoData';
import SocialLogoGrid from './SocialLogoGrid.js';
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

class WebsiteLogoGrid extends Component {
  constructor(props){
    super(props)
    this.state = {
      classes: props,
      socialid: 0
    }
  }
  render() {
    //const { classes } = props;
    //let socialid = 1
    return (
      <div className={this.state.classes.root}>
      <h2>  Connected to website Brands</h2>
     <SocialLogoGrid social = {this.state.socialid}/>
        <GridList cellHeight={120} className={this.state.classes.gridList} cols={4}>
          {titleWebsiteLogoData.map(tile => (
            <GridListTile key={tile.id} cols={tile.cols || 1}>
             <a href='javascript:void(0)' onClick={() => {
                 this.setState({
                  socialid: tile.id
              });
              
               //alert(this.state.socialid)
             }}><img src={tile.img} alt={tile.title} style={{width: 150}} /></a>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

  

  WebsiteLogoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(WebsiteLogoGrid);
