import React, { useState } from "react";
import "./PaymentSection.css";
import NavBar from "../../NavBar/NavBar";
import PaymentSucsessIcon from "../../../Assets/payment-sucssesfull.png";
import { useParams, useNavigate, Link } from "react-router-dom";

function PaymentSection() {
  const { transactionId, driverId, amount, user } = useParams();
  const [driver] = useState({
    driver: "John Doe", // Placeholder driver name
    email: "driver@example.com", // Placeholder driver email
    mobile: "+123456789", // Placeholder driver mobile
    profileImg: "profile-placeholder.png", // Placeholder profile image
  });
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e, type) => {
    switch (type) {
      case "feedback":
        setError("");
        setFeedback(e.target.value);
        if (e.target.value === "") {
          setError("Feedback has been left blank!");
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (feedback) {
      // Simulated POST request (no backend)
      console.log({
        feedback,
        userName: user ? user : "Anonymous",
        driverName: driver.driver,
        driver_id: driverId ? driverId : "Anonymous",
      });
      setFeedback("");
      setTimeout(function () {
        alert("Thank you for your feedback!");
        navigate("/");
      }, 100);
    } else {
      setError("Feedback is required!");
    }
  };

  return (
    <>
      <NavBar />
      <div className="payment-section">
        <div className="payment-details">
          <h1>
            Payment successful!{" "}
            <img src={PaymentSucsessIcon} alt="" className="payment-sucsess" />
          </h1>
          <form>
            <input
              type="text"
              placeholder="Name : james"
              readOnly
              value={`Name :${user}`}
            />
            <input
              type="text"
              placeholder="Transaction ID : "
              readOnly
              value={`Transaction ID :${transactionId} `}
            />
            <br />
            <input
              type="text"
              placeholder="Driver ID"
              readOnly
              value={`Driver ID :${driverId}`}
            />
            <input
              type="text"
              placeholder="Amount: 1000"
              readOnly
              value={`Amount :${amount}`}
            />
          </form>
          <h2>Driver details.</h2>
          {driver && (
            <div className="driver-info-container">
              <div className="driver-info-profile">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s"
                  alt="Driver profile"
                />
              </div>
              <div className="driver-info">
                <h3>{driver.driver}</h3>
                <p>{driver.email}</p>
                <p>{driver.mobile}</p>
              </div>
            </div>
          )}
        </div>
        <div className="payment-feedback">
          <h3>Give feedback about the driver.</h3>
          <br />
          <textarea
            rows="6"
            cols="54"
            value={feedback}
            onChange={(e) => handleInputChange(e, "feedback")}
          />
          <br />
          <button
            className="feedback-submit"
            onClick={handleSubmit}
            type="button">
            Submit
          </button>
          <Link to="/">
            <button className="feedback-submit" type="button">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PaymentSection;
