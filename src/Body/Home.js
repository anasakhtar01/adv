import React, { Component } from 'react'
import LeftGrid from "./Left Grid/LeftGrid.js"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeGrid from './HomeGrid/HomeGrid.js';
import SliderC from './Carousel.js'
import BrandGrid from './Left Grid/BrandGrid.js';
import GroceryGrid from './Left Grid/GroceryGrid.js';
import BrandLogoGrid from './Left Grid/BrandLogoGrid.js';
import WebsiteLogoGrid from './Left Grid/WebsiteLogoGrid.js';
import ramadan from './RamadanData.js'
import MallGrid from './Left Grid/MallGrid.js';
import Ads1 from './ads/ads1'
import Ads2 from './ads/ads2'
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

export default class Home extends Component {
  constructor(props){
    super(props)

    this.ramadanimg = ramadan
    this.state = { backgroundIndex: 0, animDuration: 1 }
    this.changeBackground = this.changeBackground.bind(this)
  }

  componentDidMount(){
    this.timeout = setTimeout(
      this.changeBackground,
      this.state.animDuration * 3000
    )
  }

  componentWillUnmount(){
    if (this.timeout) clearTimeout(this.timeout)
    // clearInterval(this.timer);
   }

   changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.ramadanimg.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        this.state.animDuration * 3000
      )
    })
  }

  render() {
    return (
      <div>
         <Grid container spacing={7}>
         <Grid item lg={9} xs={12} style={{padding:20, paddingTop:3, paddingBottom: 16}}>
         <SliderC />
         </Grid>
         <Grid item lg={3} xs={12} style={{paddingTop: 10}}>
         <Grid item lg={12} ><div>
        <img src={ this.ramadanimg[this.state.backgroundIndex] } width="335px"/>
        </div></Grid>
         <Grid item lg={12} style={{ textAlign:"center"}}><span style={{fontSize: 30, fontFamily: "Aharoni", fontStyle: "italic"}}>Ramadan Offers</span><br /><span style={{fontSize: 33, fontFamily: "Adobe Fan Heiti Std -WEBKIT-BODY", fontStyle: "italic"}}>1439/2019</span></Grid>
         
         
         
         
         </Grid>
         {/* <Grid item lg={12} xs={12}>
         <img src="./assets/Best.png" style={{padding: 20, paddingLeft: 100}}></img>
         
         </Grid> */}
         
         
       {/* <Grid item xs={7}><HomeGrid /></Grid> */}
       <Grid item lg={6} xs={12}><Ads1 /></Grid>
         <Grid item lg={6} xs={12}><Ads2 /></Grid>
        <Grid item lg={12} xs={12}>
        <BrandGrid />
        </Grid>
        <Grid item lg={6} xs={12}><Ads1 /></Grid>
         <Grid item lg={6} xs={12}><Ads2 /></Grid>
        {/* <Grid item xs={12}>
        <BrandLogoGrid />
        </Grid> */}

<Grid item xs={12}>
        <MallGrid />
        </Grid>
        <Grid item lg={6} xs={12}><Ads1 /></Grid>
         <Grid item lg={6} xs={12}><Ads2 /></Grid>
        
        <Grid item xs={12}>
        <GroceryGrid />
        </Grid>
        
        <Grid item lg={6} xs={12}><Ads1 /></Grid>
         <Grid item lg={6} xs={12}><Ads2 /></Grid>
        </Grid>
      </div>
    )
  }
}
