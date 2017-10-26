import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import grouppic from '../photos/people/IMG_0582.JPG';
import profilepic from '../photos/tempprofilepic.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="about-mission-container">
          <h1 className="about-mission-header">Our Mission</h1>
          <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
            <p className="about-mission-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec nec dui et enim commodo facilisis id in magna.
            Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu.
            Aenean et diam egestas, vestibulum orci sodales, tristique odio.
            Aliquam quis varius quam, ultrices euismod ipsum.
            Integer gravida iaculis mauris ac tristique.
            </p>
          </ScrollAnimation>
        </div>

        <br /><br /><br /><br />
        <hr />

        <h1 className="about-our-leaders">Our Leaders</h1>
        <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
          <div className="about-container">
            <Row className="about-container-row">
              <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
              <Col><div className="about-leader-text"><h2>Pastor Jae Lee</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst.</div></Col>
            </Row>
            <Row className="about-container-row">
              <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
              <Col><div className="about-leader-text"><h2>Pastor Pio Lee</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst.</div></Col>
            </Row>
            <Row className="about-container-row">
              <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
              <Col><div className="about-leader-text"><h2>Pastor Enrique Pinero</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst.</div></Col>
            </Row>
            <Row className="about-container-row">
              <Col><div className="about-leader-image-container"><img className="about-leader-image" src={profilepic}></img></div></Col>
              <Col><div className="about-leader-text"><h2>Dr. Soo-Il Lee</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dui et enim commodo facilisis id in magna. Nam ullamcorper nulla nunc, quis maximus lacus consectetur eu. Aenean et diam egestas, vestibulum orci sodales, tristique odio. Aliquam quis varius quam, ultrices euismod ipsum. Integer gravida iaculis mauris ac tristique. Donec semper, mauris eget hendrerit ornare, sapien quam gravida odio, a tincidunt purus ante in ligula. In hac  habitasse platea dictumst.</div></Col>
            </Row>
          </div>
        </ScrollAnimation>

        <hr />

        <h1 className="about-our-leaders">Our Deacons</h1>
        <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
          <div className="about-deacon-container">
            <Row className="about-deacon-row">
              <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Lulu Lim</h2></Col>
                <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Mimi Ahn</h2></Col>
              <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Kay Choi</h2></Col>
              <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Arlene Macaraeg</h2></Col>
            </Row>
            <Row className="about-deacon-row">
              <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Nilsa Morales</h2></Col>
              <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Jason Park</h2></Col>
              <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Daniel Hsin</h2></Col>
              <Col><div className="about-deacon-image-container"><img className="about-deacon-image" src={profilepic}></img></div><h2 className="about-deacon-name">Virgil Macaraeg</h2></Col>
            </Row>
          </div>
        </ScrollAnimation>

        <hr />

        <h1 className="about-restofus-header">And the rest of our family!</h1>

        <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
          <div className="about-restofus-frame">
            <img className="about-restofus-image" src={grouppic}></img>
          </div>
        </ScrollAnimation>
        <br/><br/><br/><br/>

      </div>
    )
  }
}

export default About
