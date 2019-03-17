import React, { Component } from 'react';
import logo from './logo.svg';

import Header from "./Header/header.js"
import Home from "./Body/Home"
import Main from './Main.js'




class App extends Component {
  render() {
    
    return (
      <div className="App">
       <Header />
      <Main />
      </div>
    );
  }
}

export default App;
