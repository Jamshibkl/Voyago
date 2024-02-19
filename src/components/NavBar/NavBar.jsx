import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./NavBar.css";
function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar_section"
      id="nav-bar-section"
    >
      <Container className="nav_container">
        <Navbar.Brand className="logo">VOYAGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav_links">
            <Nav.Link as={Link} to="/" className="nav-link-with-space">
              Home
            </Nav.Link>
            <NavDropdown
              title="Company"
              id="collapsible-nav-dropdown"
              className="dropdown-btn"
            >
              <NavDropdown.Item
                as={Link}
                to="/about-us"
                className="dropdown-items"
              >
                About us
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/how-it-works"
                className="dropdown-items"
              >
                How it Works
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/our-team"
                className="dropdown-items"
              >
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/become-a-driver"
                className="dropdown-items"
              >
                Become a Driver
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/service-status"
                className="dropdown-items"
              >
                Service Status
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/leagal-privacy"
                className="dropdown-items"
              >
                Legal and Privacy
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/book-a-driver"
                className="dropdown-items"
              >
                Book a Driver
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/safety" className="nav-link-with-space">
              Safety
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-with-space">
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/sign-in" className="nav-link-with-space">
              Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/sign-up"
              eventKey={2}
              className="signup-btn"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
