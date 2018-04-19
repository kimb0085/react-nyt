import React {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";

class Header extends Component{
	 render() {
    // Using bootstrap-react for navbar
    
    return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="">NYT Scraper</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="">Scrape</NavItem>
        </Nav>
      </Navbar.Collapse>
      <div></div>
    </Navbar>
  );
  }
}

export default Header;