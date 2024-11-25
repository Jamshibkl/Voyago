import React, { useState } from "react";
import "./DriverDashboard.css";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
// import bannerImg from "../../../Assets/City driver-pana (1).svg";
import NavBar from "../Driver-navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHandHoldingDollar, faHourglassStart } from "@fortawesome/free-solid-svg-icons";

function DriverDashboard() {
  const [ride, setRide] = useState("offline");

  // Dummy data to replace backend data
  const dummyDriverInfo = {
    totalRides: 42,
    totalAmount: 3000,
    totalHours: 120,
  };

  const toggleRideStatus = () => {
    setRide((prevRide) => (prevRide === "offline" ? "online" : "offline"));
  };

  return (
    <div>
      <div className="driver-dashboard-section">
        <DriverSideBar />
        <div className="drive-dash-data">
          <NavBar />
          <div className="driver-dash-banner">
            <div>
              <h4>Want to be your own boss? Start today.</h4>
              <p>
                The Voyago helps you earn smarter with real-time information. Easier to use and
                more reliable. Efficiently matches drivers with passengers. Hoping to fund your dreams.
              </p>
            </div>
            <img src='' alt="Driver Dashboard Banner" />
          </div>
          <div className="driver-dash-ride">
            {dummyDriverInfo && (
              <>
                <div className="weeky-data">
                  <div className="weekly-ride">
                    <p>Total Rides</p>
                    <span>
                      <FontAwesomeIcon icon={faCar} />
                    </span>
                    <h4>{dummyDriverInfo.totalRides}</h4>
                  </div>
                  <div className="weekly-ride">
                    <p>Total Income</p>
                    <span>
                      <FontAwesomeIcon icon={faHandHoldingDollar} />
                    </span>
                    <h4>{(dummyDriverInfo.totalAmount / 100) * 90}</h4>
                  </div>
                </div>
                <br />
                <div className="weeky-data">
                  <div className="weekly-ride">
                    <p>Total Hours</p>
                    <span>
                      <FontAwesomeIcon icon={faHourglassStart} />
                    </span>
                    <h4>{dummyDriverInfo.totalHours}</h4>
                  </div>
                  <div className="weekly-ride" onClick={toggleRideStatus}>
                    <h4>Set Your Status</h4>
                    <div>
                      <input id="checkbox" type="checkbox" checked={ride !== "offline"} readOnly />
                      <label className={ride !== "offline" ? "switch" : "switch2"} htmlFor="checkbox">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="slider"
                        >
                          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"></path>
                        </svg>
                      </label>
                      <h4 className={ride !== "offline" ? "offline" : "online"}>
                        <div className="status">offline</div>
                        <div className="status2">online</div>
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverDashboard;
