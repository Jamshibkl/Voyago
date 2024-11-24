import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingPage.css";
import NavBar from "../../../NavBar/NavBar";
function LoadingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);

  const pickup = localStorage.getItem("pickup");

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const handleAccept = () => {
    navigate("/driver-confirm");
  };

  const handleReject = () => {
    if (window.confirm("Are you sure you want to reject this driver?")) {
      navigate("/book-a-driver");
    }
  };

  return (
    <>
    <NavBar />
    <div className="main-loading">
       
      <div className="fixed-section">
        <div className="finding-page">
          <div className={loading ? "loading-false" : "loading-text"}>
            <h1>Sit back and relax!</h1>
            <h1>Your driver is arriving soon.</h1>
          </div>
          <div className={loading ? "loading-text2" : "loading-false"}>
            <div className="driver-container">
              <div className="driver-table-info">
                <h2>Driver details</h2>
                <div className="driver-profile-sec">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s"
                    alt="Driver Profile"
                    className="driver-profile img"
                  />
                  <h5 className="driver-name">Driver Name</h5>
                </div>
                <div className="driver-profile-tables">
                  <table>
                    <thead>
                      <tr>
                        <th className="profile-tableth">Name</th>
                        <th className="profile-table-th-info">Driver Name</th>
                      </tr>
                      <tr>
                        <th className="profile-tableth">Email</th>
                        <th className="profile-table-th-info">
                          driver@example.com
                        </th>
                      </tr>
                      <tr>
                        <th className="profile-tableth">Mobile Number</th>
                        <th className="profile-table-th-info">1234567890</th>
                      </tr>
                      <tr>
                        <th className="profile-tableth">Driver Id</th>
                        <th className="profile-table-th-info">DR12345</th>
                      </tr>
                    </thead>
                  </table>
                  <div className="request-btns">
                    <button className="accept-btn" onClick={handleAccept}>
                      Accept
                    </button>
                    <button className="reject-btn" onClick={handleReject}>
                      Reject
                    </button>
                  </div>
                  <div className="profile-hr-line"></div>
                </div>
              </div>
            </div>
            {/* Add a placeholder if no driver is found */}
            <div className="not-found">
              <h3>No driver available in your area currently.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoadingPage;
