import React from "react";
import "./PaymentSection.css";
import NavBar from "../../NavBar/NavBar";

function PaymentSection() {
  return (
    <>
      <NavBar />
      <div className="payment_section">
        <h1>Secure and Convenient Payment Checkout</h1>
        <div className="payment_details">
          <div className="choosing_payment">
            <h3>Choose your preferred payment method:</h3>
            <label>
              <input type="radio" name="paymentMethod" /> Online Payment
            </label>
            <label>
              <input type="radio" name="paymentMethod" /> Offline Payment
            </label>
            <table className="payment_information">
              <tbody>
                <tr>
                  <th>Payment Summary</th>
                </tr>
                <tr>
                  <td>
                    Total Cost: <span>₹220</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Selected Driver: <span>Mahesh K</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Payment Method: <span>[Online/Offline]</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="billing_information">
            <h3>Billing Information</h3>
            <h5>your billing details:</h5>
            <ul>
              <li>Full Name:</li>
              <li>Email Address:</li>
              <li>Phone Number:</li>
              <li>Billing Address:</li>
            </ul>
          </div>
        </div>
        <div className="billing_condition">
          <h4>Terms and Conditions</h4>
          <p>
            By proceeding with the payment, you agree to abide by Voyago's terms
            and conditions.
          </p>
          <label>
            <input type="checkbox" /> I agree to the terms and conditions.
          </label>
          <br />
          <button className="proceed_btn">Proceed to Payment</button>
        </div>
      </div>
    </>
  );
}

export default PaymentSection;
