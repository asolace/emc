import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'

const Members = () =>
<div className="about-page">
  <img src="https://leads.perfectstormnow.com/image/site/458/partner-59c0095d730a2.gif" alt="site under construction"/><br/>
  <img src="http://www.exuberancesolutions.in/uc.gif" alt="under-construction"/>
</div>

const Events = () =>
<div className="about-page">
  <img src="https://leads.perfectstormnow.com/image/site/458/partner-59c0095d730a2.gif" alt="site under construction"/><br/>
  <img src="http://www.exuberancesolutions.in/uc.gif" alt="under-construction"/>
</div>

const Prayers = () =>
<div className="about-page">
  <img src="https://leads.perfectstormnow.com/image/site/458/partner-59c0095d730a2.gif" alt="site under construction"/><br/>
  <img src="http://www.exuberancesolutions.in/uc.gif" alt="under-construction"/>
</div>

const Photos = () =>
<div className="about-page">
  <img src="https://leads.perfectstormnow.com/image/site/458/partner-59c0095d730a2.gif" alt="site under construction"/><br/>
  <img src="http://www.exuberancesolutions.in/uc.gif" alt="under-construction"/>
</div>

const LocaTime = () =>
<div className="about-page">
  <img src="https://leads.perfectstormnow.com/image/site/458/partner-59c0095d730a2.gif" alt="site under construction"/><br/>
  <img src="http://www.exuberancesolutions.in/uc.gif" alt="under-construction"/>
</div>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-container">
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/members" component={ Members } />
            <Route path="/events" component={ Events } />
            <Route path="/prayers" component={ Prayers } />
            <Route path="/photos" component={ Photos } />
            <Route path="/location-time" component={ LocaTime } />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
