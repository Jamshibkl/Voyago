import React, { useState } from "react";
import "./DriverProfile.css";
import DriverSideBar from "../DriverSideBar/DriverSideBar";

function DriverProfile() {
  const driveremail = localStorage.getItem("email");

  // Simulating driver data locally
  const [driver] = useState({
    profileImg: "default-profile.png", // Placeholder image name
    driver: "John Doe",
    location: "New York",
    email: driveremail || "john.doe@example.com",
    mobile: "9876543210",
    adharId: "1234-5678-9012",
    license: "DL-567890",
    adharImg: "default-adhar.png", // Placeholder image name
    licenseImg: "default-license.png", // Placeholder image name
  });

  return (
    <div>
      <div className="driver-profile-section">
        <DriverSideBar />
        <div className="dr-info">
          {driver && (
            <div className="driver-profile-info">
              <div className="profile">
                <span className="profile-pic">
                  <img
                    src={`/path/to/images/Profile/${driver.profileImg}`}
                    alt="Profile"
                  />
                </span>
              </div>

              <div className="driver-profile-form">
                <h3>{driver.driver}</h3>
                <p>{driver.location}</p>
              </div>
              <div className="driver-profile-form">
                <form action="">
                  <div className="dr-profile-info">
                    <div className="dr-personal-info">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        placeholder="Email"
                        value={driver.email}
                        readOnly
                      />
                    </div>
                    <div className="dr-personal-info">
                      <label htmlFor="">Mobile no</label>
                      <input
                        type="text"
                        placeholder="Mobile"
                        value={driver.mobile}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <div className="dr-profile-info">
                    <div className="dr-personal-info">
                      <label htmlFor="">Adhar card</label>
                      <input
                        type="text"
                        placeholder="Adhar card"
                        value={driver.adharId}
                        readOnly
                      />
                    </div>
                    <div className="dr-personal-info">
                      <label htmlFor="">Driver License</label>
                      <input
                        type="text"
                        placeholder="Driver License"
                        value={driver.license}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="dr-profile-info">
                    <div className="dr-personal-id">
                      <label htmlFor="">Adhar card Image</label>
                      <img
                        src={`/path/to/images/adhar/${driver.adharImg}`}
                        alt="Adhar card Image"
                      />
                    </div>
                    <div className="dr-personal-id">
                      <label htmlFor="">Driver License Image</label>
                      <img
                        src={`/path/to/images/license/${driver.licenseImg}`}
                        alt="Driver License Image"
                      />
                    </div>
                  </div>
                  <br />
                  {/* <button>Change password</button> */}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
