import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash, 
  faArrowRight, 
  faUserGear,
  faCircleCheck,
  faTriangleExclamation,
  faIdCardClip,
  faWallet,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";

// Assets
import DriverHero from "../../../Assets/Mobile login-pana.svg";

function DriverLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Restore logic from original file
  const handleInputChange = (e, type) => {
    setError("");
    if (type === "email") {
      setEmail(e.target.value);
    } else {
      setPass(e.target.value);
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (email === "" || pass === "") {
      setError("All fields are required!"); //
    } else {
      setError("");
      // Logic for successful login redirection
      navigate("/driver-dashbord"); 
    }
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-blob { animation: blob 10s infinite; }
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="font-poppins text-slate-900 bg-[#fdfdff] overflow-x-hidden selection:bg-blue-100 flex flex-col min-h-screen">
      <style>{customStyles}</style>
      <NavBar />

      {/* Main Wrapper with Safe Zone Padding for Slim Navbar */}
      <main className="flex-grow pt-20 lg:pt-24 relative flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        
        {/* Animated Background Mesh */}
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* LEFT SIDE: BRAND CONTENT & PERKS */}
            <div className="flex-1 space-y-10 animate-fade-in-up">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#2c7bfe] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                  <FontAwesomeIcon icon={faUserGear} /> Driver Partner Portal
                </div>
                <h1 className="text-4xl lg:text-7xl font-black text-[#1f194c] leading-[1.1] tracking-tighter">
                  Welcome Back, <br /> <span className="text-[#2c7bfe]">Partner.</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-xl font-medium">
                  Access your dashboard to manage rides, track earnings, and provide premium service to the Voyago community.
                </p>
              </div>

              {/* Perk Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {[
                   { icon: faWallet, text: "Weekly Payouts", color: "text-green-500", bg: "bg-green-50" },
                   { icon: faShieldHalved, text: "24/7 Security", color: "text-blue-500", bg: "bg-blue-50" },
                   { icon: faIdCardClip, text: "Verified Leads", color: "text-purple-500", bg: "bg-purple-50" }
                 ].map((perk, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-sm">
                      <div className={`w-8 h-8 rounded-lg ${perk.bg} ${perk.color} flex items-center justify-center text-xs`}>
                        <FontAwesomeIcon icon={perk.icon} />
                      </div>
                      <span className="text-xs font-bold text-slate-600">{perk.text}</span>
                   </div>
                 ))}
              </div>

              {/* Illustration */}
              <div className="relative group max-w-md mx-auto lg:mx-0 pt-6">
                <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] rotate-3 -z-10"></div>
                <img src={DriverHero} alt="Driver Support" className="w-full h-auto animate-float drop-shadow-2xl" />
              </div>
            </div>

            {/* RIGHT SIDE: GLASSMORPHIC LOGIN CARD */}
            <div className="w-full lg:w-[480px] animate-fade-in-up delay-100">
              <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-12 border border-white shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-3xl font-black text-[#1f194c] tracking-tight">Sign In</h3>
                  <p className="text-slate-400 font-semibold text-sm mt-2">Enter your credentials to access your account.</p>
                </div>

                <form onSubmit={loginSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors">
                        <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                      </div>
                      <input
                        type="email"
                        placeholder="driver@voyago.com"
                        className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-2xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                        value={email}
                        onChange={(e) => handleInputChange(e, "email")}
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Password</label>
                      <Link to="/for-pass" className="text-[10px] font-black text-[#2c7bfe] hover:underline uppercase tracking-widest">Forgot?</Link>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors">
                        <FontAwesomeIcon icon={faLock} className="text-sm" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full pl-11 pr-12 py-4 bg-gray-50/50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-2xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                        value={pass}
                        onChange={(e) => handleInputChange(e, "pass")}
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-slate-500 transition-colors"
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-sm" />
                      </button>
                    </div>
                  </div>

                  {/* Error Feedback */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-2xl text-xs font-bold animate-fade-in-up">
                      <FontAwesomeIcon icon={faTriangleExclamation} /> {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group text-lg mt-4"
                  >
                    Login to Dashboard <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                  <p className="text-sm text-slate-400 font-medium">
                    New to the fleet? <Link to="/driver-signup" className="text-[#2c7bfe] font-black hover:underline ml-1">Sign up partner</Link>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DriverLogin;