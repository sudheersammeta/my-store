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

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md">
            <Nav style={{'height': '100vh'}} vertical navbar>
              <NavItem>
                <NavLink href="/dashboard/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/inventory/">Inventory</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sales/">Sales Orders</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/payments/">Payments</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}