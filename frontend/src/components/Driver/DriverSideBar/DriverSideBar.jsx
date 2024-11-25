import React, { useState } from "react";
import "./DriverSideBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBell,
  faCar,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function DriverSideBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const driveremail = localStorage.getItem("email") || "Guest";

  function logoutSubmit() {
    localStorage.removeItem("driver-login");
    localStorage.removeItem("email");
    navigate("/driver-login");
  }

  return (
    <div className={`Driver-SideBar ${isOpen ? "open" : ""}`}>
      <div className="Driver-brand">
        <h3>VOYAGO</h3>
        <button
          className="toggle-button"
          aria-label="Toggle Sidebar"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="Driver-dashboard-section">
        <div className="Driver-dashboard-options">
          <h4 style={{ fontSize: "15px" }}>{driveremail}</h4>
          <NavLink
            to="/driver-dashbord"
            className={({ isActive }) =>
              isActive ? "Driver-dashboard-items active" : "Driver-dashboard-items"
            }
          >
            <h5>
              <FontAwesomeIcon icon={faHouse} /> Dashboard
            </h5>
          </NavLink>
          <NavLink
            to="/driver-profile"
            className={({ isActive }) =>
              isActive ? "Driver-dashboard-items active" : "Driver-dashboard-items"
            }
          >
            <h5>
              <FontAwesomeIcon icon={faUser} /> Driver Info
            </h5>
          </NavLink>
          <NavLink
            to="/driver-notify"
            className={({ isActive }) =>
              isActive ? "Driver-dashboard-items active" : "Driver-dashboard-items"
            }
          >
            <h5>
              <FontAwesomeIcon icon={faBell} /> Notifications
            </h5>
          </NavLink>
          <NavLink
            to="/driver-ride"
            className={({ isActive }) =>
              isActive ? "Driver-dashboard-items active" : "Driver-dashboard-items"
            }
          >
            <h5>
              <FontAwesomeIcon icon={faCar} /> Rides
            </h5>
          </NavLink>
          <hr style={{ color: "white", width: "100%", margin: "0" }} />
          <button onClick={logoutSubmit}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DriverSideBar;
