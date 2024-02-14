import React, { useState } from "react";
import "./Outstation.css";
// import NavBar from "../../NavBar/NavBar";

function Outstation() {
  const [isOneWaySelected, setIsOneWaySelected] = useState(true);

  const handleOneWayChange = () => {
    setIsOneWaySelected(true);
  };

  const handleRoundTripChange = () => {
    setIsOneWaySelected(false);
  };

  const [isDateInput, setIsDateInput] = useState(false);

  const DatehandleFocus = () => {
    setIsDateInput(true);
  };

  const DatehandleBlur = () => {
    setIsDateInput(false);
  };

  const [isTimeInput, setIsTimeInput] = useState(false);

  const handleFocus = () => {
    setIsTimeInput(true);
  };

  const handleBlur = () => {
    setIsTimeInput(false);
  };

  const [DropTimeInput, setDropTimeInput] = useState(false);

  const DrophandleFocus = () => {
    setDropTimeInput(true);
  };

  const DrophandleBlur = () => {
    setDropTimeInput(false);
  };

  const [ReturDateInput, setReturnDateInput] = useState(false);

  const ReturnhandleFocus = () => {
    setReturnDateInput(true);
  };

  const ReturnhandleBlur = () => {
    setReturnDateInput(false);
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="outstation_section">
        <div className="wrapper-section">
          <div className="outstation-header">
            <h2>Book Driver for Outstation Trip</h2>
          </div>
          <div className="radio_details">
            <input
              type="radio"
              id="onewayRadio"
              className="radio filed"
              name="tripType"
              checked={isOneWaySelected}
              onChange={handleOneWayChange}
            />
            Oneway
            <input
              type="radio"
              className="radio filed"
              id="roundtripRadio"
              name="tripType"
              checked={!isOneWaySelected}
              onChange={handleRoundTripChange}
            />
            Roundtrip
          </div>

          <section className="form-section">
            <form
              id="onewayForm"
              style={{ display: isOneWaySelected ? "block" : "none" }}>
              <div className="name-details">
                <div className="field input">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="field input">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className="input-details">
                <div className="field input">
                  <input type="email" placeholder="Email Address" />
                </div>

                <div className="field input">
                  <input type="text" placeholder="Pick up City" />
                </div>
              </div>
              <div className="email-field input">
                <input type="text" placeholder="Enter your complete address" />
              </div>
              <div className="input-details">
                <div className="field input">
                  <input type="text" placeholder="Destination city" />
                </div>
                <div className="field input">
                  <input
                    placeholder="Pick up Date"
                    name="pickupDate"
                    id="pickupDate"
                    value=""
                    type={isDateInput ? "date" : "text"}
                    onFocus={DatehandleFocus}
                    onBlur={DatehandleBlur}
                  />
                </div>
              </div>

              <div className="input-details">
                <div className="field input">
                  <input
                    name="pickuptime"
                    id="pickuptime"
                    value=""
                    placeholder="Pick Up Time"
                    type={isTimeInput ? "time" : "text"}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="field input">
                  <input
                    name="dropTime"
                    id="dropTime"
                    value=""
                    placeholder="Drop Time"
                    type={DropTimeInput ? "time" : "text"}
                    onFocus={DrophandleFocus}
                    onBlur={DrophandleBlur}
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
                    <option value="">Mercedes</option>
                  </select>
                </div>
              </div>

              <div className="local-sub-heading">
                <h5>Terms and Conditions</h5>
                <p>
                  By submitting this form, you agree to abide by Voyago's terms
                  and conditions and acknowledge that all information provided
                  is accurate and truthful to the best of your knowledge.
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
          <section className="form-section">
            <form
              id="roundtripForm"
              style={{ display: isOneWaySelected ? "none" : "block" }}>
              <div className="name-details">
                <div className="field input">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="field input">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className="input-details">
                <div className="field input">
                  <input type="email" placeholder="Email Address" />
                </div>

                <div className="field input">
                  <input type="text" placeholder="Pick up City" />
                </div>
              </div>
              <div className="email-field input">
                <input type="text" placeholder="Enter your complete address" />
              </div>
              <div className="input-details">
                <div className="field input">
                  <input type="text" placeholder="Destination city" />
                </div>
                <div className="field input">
                  <input
                    placeholder="Pick up Date"
                    name="pickupDate"
                    id="pickupDate"
                    value=""
                    type={isDateInput ? "date" : "text"}
                    onFocus={DatehandleFocus}
                    onBlur={DatehandleBlur}
                  />
                </div>
              </div>

              <div className="input-details">
                <div className="field input">
                  <input
                    name="pickuptime"
                    id="pickuptime"
                    value=""
                    placeholder="Pick Up Time"
                    type={isTimeInput ? "time" : "text"}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="field input">
                  <input
                    placeholder="Return Date"
                    name="returnDate"
                    id="returnDate"
                    value=""
                    type={ReturDateInput ? "date" : "text"}
                    onFocus={ReturnhandleFocus}
                    onBlur={ReturnhandleBlur}
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
                  and conditions and acknowledge that all information provided
                  is accurate and truthful to the best of your knowledge.
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

export default Outstation;
