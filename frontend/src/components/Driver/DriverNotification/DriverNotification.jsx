import React, { useState } from "react";
import "./DriverNotification.css";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import { useNavigate } from "react-router-dom";

function DriverNotification() {
  const navigate = useNavigate();

  // Simulating local data instead of fetching from backend
  const [bookings, setBookings] = useState([
    {
      randomNum: "123456",
      pickup: "Main Street",
      username: "John Doe",
      mobile: "9876543210",
      pickupDate: "2024-11-25",
      pickupTime: "10:00 AM",
    },
  ]);

  const [conform, setConform] = useState(null);

  const randomNum = localStorage.getItem("randomNum");
  const cancel = "Cancel";
  const accept = "Accept";

  const generateRandomNumber = () => Math.floor(100000 + Math.random() * 900000);
  const RandomOTP = generateRandomNumber();
  localStorage.setItem("RandomOTP", RandomOTP);

  const handleConform = (e) => {
    e.preventDefault();
    const StartOtp = generateRandomNumber();
    localStorage.setItem("StartOtp", StartOtp);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    localStorage.setItem("FinishCode", generateRandomNumber());
    localStorage.setItem("randomNum", "");
    navigate("/driver-Qrcode");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    localStorage.setItem("cancel", cancel);
    localStorage.setItem("randomNum", "");
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConform(true);
    localStorage.setItem("accept", accept);
    localStorage.setItem("cancel", "");
  };

  return (
    <div className="driver-notification-section">
      <DriverSideBar />
      <div className="driver-notification">
        <h1>Notification</h1>
        <div className="booking-details">
          {bookings.map((booking, index) => (
            <form action="" key={index}>
              {booking.randomNum === randomNum && (
                <div className="booking-info-form">
                  <>
                    <label htmlFor="">
                      From: <span>{booking.pickup}</span>
                    </label>
                    <div className="horizontal-line"></div>
                    <label htmlFor="">
                      Name: <span>{booking.username}</span>
                    </label>
                    <label htmlFor="">
                      Mobile: <span>{booking.mobile}</span>
                    </label>
                    <label htmlFor="">
                      Pickup Date: <span>{booking.pickupDate}</span>
                    </label>
                    <label htmlFor="">
                      Pickup Time: <span>{booking.pickupTime}</span>
                    </label>
                  </>
                  <div
                    htmlFor=""
                    className={
                      conform == null ? "conform-false" : "conform-OTP"
                    }
                  >
                    <label>
                      OTP: <span>{RandomOTP}</span>
                    </label>
                    <div className="horizontal-line"></div>
                    <div>
                      <button className="confirm-btn" onClick={handleConform}>
                        Start
                      </button>
                      <button className="cancel" onClick={handleFinish}>
                        Finish
                      </button>
                    </div>
                  </div>
                  <div
                    className={
                      conform === true ? "conform-false" : "horizontal-line"
                    }
                  ></div>
                  <div>
                    <div
                      className={
                        conform === true ? "conform-false" : "booking-conform"
                      }
                    >
                      <button className="confirm" onClick={handleSubmit}>
                        Confirm
                      </button>
                      <button className="cancel" onClick={handleCancel}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DriverNotification;
