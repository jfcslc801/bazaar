import React from "react";
import { Navbar, NavItem, Icon } from 'react-materialize';

const Nav = () => (
  <Navbar brand='logo' right>
    <NavItem href='https://www.google.com'><Icon>search</Icon></NavItem>
    <NavItem href='get-started.html'><i class="large material-icons">account_circle</i></NavItem>
    <NavItem href='get-started.html'><i class="large material-icons">location_on</i></NavItem>
  </Navbar>
);

export default Nav;
