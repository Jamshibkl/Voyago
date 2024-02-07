import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CarAnimate from "../../Assets/Car driving-rafiki (2).svg";
import Feature from "../../components/Features/Feature";
import HomeBanner from "../../components/banner/HomeBanner";
import Review from "../../components/Review/Review";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
function Home() {
  return (
    <>
      {/* Header */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar w-100 p-2 bg-transparent">
        <Container className="nav_container">
          <Navbar.Brand className="logo" href="#home">
            VOYAGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_links">
              <Nav.Link href="Home" className="nav-link-with-space">
                Home
              </Nav.Link>
              <NavDropdown
                title="Company"
                id="collapsible-nav-dropdown"
                className="dropdown-btn">
                <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  How it Works
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Service Status
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Leagal and Privacy
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features" className="nav-link-with-space">
                Safety
              </Nav.Link>
              <Nav.Link href="#features" className="nav-link-with-space">
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <Nav.Link
                href="#deets"
                className="nav-link-with-space text-light">
                Login
              </Nav.Link>
              <Nav.Link eventKey={2} href="" className="signup-btn">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header section */}

      {/* Main  section */}
      <section className="main_section">
        <div className="main_left">
          <h1>
            {" "}
            Get Skillful Drivers,
            <br />
            On-Demand
          </h1>
          <p>
            Voyago transforms the way you travel. Bringing skillful drivers to
            your doorstep, we make owning a car a pleasure.
          </p>
          <button className="main_btn">Book a Driver</button>
        </div>
        <div className="main-right">
          <div className="main_container">
            <img src={CarAnimate} alt="" className="car_avtar" />
          </div>
        </div>
      </section>
      {/* feture section */}
      <section className="feature_section">
        <h1 className="feature_heading">Features</h1>
        <h1 className="feature_sub_heading">
          Experience the Benefits of Voyago
        </h1>
        <p className="feature_qoute">
          Discover the features that make Voyago the perfect choice for
          personalized transportation
        </p>
        <Feature />
      </section>
      {/* Banner section */}
      <section className="banner_section">
        <HomeBanner />
      </section>
      {/* Review Section */}
      <section className="feedback_section">
        <h2 className="feedback_heading">What Our Users Are Saying</h2>
        <Review />
      </section>
      <section className="Faq_section">
        <h2 className="Faq_heading">Quick Answers to Common Questions</h2>
        <div className="faq_container">
          <FAQ />
        </div>
      </section>
      <section className="footer_section">
      <Footer />
      </section>
    </>
  );
}

export default Home;
