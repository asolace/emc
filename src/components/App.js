import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './Home'
import Header from './Header'
import About from './About'
import ServiceTimes from './ServiceTimes'

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
