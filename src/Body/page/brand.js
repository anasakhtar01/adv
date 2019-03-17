import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Store from '@material-ui/icons/Store';
import PlayArrow from '@material-ui/icons/PlayArrow';
import MoneyOff from '@material-ui/icons/MoneyOff';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import tileData from '../Left Grid/titleData';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

export default class brand extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
 
    const { value } = this.state;
    const { params } = this.props.match
    console.log(tileData[0].title)
    return (
      <div>
        <Grid container spacing={10}>
        <Grid item lg={6} xs={10}><img src="/assets/Picture1.png"></img></Grid>
         <Grid item lg={6} xs={10}><img src="/assets/Picture2.jpg" style={{width: 674}}></img></Grid>
         </Grid>
        <AppBar position="static" color="default" style={{width: '90%', marginLeft: '2%'}}>
          <Tabs value={value} onChange={this.handleChange} indicatorColor="primary"
            textColor="primary" 
            variant="scrollable"
            scrollButtons="on">
            <Tab label="Store" icon={<Store />} />
            <Tab label="TVC's" icon={<PlayArrow />} />
            <Tab label="Discounts" icon={<MoneyOff />} />
            <Tab label="Item Four" icon={<HelpIcon />} />
            <Tab label="Item Five" icon={<ShoppingBasket />} />
            <Tab label="Item Six" icon={<ThumbDown />} />
            <Tab label="Item Seven" icon={<ThumbUp />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><img src='/assets/Abdulsamad.jpg' style={{width: 1300}}></img></TabContainer>}
        {value === 1 && <TabContainer>TVC</TabContainer>}
        {value === 2 && <TabContainer>Discounts</TabContainer>}
              {value === 3 && <TabContainer>Item Four</TabContainer>}
              {value === 4 && <TabContainer>Item Five</TabContainer>}
              {value === 5 && <TabContainer>Item Six</TabContainer>}
              {value === 6 && <TabContainer>Item Seven</TabContainer>}
        
      </div>
    )
  }
}
