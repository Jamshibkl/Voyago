import React from 'react';
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './NavBar.css';
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar w-100 p-3 bg-transparent">
      <Container className='nav_container'>
        {/* <Link to='/'>  */}
        <Navbar.Brand className='logo' href="#home">VOYAGO</Navbar.Brand>
        {/* </Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav_links">
            {/* <Link to='/'> */}
            <Nav.Link href="Home" className="nav-link-with-space">Home</Nav.Link>
            {/* </Link> */}
            <NavDropdown title="Company" id="collapsible-nav-dropdown" className='dropdown-btn'>
              {/* <Link to='/about'> */}
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              {/* </Link> */}
              {/* <Link to='/working'> */}
              <NavDropdown.Item href="#action/3.2">
                How it Works
              </NavDropdown.Item>
              {/* </Link>
              <Link to='/team'> */}
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
              {/* </Link>
              <Link to='/service'> */}
              <NavDropdown.Item href="#action/3.3">Service Status</NavDropdown.Item>
              {/* </Link>
              <Link to='/privacy'> */}
              <NavDropdown.Item href="#action/3.3">Leagal and Privacy</NavDropdown.Item>
              {/* </Link> */}
            </NavDropdown>
            {/* <Link to='/safety'> */}
            <Nav.Link href="#features" className="nav-link-with-space">Safety</Nav.Link>
            {/* </Link> */}
            {/* <Link to='/contact'> */}
            <Nav.Link href="#features" className="nav-link-with-space">Contact</Nav.Link>
            {/* </Link> */}
          </Nav>
          
          <Nav className="ms-auto">
            <Nav.Link href="#deets" className="nav-link-with-space">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='signup-btn'>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
