import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {ToastContainer} from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { handleError, handleSuccess } from "../../utils";

function Login() {
 const [loginInfo, setLoginInfo] = useState({
       email: '',
       password: ''
 })

 const navigate = useNavigate();
 const handleChange = (e) => {
  const { name, value } = e.target;
  console.log(name,value);
  const copyLoginInfo = { ...loginInfo };
  copyLoginInfo[name] = value;
  setLoginInfo(copyLoginInfo );
 }

 const handleLogin = async (e) => {
   e.preventDefault();
   const { email, password } = loginInfo;
   if(!email || !password) {
       return handleError('All fields are required!');
   }
  try {
        const url = "http://localhost:8080/auth/login";
        const response = await fetch(url, {
          method : "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const { success, message, jwtToken, name, error } = result;
        if(success)
        {
          handleSuccess(message);
          localStorage.setItem('token', jwtToken)
          localStorage.setItem('loggedInUser', name);
          setTimeout(() => {
            navigate('/')
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
            <header>Login</header>
            <form className="form" onSubmit={handleLogin}>
              <div className="field input">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginInfo.email}
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
                  value={loginInfo.password}
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

              <div className="field button">
                <input
                  type="submit"
                  defaultValue="Submit"
                  // onClick={handleSubmit}
                  style={{ background: "#407BFF" }}
                />
              </div>
              <div className="link">
                Does't have an account? <Link to="/sign-in">Signup here</Link>
              </div>
            </form>
          </section>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
