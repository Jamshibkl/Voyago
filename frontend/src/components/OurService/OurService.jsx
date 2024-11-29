import React from "react";
import "./OurService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faPersonWalkingLuggage,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

function OurService() {
  return (
    <section className="home-services-section">
      <div className="row">
        {[
          {
            icon: faUserTie,
            heading: "Driver Booking Services",
            para: "Need a reliable driver for your journey? Voyago offers an easy-to-use platform to book experienced drivers for your daily, outstation, or event travel needs. Customize your ride by selecting vehicle types, scheduling pickup times, and choosing trusted professionals for a seamless experience.",
          },
          {
            icon: faPersonWalkingLuggage,
            heading: "Tour Packages with Drivers",
            para: "Need a reliable driver for your journey? Voyago offers an easy-to-use platform to book experienced drivers for your daily, outstation, or event travel needs. Customize your ride by selecting vehicle types, scheduling pickup times, and choosing trusted professionals for a seamless experience.",
          },
          {
            icon: faCalendarDays,
            heading: "Corporate and Event Travel",
            para: "Need a reliable driver for your journey? Voyago offers an easy-to-use platform to book experienced drivers for your daily, outstation, or event travel needs. Customize your ride by selecting vehicle types, scheduling pickup times, and choosing trusted professionals for a seamless experience.",
          },
        ].map((service, index) => (
          <div className="column" key={index}>
            <div className="card">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.heading}</h3>
              <p>{service.para}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurService;
