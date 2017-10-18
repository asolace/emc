import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import PhotoAlbum from './components/PhotoAlbum'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-container">
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/photos" component={ PhotoAlbum } />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
