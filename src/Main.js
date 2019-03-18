import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Body/Home.js'
import page from './Body/page/page.js'
import brand from './Body/page/brand.js'
import brandpage from './Body/page/brandpage.js';
import grocerypage from './Body/page/grocerypage.js';
import mallpage from './Body/page/mallpage.js';

export default class Main extends Component {
  render() {
    return (
      <div>
           <Switch>
      <Route exact path='/adv/' component={Home}/>
      <Route path='/adv/page' component={page} />
      <Route path='/adv/brandpage/:number' component={brandpage} />
      <Route path='/adv/grocerypage/:number' component={grocerypage} />
      <Route path='/adv/mallpage/:number' component={mallpage} />
    </Switch>
        
      </div>
    )
  }
}


