import React from "react";
import "./Chekout.css";
import { useNavigate } from "react-router-dom";

function Chekout() {
  const navigate = useNavigate();
  
  // Placeholder values (for when backend logic is removed)
  const amount = 100; // Example amount
  const tranId = "12345"; // Example transaction ID
  const driverName = "John Doe"; // Example driver name
  const driveremail = "driver@example.com"; // Example driver email
  const driverid = "67890"; // Example driver ID
  const drivermobile = "+123456789"; // Example driver mobile
  
  const timeout = setTimeout(() => {
    window.location.reload();
  }, 10000);

  const handleSubmit = async () => {
    navigate('/payment-section');
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span>VOYAGO</span>
          <h2>Your Payment Details</h2>
          <div>
            {tranId ? (
              <>
                <div className="transaction-section">
                  <p>
                    <b>Driver name :</b>
                    {driverName}
                  </p>
                  <p>
                    <b>Driver id :</b>
                    {driverid}
                  </p>
                  <p>
                    <b>Driver mobile :</b>
                    {drivermobile}
                  </p>
                  <p>
                    <b>Driver email :</b>
                    {driveremail}
                  </p>
                  <p>
                    <b>Transaction Id :</b>
                    {tranId}
                  </p>
                  <button className="gobackbtn" onClick={() => handleSubmit()}>
                    Done
                  </button>
                </div>
              </>
            ) : (
              <div className="loading-section">
                <div className="loader-container">
                  <div className="loader"></div>
                  <div className="loader-text">Loading...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chekout;
