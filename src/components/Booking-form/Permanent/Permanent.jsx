import React, { useState } from "react";
import "./Permanent.css";
// import NavBar from "../../NavBar/NavBar";
function Permanent() {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleDateFocus = () => {
    document.getElementById("pickupDate").type = "date";
  };

  const handleDateBlur = () => {
    if (!pickupDate) {
      document.getElementById("pickupDate").type = "text";
    }
  };

  const handleTimeFocus = () => {
    document.getElementById("pickuptime").type = "time";
  };

  const handleTimeBlur = () => {
    if (!pickupTime) {
      document.getElementById("pickuptime").type = "text";
    }
  };

  return (
    <>
    {/* <NavBar /> */}
    <div className="Permanent_section">
      <div className="wrapper-section">
        <div className="Permanent-header">
          <h2>Book Permanent Driver for Trip</h2>
        </div>
        <section className="form-section">
          <form>
            <div className="name-details">
              <div className="field input">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="field input">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="email-field input">
              <input type="text" placeholder="Enter your complete address" />
            </div>

            <div className="input-details">
              <div className="field input">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="field input">
                <input type="text" placeholder="City" />
              </div>
            </div>

            <div className="input-details">
              <div className="field input">
                <input
                  placeholder="Pick up Date"
                  name="pickupDate"
                  id="pickupDate"
                  value={pickupDate}
                  onFocus={handleDateFocus}
                  onBlur={handleDateBlur}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
              <div className="field input">
                <input
                  name="pickuptime"
                  id="pickuptime"
                  value={pickupTime}
                  placeholder="Pick Up Time"
                  onFocus={handleTimeFocus}
                  onBlur={handleTimeBlur}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </div>
            </div>

            <div className="input-details">
              <div className="field input">
                <select>
                  <option value="">-Cab Type-</option>
                  <option value="">Luxury</option>
                  <option value="">SUV</option>
                  <option value="">Innova</option>
                  <option value="">Sedan</option>
                  <option value="">Tempo Traveller</option>
                </select>
              </div>
              <div className="field input">
                <select>
                <option value="">-Cab Model-</option>
                  <option value="">BMW</option>
                  <option value="">Audi</option>
                  <option value="">Benz</option>
                </select>
              </div>
            </div>

            <div className="local-sub-heading">
              <h5>Terms and Conditions</h5>
              <p>
                By submitting this form, you agree to abide by Voyago's terms
                and conditions and acknowledge that all information provided is
                accurate and truthful to the best of your knowledge.
              </p>
              <div className="terms-section">
                <input type="checkbox" name="term" />
                <p className="terms-para">
                  I agree to the terms and conditions.
                </p>
              </div>
            </div>

            <div className="field button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </section>
      </div>
    </div>
    </>
  );
}

export default Permanent;
