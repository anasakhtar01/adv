import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Body/Home.js'
import page from './Body/page/page.js'
import brand from './Body/page/brand.js'
import brandpage from './Body/page/brandpage.js';
import grocerypage from './Body/page/grocerypage.js';

export default class Main extends Component {
  render() {
    return (
      <div>
           <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/page' component={page} />
      <Route path='/brandpage/:number' component={brandpage} />
      <Route path='/grocerypage/:number' component={grocerypage} />
    </Switch>
        
      </div>
    )
  }
}


