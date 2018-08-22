import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClick() {
    localStorage.clear();
  }

  render() {
    return (
        <Navbar color="primary" light expand="md">
          <NavbarBrand tag={Link} to="/">My Blog</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav color="light" className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/" >Posts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/album-list">Albums</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/user-list">Users</NavLink>
              </NavItem>
              <NavItem >
                <NavLink tag={Link} to="#" onClick={this.onClick}>Clear</NavLink>
              </NavItem>
            </Nav> 
          </Collapse>
        </Navbar>
    );
  }
}