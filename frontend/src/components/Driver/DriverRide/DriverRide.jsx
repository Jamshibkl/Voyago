import React, { useState } from "react";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import "./DriverRide.css";

function DriverRide() {
  const driverEmail = localStorage.getItem("email");

  // Mock data for demonstration purposes
  const [driver] = useState([
    {
      driverEmail: "john.doe@example.com",
      location: "Downtown",
      UserName: "Alice Johnson",
      UserMobile: "9876543210",
      tolatHour: "2",
      totalCharge: "300",
    },
    {
      driverEmail: "john.doe@example.com",
      location: "Airport",
      UserName: "Bob Smith",
      UserMobile: "8765432109",
      tolatHour: "3",
      totalCharge: "450",
    },
    {
      driverEmail: "jane.doe@example.com",
      location: "Mall",
      UserName: "Charlie Brown",
      UserMobile: "7654321098",
      tolatHour: "1.5",
      totalCharge: "200",
    },
  ]);

  return (
    <div className="Driver-ride-section">
      <DriverSideBar />
      <div className="ride-information">
        <div className="current-ride">
          <h2>Ride History</h2>
          <div style={{ overflowX: "auto" }}>
            <table id="customers">
              <thead>
                <tr>
                  <th>From</th>
                  <th>UserName</th>
                  <th>UserMobile</th>
                  <th>Total Hours</th>
                  <th>Total Charge</th>
                </tr>
              </thead>
              <tbody>
                {driver.map((ride, index) => (
                  ride.driverEmail === driverEmail && (
                    <tr key={index}>
                      <td>{ride.location}</td>
                      <td>{ride.UserName}</td>
                      <td>{ride.UserMobile}</td>
                      <td>{ride.tolatHour}</td>
                      <td>{ride.totalCharge}</td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverRide;
