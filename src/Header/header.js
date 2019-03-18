import React, { Component } from 'react'
import './header.css'
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom'
import hamburgerMenuPage from './Nav.js'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default class Header extends Component {
  render() {
    return (
      <div style={{height: 137,paddingBottom: 22}}>
        <div className="header" style={{  width: '100%'}}>
        <Grid container spacing={24}>
        <Grid item xs={4}>
        <img src="/assets/abc-logo.png" style={{width:400,padding: "2%",
    paddingLeft: "7%"}}></img>
        </Grid>
        <Grid item xs={8}>
        <Grid item xs={12} style={{paddingTop: 20}}>
        <img src="/assets/tagline.png"></img>
        </Grid>
        <Grid item xs={12} style={{paddingTop: 20}}>
        <div id="nav">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page">About Us</Link></li>
        <li><Link to="/page">Brands</Link></li>
        <li><a href="#">Grocery</a></li>
        
        <li><a href="#">Malls</a></li>
        <li><Link to="/page">Contact Us</Link></li>
      
    </ul>
</div>  
        </Grid>
        </Grid></Grid>
        {/* <div style={{float: "right", paddingRight: "13%"}}>
            <h3 style={{color: "white"}}>Saudia Arabia  </h3>
            <span><Clock style={{fontSize: '1.5em', color: "white"}}  format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} timezone={'Etc/GMT-3'} ticking={true} /></span>
            
        </div> */}
            {/* <div style={{height: 96}}>
                <img src="/assets/demo-logo.png" style={{width:262}}></img>
            </div> */}
        </div>
        {/* <hamburgerMenuPage /> */}
      
      </div>
    )
  }
}
