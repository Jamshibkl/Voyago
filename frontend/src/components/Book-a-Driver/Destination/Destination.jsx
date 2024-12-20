import React, { useState, useEffect } from "react";
import "./Destination.css";
import NavBar from "../../NavBar/NavBar";
import ArrivedDestinationImg from "../../../Assets/Ride-with-Uber.jpg";
import { useNavigate } from "react-router-dom";

function Destination() {
  const navigate = useNavigate();
  
  const [hour, setHour] = useState("");
  const [charge, setCharge] = useState("");

  useEffect(() => {
    let totalHour = 0;
    let totalCharge = 0;

    const rideTime = 6; // Example, you can replace this with your dynamic value
    
    if (rideTime) {
      if (rideTime <= 4) {
        totalHour = 4;
        totalCharge = 500;
      } else if (rideTime > 4 && rideTime <= 6) {
        totalHour = Math.ceil(rideTime);
        totalCharge = 750;
      } else if (rideTime > 6 && rideTime <= 8) {
        totalHour = Math.ceil(rideTime);
        totalCharge = 1000;
      } else {
        let roundHour = Math.ceil(rideTime);
        if (roundHour > 8 && roundHour <= 9) {
          totalHour = Math.ceil(rideTime);
          totalCharge = 1150;
        } else if (roundHour > 9 && roundHour <= 10) {
          totalHour = Math.ceil(rideTime);
          totalCharge = 1250;
        } else {
          let extraHour = roundHour - 10;
          totalHour = roundHour;
          totalCharge = 1250 + extraHour * 150;
        }
      }
      setCharge(totalCharge);
      setHour(totalHour);
    }
  }, []);

  const handleSubmit = () => {
    navigate('/payment-checkout/'); // Navigate to the payment page with the charge
  };

  return (
    <>
      <NavBar />
      <div className="destination-section">
        <div className="destination-left">
          <h1>You have completed your journey!</h1>
          <h2>Please pay the fare amount.</h2>
          <form>
            <div className="destination-details">
              <h3>
                Total Hours <i>(min)</i>:{" "}
                <span>
                  {hour} <i>hr</i>{" "}
                </span>
              </h3>
              <h3>
                Total Charge <i>(min)</i>:{" "}
                <span>
                  {charge} <i>/-</i>
                </span>
              </h3>
            </div>
            <br />
            <label>
              <input type="radio" name="paymentMethod" /> Online Payment
            </label>
            <label>
              <input type="radio" name="paymentMethod" /> Offline Payment
            </label>
            <br />
            <button
              className="Confirm-payment"
              onClick={handleSubmit}
            >
              Confirm payment
            </button>
          </form>
        </div>
        <div className="destination-img">
          <img src={ArrivedDestinationImg} alt="Arrived at destination" />
        </div>
      </div>
    </>
  );
}

export default Destination;
