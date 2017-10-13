import React, { Component } from 'react';
import Slider from './Slider'
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <hr/>
        <Container>
          <Row>
            <Col>
              <h3 className="home-tri-sections">Service Hours</h3><br/>
              <p className="service-hours">
                English Service 12:30 PM<br/>
                Chinese Service 1:00 PM<br/>
                Korean Service 10:45 AM
              </p>
            </Col>
            <Col>
              <h3 className="home-tri-sections">Directions</h3><br/>
            </Col>
            <Col>
              <h3 className="home-tri-sections">Secont 3</h3><br/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
