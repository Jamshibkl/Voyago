import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import CarAnimate from "../../Assets/Car driving-rafiki (2).svg";
import Feature from "../../components/Features/Feature";
import HomeBanner from "../../components/banner/HomeBanner";
import Review from "../../components/Review/Review";
import OurService from "../../components/OurService/OurService";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
// import NavBar from "../../components/NavBar/NavBar";

function Home() {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);
  const [products, setProducts] = useState("");
  const [loggedInUser, setLoginInUser] = useState("");

  useEffect(() => {
    setLoginInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleBookClick = () => {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn) {
      navigate("/book-a-driver"); // Navigate to booking page only if logged in
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
    setIsAnimated(true);
  };
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("user Loggedout!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  const fetchProducts = async () => {
    try {
      const url = "https://voyago.vercel.app/products";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* Header */}
      {/* <NavBar/> */}
      <Navbar collapseOnSelect expand="lg" className="" id="nav-bar-section">
        <Container className="nav_container">
          <Navbar.Brand className="logo" as={NavLink} to="/">
            VOYAGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_links">
              <Nav.Link as={NavLink} to="/" className="nav-link-with-space">
                Home
              </Nav.Link>
              <NavDropdown
                title="Company"
                id="collapsible-nav-dropdown"
                className="dropdown-btn">
                <NavDropdown.Item
                  as={NavLink}
                  to="/about-us"
                  className="dropdown-items">
                  About us
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/how-it-works"
                  className="dropdown-items">
                  How it Work
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/our-team"
                  className="dropdown-items">
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/become-a-driver"
                  className="dropdown-items">
                  Become a Driver
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/admin-login"
                  className="dropdown-items">
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/service-status"
                  className="dropdown-items">
                  Service Status
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/leagal-privacy"
                  className="dropdown-items">
                  Legal and Privacy
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/book-a-driver"
                  className="dropdown-items">
                  Book a Driver
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={NavLink}
                to="/safety"
                className="nav-link-with-space">
                Safety
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className="nav-link-with-space">
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <NavDropdown
                title={loggedInUser ? loggedInUser : "Login"}
                id="home-dropdown"
                className="nav-link-with-space text-light">
                {loggedInUser ? (
                  <>
                    <NavDropdown.Item
                      className="dropdown-items"
                      as={NavLink}
                      to={`/on-the-way/${loggedInUser}`}>
                      Rides
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdown-items"
                      onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <NavDropdown.Item
                    as={NavLink}
                    to="/login"
                    className="dropdown-items">
                    Login
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header section */}

      {/* Main  section */}
      <section className="main_section">
        <div className="main_left">
          <h1 className="heading">
            {" "}
            <span>Get</span> Skillful Drivers,
            <br />
            On-<span>Demand</span>
          </h1>
          <p>
            Voyago transforms the way you travel. Bringing skillful drivers to
            your doorstep, we make owning a car a pleasure.
          </p>

          <NavLink to="/book-a-driver">
          <button
            className={`main_btn ${isAnimated ? "animate" : ""}`}>
            Book a Driver
          </button>
          </NavLink>
        </div>
        <div className="main-right">
          <div className="main_container">
            <img src={CarAnimate} alt="" className="car_avtar" />
          </div>
          <NavLink to="/book-a-driver">
          <button 
            className={`main_btn2 ${isAnimated ? "animate" : ""}`}>
            Book a Driver
          </button>
          </NavLink>
        </div>
      </section>

      {/* service section */}
      <section className="service-home-section">
        <h1 className="service-home-h1" style={{textAlign:'center',color:"#407bff",fontSize:'34px',fontWeight:'bold',margin:'0'}}>Our Services</h1>
        <OurService />
      </section>
      {/* feture section */}
      <section className="feature_section">
        <div className="feature_content">
          <h1 className="feature_heading">Features</h1>
          <h1 className="feature_sub_heading">
            Experience the Benefits of Voyago
          </h1>
          <p>
            Discover the features that make Voyago the perfect choice for
            personalized transportation
          </p>
        </div>
        {/* <div className="productcontiner">
          {products &&
            products.map((item, index) => (
              <ul key={index}>
                <li>
                  <span>
                    {item.name}: {item.price}
                  </span>
                </li>
              </ul>
            ))}
        </div> */}
        <ToastContainer />
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
