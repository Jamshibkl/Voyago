import React from "react";
import "./Local.css";

function Local() {
  return (
    <div className="local_section">
      <div className="wrapper-section">
        <div className="local-header">
          <h2>Book Driver for Local Trip</h2>
        </div>
        <section class="form-section ">
          <form>
            <div class="name-details">
              <div class="field input">
                <input type="text" placeholder="First Name"></input>
              </div>
              <div class="field input">
                <input type="text" placeholder="Last Name"></input>
              </div>
            </div>

            <div class="email-field input">
              <input
                type="text"
                placeholder="Enter your complete address"
              ></input>
            </div>

            <div class="input-details">
              <div class="field input">
                <input type="text" placeholder="Email Address"></input>
              </div>
              <div class="field input">
                <input type="text" placeholder="Pic up City"></input>
              </div>
            </div>

            <div class="input-details">
              <div class="field input">
                <input type="text" placeholder="Pic up Date"></input>
              </div>
              <div class="field input">
                <input type="text" placeholder="Pic up Time"></input>
              </div>
            </div>

            <div class="input-details">
              <div class="field input">
                <input type="text" placeholder="-Cab Type-"></input>
              </div>
              <div class="field input">
                <input type="text" placeholder="-Trip Type-"></input>
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
                <input type="radio" radioGroup="term"/>
                <p className="terms-para">
                  I agree to the terms and conditions.
                </p>
              </div>
            </div>

            <div class="field button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Local;
