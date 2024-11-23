import React, { useEffect } from "react";
import "./Safety.css";
import safety from "../../Assets/safety.jpg";
import covid from "../../Assets/covid19 family safety new bg.jpg";
import safety_img from "../../Assets/istockphoto-1205892464-612x612.jpg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

function Safety() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom options
  }, []);

  return (
    <div className="safety-section">
      <NavBar />
      <div className="ourSafety" data-aos="fade-up">
        <div className="info">
          <h1>Safe Journeys Start Here: Voyago's Commitment to Safety</h1>
          <p>
            At Voyago, safety is our top priority. We are committed to providing
            a secure and reliable transportation experience for all our
            passengers and drivers. Explore the safety measures and guidelines
            we have in place to ensure your well-being:
          </p>
        </div>
        <div className="safety-img">
          <img className="image" src={safety} alt="" />
        </div>
      </div>

      <div className="our-section2" data-aos="fade-right">
        <h2>Passenger Safety</h2>
        <div className="passengers">
          <div className="safetys" data-aos="zoom-in">
            <h4>Driver Screening</h4>
            <p>
              We rigorously screen all our drivers to ensure they meet our
              safety standards. Background checks, driving record reviews, and
              vehicle inspections are conducted to verify their eligibility to
              drive with Voyago.
            </p>
          </div>
          <div className="safetys" data-aos="zoom-in">
            <h4>Real-Time Tracking</h4>
            <p>
              Track your ride in real-time using the Voyago app. Know exactly
              where your driver is and when they will arrive, providing peace of
              mind throughout your journey.
            </p>
          </div>
          <div className="safetys" data-aos="zoom-in">
            <h4>Secure Payments</h4>
            <p>
              Payment transactions on Voyago are encrypted and secure. Your
              payment information is protected, and you can rest assured that
              your transactions are safe and reliable.
            </p>
          </div>
        </div>
      </div>

      <div className="safetyMeasures" data-aos="fade-left">
        <h2>COVID-19 Safety Measures</h2>
        <div className="covid-information">
          <div className="covid-img" data-aos="fade-up">
            <img src={covid} alt="" />
          </div>
          <div className="covid-info" data-aos="fade-down">
            <p>
              Amidst the COVID-19 pandemic, we've implemented stringent safety
              measures to protect our passengers and drivers. These include
              rigorous sanitization protocols, mandatory face coverings, and a
              contactless experience to minimize transmission risk and
              prioritize the health and well-being of everyone in our community.
            </p>
          </div>
        </div>
      </div>

      <div className="communitySafety" data-aos="fade-up">
        <div className="community-info">
          <h1 className="community-heading">Community Safety</h1>
          <p className="community-para">
            Our commitment to community safety extends to empowering passengers
            and drivers alike. Our reporting features allow for swift action on
            safety concerns, while our focus on safety education fosters
            awareness and proactive measures within our community, ensuring a
            secure and trustworthy environment for all.
          </p>
        </div>
        <div className="community-img">
          <img className="image" src={safety_img} alt="" />
        </div>
      </div>

      <div className="contact-team" data-aos="fade-in">
        <h4 className="contact-heading">Contact Us</h4>
        <h6 className="contact-heading">Have Questions?</h6>
        <p className="team-para">
          If you have any questions or concerns about safety on Voyago, please
          don't hesitate to contact us. Our support team is available to assist
          you and address any inquiries you may have.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Safety;
