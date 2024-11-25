import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./DriverLogin.css";

function DriverLogin() {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [error, setError] = useState("");

  // const handleInputChange = (e, type) => {
  //   switch (type) {
  //     case "email":
  //       setError("");
  //       setEmail(e.target.value);
  //       if (e.target.value === "") {
  //         setError("Email has been left blank");
  //       }
  //       break;
  //     case "pass":
  //       setError("");
  //       setPass(e.target.value);
  //       if (e.target.value === "") {
  //         setError("Password has been left blank");
  //       }
  //       break;
  //     default:
  //   }
  // };

  // const loginSubmit = (e) => {
  //   e.preventDefault();
  //   if (email === "" || pass === "") {
  //     setError("All fields are required!");
  //   } else {
  //     setError("");
  //     navigate("/driver-dashbord"); // Dummy navigation for frontend behavior
  //   }
  // };

  return (
    <>
      <div className="driver-signup-fom ">
        <div className="wrapper1">
          <section className="form1 singup">
            <header>Sign into your account</header>
            <form action="#">
              {/* {error && <div className="error-txt">{error}</div>} */}

              <div className="field input">
                <label>Email Address</label>
                <input
                  type="email"
                  id="username"
                  // value={email}
                  placeholder="Enter username"
                  // onChange={(e) => handleInputChange(e, "email")}
                />
              </div>
              <div className="field input">
                <label>Password</label>
                <input
                  type="password"
                  id="pass"
                  placeholder="Password"
                  // value={pass}
                  // onChange={(e) => handleInputChange(e, "pass")}
                />
                <i className="bi bi-eye"></i>
              </div>

              <div className="field button">
                <Link to='/driver-dashbord'>
                <input
                  type="submit"
                  value="Submit"
                  // onClick={loginSubmit}
                  style={{ background: "#407BFF" }}
                />
                </Link>
              </div>
            </form>
            <div className="link">
              <Link to="/for-pass">
                <p>Forgot password?</p>
              </Link>
              Create a new account? <Link to="/driver-signup">Sign-up</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DriverLogin;
