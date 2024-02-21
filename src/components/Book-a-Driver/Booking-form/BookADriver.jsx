import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookADriver.css";
import BookingImage from "../../../Assets/travel-ilustra.jpg";
import NavBar from "../../../components/NavBar/NavBar";

// import Footer from '../../components/Footer/Footer'
function BookADriver() {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleDateFocus = () => {
    document.getElementById("pickupDate").type = "date";
  };

  const handleDateBlur = () => {
    if (!pickupDate) {
      document.getElementById("pickupDate").type = "text";
    }
  };

  const handleTimeFocus = () => {
    document.getElementById("pickuptime").type = "time";
  };

  const handleTimeBlur = () => {
    if (!pickupTime) {
      document.getElementById("pickuptime").type = "text";
    }
  };

  return (
    <>
      <NavBar />
      <div className="book-ride-section">
        <div className="booking-form">
          <h1>Conform the Ride</h1>
          <form action="">
            <input type="text" placeholder="Pick up Location" />

            <input type="text" placeholder="Drop Location" />

            <br />
            <input
              placeholder="Pick up Date"
              name="pickupDate"
              id="pickupDate"
              value={pickupDate}
              onFocus={handleDateFocus}
              onBlur={handleDateBlur}
              onChange={(e) => setPickupDate(e.target.value)}
            />

            <input
              name="pickuptime"
              id="pickuptime"
              value={pickupTime}
              placeholder="Pick Up Time"
              onFocus={handleTimeFocus}
              onBlur={handleTimeBlur}
              onChange={(e) => setPickupTime(e.target.value)}
            />

            <br />
            <select>
              <option value="">Cab Type</option>
              <option value="">Luxury</option>
              <option value="">SUV</option>
              <option value="">Innova</option>
              <option value="">Sedan</option>
            </select>
          </form>
          <Link to="/driver-on-way">
            <button className="booking-btn">Book a Ride</button>
          </Link>
          <Link to="/">
            <button className="back-to-home-btn">Go Back</button>
          </Link>
        </div>
        <div className="booking-image">
          <img src={BookingImage} alt="book img" />
        </div>
      </div>
    </>
  );
}

export default BookADriver;
