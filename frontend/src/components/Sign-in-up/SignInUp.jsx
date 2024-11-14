import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import "./SignInUp.css";
import {ToastContainer} from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { handleError, handleSuccess } from "../../utils";

function SignInUp() {
 const [signupInfo, setSignupInfo] = useState({
       name: '',
       email: '',
       password: ''
 })

 const navigate = useNavigate();
 const handleChange = (e) => {
  const { name, value } = e.target;
  console.log(name,value);
  const copySignupInfo = { ...signupInfo };
  copySignupInfo[name] = value;
  setSignupInfo(copySignupInfo );
 }

 const handleSignup = async (e) => {
   e.preventDefault();
   const { name, email, password } = signupInfo;
   if(!name || !email || !password) {
       return handleError('All fields are required!');
   }
  try {
        const url = "http://localhost:8080/auth/signup";
        const response = await fetch(url, {
          method : "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(signupInfo)
        });
        const result = await response.json();
        const { success, message, error } = result;
        if(success)
        {
          handleSuccess(message);
          setTimeout(() => {
            navigate('/login')
          }, 1000)
        } else if(error){
          const details = error?.details[0].message;
          handleError(details);
        } else if(!success){
          handleError(message);
        }
        console.log(result);
        
 } catch (err) {
     handleError(err);
 }
}
  return (
    <>
      <Navbar />
      <div className="driver-reg-form">
        <div className="wrapper2">
          <section className="form3 login">
            <header>Create an account</header>
            <form className="form" onSubmit={handleSignup}>
            

              <div className="field input">
                <label>Username</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Username"
                  value={signupInfo.name}
                  onChange={handleChange}
                  // onBlur={checkUser}
                />
              </div>
              <div className="field input">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupInfo.email}
                  onChange={handleChange}
                  // onBlur={checkEmail}
                />
              </div>
              <div className="field input">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Pasword"
                  value={signupInfo.password}
                  onChange={handleChange}
                  // onBlur={checkPassword}
                />
                {/* <FontAwesomeIcon icon={faEye} className="icon" /> */}
              </div>
              {/* <div className="field input">
                <label>Repeat your password</label>
                <input
                  type="password"
                  name="pass2"
                  // placeholder="Repeat your password"
                  // value={pass2}
                  onChange={handleChange}
                />
                <FontAwesomeIcon icon={faEye} className="icon" />
              </div> */}
              <br />
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="checkbox"
                  defaultValue
                  id="form2Example3cg"
                  required
                />
                <p
                  className="form-check-label"
                  htmlFor="form2Example3g"
                  style={{ margin: "0px" }}>
                  I agree all statements in{" "}
                  <a href="#!" className="text-body">
                    <u>Terms of service</u>
                  </a>
                </p>
              </div>

              <div className="field button">
                <input
                  type="submit"
                  defaultValue="Submit"
                  // onClick={handleSubmit}
                  style={{ background: "#407BFF" }}
                />
              </div>
              <div className="link">
                Have already an account? <Link to="/login">Login here</Link>
              </div>
            </form>
          </section>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignInUp;
