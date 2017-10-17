import React, { Component } from 'react';
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import FaClock from 'react-icons/lib/fa/clock-o'

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
              <h3 className="home-tri-section-header">Directions</h3><br/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
