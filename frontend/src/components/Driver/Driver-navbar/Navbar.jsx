import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // Dummy data to replace backend and localStorage
  const dummyDriver = {
    driver: "John Doe",
    profileImg: "default-profile.png", // Placeholder image
  };

  return (
    <div className="driver-nav">
      <h3>{dummyDriver.driver}</h3>
      <div className="driver-logo">
        <div className="driver-profile">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s'
            alt="Driver Profile"
          />
          <span>
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
