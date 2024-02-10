import React from "react";
import "./Safety.css";
import safety from "../../Assets/safety.jpg";
import covid from "../../Assets/covid19 family safety new bg.jpg";

function Safety() {
  return (
    <div className="safety-section">
      <div className="ourSafety">
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
      <div className="passengerSafety">
        <h2>Passenger Safety</h2>
        <div className="safety_passengers">
          <div className="safetys">
            <h4>Driver Screening</h4>
            <p>
              We rigorously screen all our drivers to ensure they meet our
              safety standards. Background checks, driving record reviews, and
              vehicle inspections are conducted to verify their eligibility to
              drive with Voyago.
            </p>
          </div>
          <div className="safetys">
            <h4>Real-Time Tracking</h4>
            <p>
              Track your ride in real-time using the Voyago app. Know exactly
              where your driver is and when they will arrive, providing peace of
              mind throughout your journey.
            </p>
          </div>
          <div className="safetys">
            <h4>Secure Payments</h4>
            <p>
              Payment transactions on Voyago are encrypted and secure. Your
              payment information is protected, and you can rest assured that
              your transactions are safe and reliable.
            </p>
          </div>
        </div>
      </div>

      <div className="driverSafety">
        <h2>Driver Safety</h2>
        <div className="drivers">
          <div className="safetys">
            <h4>Passenger Verification</h4>
            <p>
              To ensure the safety of our drivers, passengers are required to
              verify their identity before booking a ride. This helps prevent
              unauthorized or fraudulent bookings and promotes a secure
              environment for drivers
            </p>
          </div>
          <div className="safetys">
            <h4>Emergency Assistance</h4>
            <p>
              In case of emergencies, drivers have access to emergency
              assistance features on the Voyago app. They can quickly contact
              emergency services or alert our support team for immediate
              assistance.
            </p>
          </div>
          <div className="safetys">
            <h4>Safe Driving Practices</h4>
            <p>
              We prioritize safe driving practices through education and
              training, emphasizing defensive driving techniques and customer
              interaction to ensure passenger safety and comfort.
            </p>
          </div>
        </div>
      </div>

      <div className="safetyMeasures">
        <h2>COVID-19 Safety Measures</h2>
        <div className="covid-information">
          <div className="covid-img">
            <img src={covid} alt="" />
          </div>
          <div className="covid-info">
            <p>
              Amidst the COVID-19 pandemic, we've implemented stringent safety
              measures to protect our passengers and drivers. These include
              rigorous sanitization protocols, mandatory face coverings, and a
              contactless experience to minimize transmission risk and
              prioritize the health and well-being of everyone in our community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
