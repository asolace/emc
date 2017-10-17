import React, { Component } from 'react';
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import Gmaps from './Gmaps'
import FaClock from 'react-icons/lib/fa/clock-o'
import FaMapMarker from 'react-icons/lib/fa/map-marker'

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <hr/>
        <div className="container">
          <h3 className="home-header">Friends and Family Devoted to Christ!</h3><br/>
          <p className="home-text">
            Ebenezer Mission Church is a missional church.
            We believe in Jesus Christ as our Lord and savior! We believe that fellowship, service, and worship are vital for spiritual growth. Therefore we strive to get together as much as possible to learn and grow through the Bible which is the inspire word of God given to man and is useful for teaching, rebuking, correcting and training in righteousness.

          </p>
        </div>
        <Container className="section-container">
          <Row>
            <Col>

              <Link to="/service-times">
                <h3 className="home-tri-section-header">Time <span className="section-icon"><FaClock/></span></h3>
              </Link>
              <div className="home-tri-section-content">
                <h4 className="sunday-time">Sunday</h4>
                <p>
                  English 12:30 PM<br/>
                  Chinese 1:00 PM<br/>
                  Korean 10:45 AM
                </p>
              </div>
            </Col>
            <Col>
              <Link to="/about">
                <h3 className="home-tri-section-header">Directions <span className="section-icon"><FaMapMarker/></span></h3>
              </Link>
              <div className="home-tri-section-content">
                <h4 className="direction-emc">Ebenezer Mission</h4>
                <h2 className="direction-emc">Church</h2>
                <p>
                  22016 Union Tpke,<br/> Oakland Gardens, NY 11364
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Gmaps
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYjYt7PpDffRruRe3nHn85J0vVdcx-V3g&v3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
