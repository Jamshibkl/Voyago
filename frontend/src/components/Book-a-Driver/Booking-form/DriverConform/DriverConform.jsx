import React from "react";
import "./DriverConform.css";
import NavBar from "../../../NavBar/NavBar";
import { Link } from "react-router-dom";
function DriverConform() {
  return (
    <>
      <NavBar />
      <div className="confirme-section">
        <div className="driver-conform-headings">
        
          <h3>Your Booking Details</h3>
          <div class="booking-details-wrapper">
          <table className="booking-details">
            <thead>
              <tr>
                <th>PickUp Location</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>PickUp Date</th>
                <th>PickUp Time</th>
                <th>Cab Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sample Location</td>
                <td>John Doe</td>
                <td>+91 9876543210</td>
                <td>2024-12-01</td>
                <td>10:00 AM</td>
                <td>Sedan</td>
              </tr>
            </tbody>
          </table>

          <h3>Hourly Charges</h3>
          <table className="hourly-charges">
            <thead>
              <tr>
                <th>Per Hour</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Rs.150₹</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rs.250₹</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Rs.500₹</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Rs.750₹</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Rs.1000₹</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div className="dirver-info">
          <h3>Driver Details</h3>
          <div className="driver-info-section">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s"
                alt="Driver"
              />
            </div>
            <div>
              <table className="driver-info">
                <tbody>
                  <tr>
                    <th>Driver ID:</th>
                    <td>12345</td>
                  </tr>
                  <tr>
                    <th>Name:</th>
                    <td>Michael Scott</td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td>michael.scott@example.com</td>
                  </tr>
                  <tr>
                    <th>Mobile:</th>
                    <td>+91 9876543210</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="otp-section">
            <h3>Enter the OTP to confirm the driver.</h3>
            <p className="valid-msg">
              <span className="otp-heading">
                The driver will reach you within 10 minutes!
              </span>
            </p>
            <input type="text" placeholder="Enter The OTP" name="OTP" />
           <Link to='/ride-started'> 
           <button>Confirm Driver</button>
           </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverConform;
