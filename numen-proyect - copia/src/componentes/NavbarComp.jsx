import React, { Component } from 'react'
// import { Navbar,Nav, NavDropdown, Form, FormControl,Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../stylesheets/NavbarComp.css"


export default class NavbarComp extends Component {
  render() {
    return (
      <div >
        
{/* function CollapsibleExample() {  */
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" > WHITE WOLF </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Ocassions</Nav.Link>
            <Nav.Link href="#pricing">All Categories</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Users</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {/* Dank memes */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    }
   
</div>
)
}
}

;

// export default CollapsibleExample;
    
