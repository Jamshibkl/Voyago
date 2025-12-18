import React, { useState } from "react";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import Navbar from "../Driver-navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBell, 
  faMapPin, 
  faUser, 
  faPhone, 
  faCalendarDay, 
  faClock, 
  faKey, 
  faCircleCheck, 
  faXmark,
  faPlay,
  faFlagCheckered,
  faTriangleExclamation,
  faInbox
} from "@fortawesome/free-solid-svg-icons";

function DriverNotification() {
  const navigate = useNavigate();

  // State & Logic restored from original file
  const [bookings, setBookings] = useState([
    {
      randomNum: "123456",
      pickup: "Main Street, NY Hub",
      username: "John Doe",
      mobile: "9876543210",
      pickupDate: "2024-11-25",
      pickupTime: "10:00 AM",
    },
  ]);

  const [conform, setConform] = useState(null);
  const randomNum = localStorage.getItem("randomNum") || "123456"; // Mocked for visual testing
  const cancel = "Cancel";
  const accept = "Accept";

  const generateRandomNumber = () => Math.floor(100000 + Math.random() * 900000);
  const RandomOTP = "552910"; // Visual placeholder based on logic

  const handleConform = (e) => {
    e.preventDefault();
    localStorage.setItem("StartOtp", generateRandomNumber());
    // Visual feedback for start could be added here
  };

  const handleFinish = (e) => {
    e.preventDefault();
    localStorage.setItem("FinishCode", generateRandomNumber());
    localStorage.setItem("randomNum", "");
    navigate("/driver-Qrcode");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    localStorage.setItem("cancel", cancel);
    localStorage.setItem("randomNum", "");
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConform(true);
    localStorage.setItem("accept", accept);
    localStorage.setItem("cancel", "");
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pulse-blue { 0%, 100% { box-shadow: 0 0 0 0 rgba(44, 123, 254, 0.4); } 50% { box-shadow: 0 0 0 15px rgba(44, 123, 254, 0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .animate-pulse-blue { animation: pulse-blue 2s infinite; }
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="font-poppins text-slate-900 bg-[#f8faff] min-h-screen lg:flex selection:bg-blue-100">
      <style>{customStyles}</style>
      
      {/* Sidebar Integration */}
      <DriverSideBar />

      <main className="flex-grow lg:ml-72 transition-all duration-500 flex flex-col">
        <Navbar />

        <div className="p-6 lg:p-10 flex-grow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            
            {/* ================= HEADER SECTION ================= */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
               <div className="text-center sm:text-left">
                  <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight">Notification Center</h1>
                  <p className="text-slate-500 font-medium mt-1">Manage your active booking requests and ride status.</p>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Live Dispatch Active</span>
               </div>
            </div>

            {/* ================= BOOKING FEED ================= */}
            <div className="space-y-6">
              {bookings.some(b => b.randomNum === randomNum) ? (
                bookings.map((booking, index) => (
                  booking.randomNum === randomNum && (
                    <div key={index} className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden animate-fade-in-up">
                        
                        {/* Booking Header Card */}
                        <div className="bg-[#1f194c] p-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-[#2c7bfe] rounded-2xl flex items-center justify-center text-white text-xl animate-pulse-blue">
                                 <FontAwesomeIcon icon={faBell} />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black text-[#2c7bfe] uppercase tracking-[0.2em]">Priority Request</p>
                                 <h3 className="text-white font-bold text-lg leading-none mt-1">New Booking Received</h3>
                              </div>
                           </div>
                           <div className="text-white/40 text-[10px] font-black uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-lg">
                              ID: #{booking.randomNum}
                           </div>
                        </div>

                        {/* Booking Info Grid */}
                        <div className="p-8 lg:p-10">
                           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                              {[
                                { label: "Pickup From", val: booking.pickup, icon: faMapPin, color: "text-[#2c7bfe]" },
                                { label: "Passenger", val: booking.username, icon: faUser, color: "text-slate-400" },
                                { label: "Contact No", val: booking.mobile, icon: faPhone, color: "text-slate-400" },
                                { label: "Scheduled Date", val: booking.pickupDate, icon: faCalendarDay, color: "text-purple-500" },
                                { label: "Pickup Time", val: booking.pickupTime, icon: faClock, color: "text-purple-500" }
                              ].map((item, idx) => (
                                <div key={idx} className="space-y-1.5 group">
                                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                      <FontAwesomeIcon icon={item.icon} className={`text-[8px] ${item.color}`} /> {item.label}
                                   </p>
                                   <p className="text-slate-700 font-bold group-hover:text-[#1f194c] transition-colors">{item.val}</p>
                                </div>
                              ))}
                           </div>

                           {/* Dynamic Action Footer */}
                           <div className="pt-8 border-t border-slate-50">
                              {conform === null ? (
                                 /* --- Step 1: Confirm/Cancel --- */
                                 <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                      onClick={handleSubmit}
                                      className="flex-1 bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
                                    >
                                       Accept Booking <FontAwesomeIcon icon={faCircleCheck} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                    <button 
                                      onClick={handleCancel}
                                      className="flex-1 bg-white border-2 border-red-50 text-red-500 hover:border-red-500 font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group"
                                    >
                                       Decline <FontAwesomeIcon icon={faXmark} className="group-hover:rotate-90 transition-transform" />
                                    </button>
                                 </div>
                              ) : (
                                 /* --- Step 2: In-Progress (Start/Finish) --- */
                                 <div className="space-y-8">
                                    <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                       <div className="flex items-center gap-4">
                                          <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#2c7bfe] text-xl">
                                             <FontAwesomeIcon icon={faKey} />
                                          </div>
                                          <div>
                                             <p className="text-[10px] font-black text-[#2c7bfe] uppercase tracking-widest">Verification Required</p>
                                             <p className="text-sm font-bold text-slate-600">Provide OTP to Passenger:</p>
                                          </div>
                                       </div>
                                       <div className="text-3xl font-black text-[#1f194c] tracking-[0.3em] tabular-nums bg-white px-8 py-3 rounded-2xl shadow-inner border border-slate-100">
                                          {RandomOTP}
                                       </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                       <button 
                                          onClick={handleConform}
                                          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
                                       >
                                          Start Trip <FontAwesomeIcon icon={faPlay} className="group-hover:translate-x-1 transition-transform" />
                                       </button>
                                       <button 
                                          onClick={handleFinish}
                                          className="flex-1 bg-[#1f194c] hover:bg-black text-white font-black py-4 rounded-2xl shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
                                       >
                                          Mark as Finished <FontAwesomeIcon icon={faFlagCheckered} className="group-hover:scale-110 transition-transform" />
                                       </button>
                                    </div>
                                 </div>
                              )}
                           </div>
                        </div>

                    </div>
                  )
                ))
              ) : (
                /* ================= EMPTY STATE ================= */
                <div className="text-center py-32 space-y-6">
                   <div className="relative inline-block">
                      <div className="absolute inset-0 bg-slate-200 rounded-full blur-2xl opacity-40"></div>
                      <div className="w-24 h-24 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm flex items-center justify-center text-slate-300 text-4xl relative z-10">
                         <FontAwesomeIcon icon={faInbox} />
                      </div>
                   </div>
                   <div>
                      <h2 className="text-2xl font-black text-[#1f194c] tracking-tight">All Caught Up!</h2>
                      <p className="text-slate-400 font-medium max-w-xs mx-auto mt-2">No active booking requests in your hub right now. Stay online to receive alerts.</p>
                   </div>
                   <button className="text-[10px] font-black text-[#2c7bfe] uppercase tracking-widest border-b-2 border-transparent hover:border-[#2c7bfe] transition-all">Refresh Hub</button>
                </div>
              )}
            </div>

          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default DriverNotification;