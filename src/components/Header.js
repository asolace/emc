import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="header">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <span className="emc-brand-blue">E</span>
            <span className="emc-brand-blue">M</span>
            <span className="emc-brand-blue">C</span>
            <span className="emc-title-blue"> | EBENEZER </span>
            <span className="emc-title-red">MISSION </span>
            <span className="emc-title-blue">CHURCH</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/service-times">Service Times</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">Directions</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
