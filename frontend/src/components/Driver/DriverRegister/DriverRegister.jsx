import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./DriverRegister.css";

function SignInUp() {
  // const navigate = useNavigate();
  // const [driver, setDriver] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [pass1, setPass1] = useState("");
  // const [pass2, setPass2] = useState("");
  // const [adharId, setAdharId] = useState("");
  // const [adharImg, setAdharImg] = useState("");
  // const [license, setLicense] = useState("");
  // const [licenseImg, setLicenseImg] = useState("");
  // const [profileImg, setProfileImg] = useState("");
  // const [location, setLocation] = useState("");
  // const [msg, setMsg] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     driver !== "" &&
  //     email !== "" &&
  //     mobile !== "" &&
  //     pass1 !== "" &&
  //     pass2 !== "" &&
  //     adharId !== "" &&
  //     adharImg !== "" &&
  //     license !== "" &&
  //     licenseImg !== "" &&
  //     profileImg !== "" &&
  //     location !== ""
  //   ) {
  //     if (mobile.length !== 10 || isNaN(mobile)) {
  //       setMsg("Mobile number must be 10 digits.");
  //       return;
  //     }
  //     if (adharId.length !== 12 || isNaN(adharId)) {
  //       setMsg("Adhar number must be 12 digits.");
  //       return;
  //     }
  //     if (license.length !== 16 || isNaN(license)) {
  //       setMsg("License number must be 16 digits.");
  //       return;
  //     }
  //     if (pass1 === pass2) {
  //       setMsg("Form submitted successfully!");
  //       navigate("/driver-login");
  //     } else {
  //       setMsg("Passwords do not match!");
  //     }
  //   } else {
  //     setMsg("All fields are required!");
  //   }
  // };

  return (
    <div className="driver-signup-fom">
      <div className="wrapper">
        <section className="form singup">
          <header>Create Your Driver Account</header>
          <form action="" method="post">
            {/* {msg !== "" && <div className="error-txt">{msg}</div>} */}
            <div className="loginsection">
              <div className="login-section-left">
                <div className="field input">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    // value={driver}
                    // onChange={(e) => setDriver(e.target.value)}
                  />
                </div>

                <div className="field input">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="field input">
                  <label>Mobile</label>
                  <input
                    type="number"
                    placeholder="Enter your mobile number"
                    // value={mobile}
                    // onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="field input">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    // value={pass1}
                    // onChange={(e) => setPass1(e.target.value)}
                  />
                </div>
                <div className="field input">
                  <label>Repeat Password</label>
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    // value={pass2}
                    // onChange={(e) => setPass2(e.target.value)}
                  />
                </div>
              </div>
              <div className="login-section-right">
                <div className="field input">
                  <label>Profile photo</label>
                  <input
                    type="file"
                    // onChange={(e) => setProfileImg(e.target.files[0])}
                  />
                </div>
                <div className="field input">
                  <label>Adhar photo</label>
                  <input
                    type="file"
                    // onChange={(e) => setAdharImg(e.target.files[0])}
                  />
                </div>
                <div className="field input">
                  <label>License photo</label>
                  <input
                    type="file"
                    // onChange={(e) => setLicenseImg(e.target.files[0])}
                  />
                </div>
                <div className="field input">
                  <input
                    type="text"
                    placeholder="Adhar Number"
                    // value={adharId}
                    // onChange={(e) => setAdharId(e.target.value)}
                  />
                </div>
                <div className="field input">
                  <input
                    type="text"
                    placeholder="License number"
                    // value={license}
                    // onChange={(e) => setLicense(e.target.value)}
                  />
                </div>
                <div className="field input">
                  <input
                    type="text"
                    placeholder="Location"
                    // value={location}
                    // onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="field button">
                  <Link to='/driver-login'>
                  <input
                    type="submit"
                    className="btn"
                    // onClick={handleSubmit}
                  />
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div className="link">
            Already signed up? <Link to="/driver-login">Login now</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignInUp;
