import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import profilepic from '../photos/tempprofilepic.jpg'

class About extends Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="about-mission-statement-out-container">
          <h1 className="about-our-mission">Our Mission</h1>
          <div className="about-mission-statement-in-container">
            <p className="about-mission-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.
            </p>
          </div>
        </div>
        <h1 className="about-our-leaders">Our Leaders</h1>
        <div className="about-container">
          <Row className="about-container-rowA">
            <Col><img className="about-leader-images-left" src={profilepic}></img></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
          <Row className="about-container-rowA">
            <Col><img className="about-leader-images-left" src={profilepic}></img></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
          <Row className="about-container-rowA">
            <Col><img className="about-leader-images-left" src={profilepic}></img></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
          <Row className="about-container-rowA">
            <Col><img className="about-leader-images-left" src={profilepic}></img></Col>
            <Col><div className="about-leader-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst. Aliquam ut accumsan mauris. Duis et posuere magna. Fusce sed lacinia purus. Suspendisse tincidunt lobortis diam in efficitur. Praesent malesuada nisi pretium ante elementum, egestas vestibulum massa imperdiet. Nulla id sodales erat.</div></Col>
          </Row>
        </div>

        <h1 className="about-our-leaders">And the rest of our family!</h1>

        <img className="about-restofus" src={profilepic}></img>

      </div>
    )
  }
}

export default About
