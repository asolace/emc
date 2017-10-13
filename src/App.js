import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './components/home'
import Header from './components/header'
import About from './components/about'
import ServiceTimes from './components/serviceTimes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/service-times" component={ ServiceTimes } />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
