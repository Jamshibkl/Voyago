import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar/NavBar"; 
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faLocationArrow,
  faPhone,
  faCalendarDay,
  faClock,
  faCar,
  faArrowRight,
  faShieldHalved,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

// Assets
import BookingImg from "../../../Assets/book a drive image.jpg"; 

function BookADriver() {
  const navigate = useNavigate();
  
  // --- Form State ---
  const [mobile, setMobile] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [cabType, setCabType] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg || error) {
      const timer = setTimeout(() => {
        setMsg("");
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [msg, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const selectedDate = new Date(pickupDate);

    if (selectedDate < currentDate) {
      setError("Please select a future date and time.");
      return;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
      setError("Mobile number must be 10 digits.");
      return;
    }

    if (mobile && pickupLocation && dropoffLocation && pickupDate && pickupTime && cabType) {
      localStorage.setItem("pickup", pickupLocation);
      localStorage.setItem("dropoffLocation", dropoffLocation);
      localStorage.setItem("pickupTime", pickupTime);
      localStorage.setItem("pickupDate", pickupDate);
      localStorage.setItem("cabType", cabType);
      localStorage.setItem("mobile", mobile);

      setMsg("Driver requested successfully!");
      setTimeout(() => navigate("/find-a-driver"), 1000);
    } else {
      setError("All fields are required!");
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
      <Navbar />

      {/* Main Wrapper with spacing to clear Navbar */}
      <main className="flex-grow pt-24 lg:pt-32">
        
        <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-[#fdfdff]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10 pb-16">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              
              {/* LEFT: COMPACT BOOKING ENGINE */}
              <div className="w-full lg:w-[420px] animate-fade-in-up delay-100">
                <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white">
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-sm">
                    <img src={BookingImg} alt="Booking" className="w-full h-24 object-cover" />
                  </div>

                  <h2 className="text-2xl font-bold text-[#1f194c] mb-1 tracking-tight">Request a Ride</h2>
                  <p className="text-xs text-slate-400 mb-6 font-semibold uppercase tracking-wider">Secure Premium Travel</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2c7bfe] transition-colors">
                        <FontAwesomeIcon icon={faMapPin} className="text-xs" />
                      </div>
                      <input
                        type="text"
                        placeholder="Pickup Location"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#2c7bfe] transition-all font-medium"
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2c7bfe] transition-colors">
                        <FontAwesomeIcon icon={faLocationArrow} className="text-xs" />
                      </div>
                      <input
                        type="text"
                        placeholder="Dropoff Location"
                        value={dropoffLocation}
                        onChange={(e) => setDropoffLocation(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#2c7bfe] transition-all font-medium"
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#2c7bfe] transition-colors">
                        <FontAwesomeIcon icon={faPhone} className="text-xs" />
                      </div>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#2c7bfe] transition-all font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-slate-100 text-slate-900 text-[11px] rounded-xl focus:outline-none focus:border-[#2c7bfe] font-bold"
                        />
                        <input
                            type="time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-slate-100 text-slate-900 text-[11px] rounded-xl focus:outline-none focus:border-[#2c7bfe] font-bold"
                        />
                    </div>

                    <div className="relative">
                      <select 
                        value={cabType}
                        onChange={(e) => setCabType(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-slate-100 text-slate-900 text-sm rounded-xl focus:outline-none focus:border-[#2c7bfe] font-bold appearance-none cursor-pointer"
                      >
                        <option value="">Select Cab Type</option>
                        <option value="Luxury">Luxury Sedan</option>
                        <option value="SUV">SUV (6-Seater)</option>
                        <option value="Sedan">Compact Sedan</option>
                      </select>
                    </div>

                    {(error || msg) && (
                        <div className={`text-center py-2 px-4 rounded-lg text-[10px] font-bold animate-fade-in-up ${error ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                            {error || msg}
                        </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group text-sm mt-4"
                    >
                      Find Drivers <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>

              {/* RIGHT: REDUCED SCALE HEADLINE & LIVE MAP */}
              <div className="hidden lg:flex flex-1 flex-col items-start space-y-8 animate-fade-in-up delay-200">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Mapping Active</span>
                  </div>
                  
                  {/* Reduced Font Size from 8xl to 6xl */}
                  <h1 className="text-5xl lg:text-6xl font-black text-[#1f194c] leading-[1.1] tracking-tight">
                    Premium Travel, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c7bfe] to-purple-600">
                      Starts Here.
                    </span>
                  </h1>
                  
                  <p className="text-base text-slate-500 max-w-lg leading-relaxed font-medium">
                    Our intelligent dispatch system connects you with elite drivers in under 60 seconds. Sit back and enjoy a seamless commute.
                  </p>
                </div>

                {/* Compact Map Simulation */}
                <div className="relative w-full max-w-lg h-[320px] bg-[#f0f4ff] rounded-[3rem] shadow-2xl border-[8px] border-white overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/sv85rtoxx/Map-Animation.gif')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-[15s]"></div>
                  
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-white">
                    <div className="w-10 h-10 bg-blue-50 text-[#2c7bfe] rounded-xl flex items-center justify-center text-lg shadow-sm"><FontAwesomeIcon icon={faShieldHalved} /></div>
                    <div>
                       <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Status</p>
                       <p className="font-bold text-[#1f194c] text-sm">Verified Driver</p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float animation-delay-2000 border border-white">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-lg shadow-sm"><FontAwesomeIcon icon={faCircleCheck} /></div>
                    <div>
                       <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Match</p>
                       <p className="font-bold text-[#1f194c] text-sm">Instant Ready</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BookADriver;