import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">My Store</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/services/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resources/">Resources</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-us/">About US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact-us/">Contac Us</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}