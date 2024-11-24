import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar/NavBar";
import BookingImg from "../../../Assets/book a drive image.jpg";
import "./BookADriver.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BookADriver() {
  // const name = localStorage.getItem("user");
  // const [username, setUsername] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [pickupLocation, setPickupLocation] = useState("");
  // const [dropoffLocation, setDropoffLocation] = useState("");
  // const [pickupDate, setPickupDate] = useState("");
  // const [pickupTime, setPickupTime] = useState("");
  // const [cabType, setCabType] = useState("");
  // const [error, setError] = useState("");
  // const [msg, setMsg] = useState("");

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setMsg("");
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [msg]);

  // function handleSubmit() {
  //   const currentDate = new Date();
  //   const selectedDate = new Date(pickupDate);

  //   if (selectedDate < currentDate) {
  //     setError("Please select a future date and time.");
  //     return;
  //   }
  //   if (mobile.length !== 10 || isNaN(mobile)) {
  //     setError("Mobile number must be 10 digits.");
  //     return;
  //   }

  //   if (
  //     username !== "" &&
  //     mobile !== "" &&
  //     pickupLocation !== "" &&
  //     dropoffLocation !== "" &&
  //     pickupDate !== "" &&
  //     pickupTime !== "" &&
  //     cabType !== ""
  //   ) {
  //     localStorage.setItem("pickup", pickupLocation);
  //     localStorage.setItem("dropoffLocation", dropoffLocation);
  //     localStorage.setItem("username", username);
  //     localStorage.setItem("pickupTime", pickupTime);
  //     localStorage.setItem("pickupDate", pickupDate);
  //     localStorage.setItem("cabType", cabType);
  //     localStorage.setItem("mobile", mobile);

  //     navigate("/find-a-driver");
  //     setUsername("");
  //     setPickupLocation("");
  //     setDropoffLocation("");
  //     setPickupDate("");
  //     setPickupTime("");
  //     setMobile("");
  //     setCabType("");
  //     setMsg("Driver requested successfully!");
  //   } else {
  //     setError("All fields are required!");
  //   }
  // }

  return (
    <>
      <Navbar />
      <section className="user-booking">
        <div className="booikg-container">
          <div className="booking-img">
            <img src={BookingImg} alt="" />
          </div>
{/* 
          <p className="valid-msg">
            {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
          </p> */}
          <div className="form-username">
            <input
              type="text"
              name="username"
              placeholder="Enter Your User Name "
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-picup">
            <input
              type="text"
              name="pickupLocation"
              placeholder="Enter 4 letters to Search Your Pickup Location"
              // value={pickupLocation}
              // onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>
          <div className="form-outline">
            <input
              type="text"
              name="dropoffLocation"
              placeholder=" Enter 4 letters to Search Your Dropoff Location"
              // value={dropoffLocation}
              // onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>
          <div className="form-outline">
            <input
              type="text"
              name="mobile"
              placeholder="Enter Your Mobile number"
              // value={mobile}
              // onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="bookig-date-time">
            <div className="form-picup-info ">
              <label className="form-label">Pickup Date</label>
              <br />
              <input
                type="date"
                name="pickupDate"
                // value={pickupDate}
                // onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div className="form-picup-info ">
              <label className="form-label">Pickup Time</label>
              <br />
              <input
                type="time"
                name="pickupTime"
                // value={pickupTime}
                // onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>
          </div>
          <div className="form-cabtype ">
            <select
              name="cabType"
              // value={cabType}
              // onChange={(e) => setCabType(e.target.value)}
            >
              <option value="">Select Cab Type</option>
              <option value="Luxury">Luxury</option>
              <option value="SUV">SUV</option>
              <option value="Innova">Innova</option>
              <option value="Sedan">Sedan</option>
            </select>
          </div>
          <div>
            <Link to='/find-a-driver'>
            <input
              type="submit"
              className="btn"
              // onClick={handleSubmit}
              value="Request Driver"
            />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookADriver;
