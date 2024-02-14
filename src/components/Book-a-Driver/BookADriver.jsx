import React from "react";
import "./BookADriver.css";
import about from "../../Assets/book a drive image.jpg";

function BookADriver() {
  return (
    <div className="bookADriver">
      <div className="driver-img">
        <img src={about} alt="" />
      </div>
      <div className="driver-container">
        <h1 className="driver-heading">
          Book Local, Outstation or Permanent Driver
        </h1>
        <p className="driver-para">
          Pick-up & Drop Location will be <br /> Where would you like to go
          today?
        </p>
        <div className="driver-btn">
          <button className="btn">Local</button>
          <button className="btn">Outstation</button>
          <button className="btn">Permanent</button>
        </div>
        <div className="driver-content-section">
          <div className="driver-booking-type">
            <h4 className="driver-booking-heading">Local Booking</h4>
            <p className="driver-booking-para">
              Need a driver for short-distance travel within your city? Use the
              form above to book a local driver with Voyago.
            </p>
          </div>
          <div className="driver-booking-type">
            <h4 className="driver-booking-heading">Outstation Booking</h4>
            <p className="driver-booking-para">
              Planning a trip out of town and need a reliable driver for the
              journey? Fill out the form above to book an outstation driver with
              Voyago.
            </p>
          </div>
          <div className="driver-booking-type">
            <h4 className="driver-booking-heading">Permanent Booking</h4>
            <p className="driver-booking-para">
              Looking for a dedicated driver for regular or long-term
              transportation needs? Book a permanent driver with Voyago using
              the form above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookADriver;
