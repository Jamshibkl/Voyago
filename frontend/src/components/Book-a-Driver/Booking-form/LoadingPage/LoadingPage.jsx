import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar"; // Ensure this path is correct
import Footer from "../../../Footer/Footer"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCircleNotch, 
  faUserTie, 
  faEnvelope, 
  faPhone, 
  faIdCard, 
  faCheck, 
  faXmark,
  faLocationArrow,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";

function LoadingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Simulation logic restored from original file
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => navigate("/driver-confirm");

  const handleReject = () => {
    if (window.confirm("Are you sure you want to reject this driver?")) {
      navigate("/book-a-driver");
    }
  };

  // Modern UI Animations & Visual Patterns
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
      <main className="flex-grow pt-20 lg:pt-24 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

        <div className="container max-w-4xl mx-auto px-6 relative z-10 py-12">
          
          {loading ? (
            /* ================= LOADING STATE ================= */
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#2c7bfe] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <FontAwesomeIcon icon={faCircleNotch} className="text-6xl text-[#2c7bfe] animate-spin relative z-10" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-5xl font-black text-[#1f194c] tracking-tight">Searching for Drivers...</h1>
                <p className="text-slate-500 font-medium">Sit back and relax! We are matching you with the best professional nearby.</p>
              </div>
              {/* Fake progress dots */}
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-[#2c7bfe] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#2c7bfe] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-[#2c7bfe] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          ) : (
            /* ================= DRIVER FOUND STATE ================= */
            <div className="animate-fade-in-up space-y-8">
              
              {/* Status Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 border border-green-100 shadow-sm mb-6">
                    <FontAwesomeIcon icon={faCheck} className="text-sm" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Driver match found</span>
                </div>
                <h2 className="text-4xl font-black text-[#1f194c] tracking-tight">Driver Details</h2>
                <p className="text-slate-500 font-medium mt-2">A professional driver is ready to pick you up.</p>
              </div>

              {/* Main Profile Card */}
              <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-12 border border-white shadow-[0_30px_60px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Left: Driver Visual */}
                <div className="shrink-0 text-center space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#2c7bfe] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s" 
                      alt="Driver" 
                      className="relative w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover animate-float"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1f194c]">Michael Scott</h3>
                    <p className="text-[#2c7bfe] text-[10px] font-black uppercase tracking-widest">Executive Driver</p>
                  </div>
                </div>

                {/* Right: Informational Table */}
                <div className="flex-grow w-full space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { label: "Email Address", val: "driver@example.com", icon: faEnvelope },
                      { label: "Mobile Number", val: "+91 1234567890", icon: faPhone },
                      { label: "Driver Identity", val: "ID: #DR12345", icon: faIdCard },
                      { label: "Match Status", val: "Instant Ready", icon: faShieldHalved }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50/50 p-4 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#2c7bfe] text-xs">
                              <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <div>
                               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                               <p className="text-sm font-bold text-slate-700">{item.val}</p>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button 
                      onClick={handleAccept}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-green-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                    >
                      Accept Ride <FontAwesomeIcon icon={faCheck} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button 
                      onClick={handleReject}
                      className="flex-1 bg-white border-2 border-red-50 text-red-500 hover:border-red-500 font-black py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                    >
                      Reject Driver <FontAwesomeIcon icon={faXmark} className="group-hover:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Footer Notice */}
              <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Verified Secure Match &bull; Encryption Active
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LoadingPage;