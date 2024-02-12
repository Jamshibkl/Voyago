import React from "react";
import "./SignInUp.css";
import NavBar from "../NavBar/NavBar";

function SignInUp() {
    // const container = document.getElementById("container");
    // const registerBtn = document.getElementById("register");
    // const loginBtn = document.getElementById("login");

    // registerBtn.addEventListener("click", () => {
    //   container.classList.add("active");
    // });

    // loginBtn.addEventListener("click", () => {
    //   container.classList.remove("active");
    // });

  return (
    <>
      <NavBar />
      <div className="main-container-sign">
        <div className="container1" id="container1">
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" class="icon"></a>
                <a href="#" class="icon"></a>
                <a href="#" class="icon"></a>
                <a href="#" class="icon"></a>
              </div>
              <span>or use your email for registeration</span>
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <button>Sign Up</button>
            </form>
          </div>

          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" class="icon"></a>
                <a href="#" class="icon"></a>
                <a href="#" class="icon"></a>
                <a href="#" class="icon"></a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button class="hidden" id="login">
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button class="hidden" id="register">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInUp;
