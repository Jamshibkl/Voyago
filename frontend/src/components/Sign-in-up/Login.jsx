import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All fields are required!");
    }
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  // Modern Background Animations (Same as Home)
  const customStyles = `
    @keyframes blob { 
      0% { transform: translate(0px, 0px) scale(1); } 
      33% { transform: translate(30px, -50px) scale(1.1); } 
      66% { transform: translate(-20px, 20px) scale(0.9); } 
      100% { transform: translate(0px, 0px) scale(1); } 
    }
    .animate-blob { animation: blob 10s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fdfdff] font-poppins selection:bg-blue-100">
      <style>{customStyles}</style>
      <Navbar />
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] pt-20 px-4">
        
        {/* Glassmorphic Card */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 sm:p-10 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#1f194c] mb-2">Welcome Back</h2>
            <p className="text-slate-500 text-sm">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2c7bfe] transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 font-medium"
                  value={loginInfo.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2c7bfe] transition-colors">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 font-medium"
                  value={loginInfo.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-xs font-bold text-[#2c7bfe] hover:underline">Forgot Password?</a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Sign In <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link to="/sign-in" className="font-bold text-[#2c7bfe] hover:text-blue-700 transition-colors">
              Sign up free
            </Link>
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;