import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar"; 
import Footer from "../../../Footer/Footer"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlay, 
  faStop, 
  faLocationDot, 
  faCircleCheck, 
  faIndianRupeeSign,
  faClock,
  faTriangleExclamation,
  faRoute
} from "@fortawesome/free-solid-svg-icons";

function RideTime() {
  const navigate = useNavigate();
  const [displayTime, setDisplayTime] = useState("00:00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [error, setError] = useState("");

  // Timer Logic restored from original file
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(update, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning, elapsedTime]);

  const start = () => {
    if (!isRunning) {
      setStartTime(Date.now() - elapsedTime);
      setIsRunning(true);
      setError("");
    } else {
      setError("Ride already started.");
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      navigate("/destination");
      setElapsedTime(Date.now() - startTime);
    } else {
      setError("This journey hasn't started yet.");
    }
  };

  const update = () => {
    const currentTime = Date.now();
    const newElapsedTime = currentTime - startTime;

    let hours = Math.floor(newElapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((newElapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((newElapsedTime / 1000) % 60);
    let milliseconds = Math.floor((newElapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    setDisplayTime(`${hours}:${minutes}:${seconds}:${milliseconds}`);
  };

  // Modern UI Animations
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
      <main className="flex-grow pt-20 lg:pt-24 flex items-center justify-center relative py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#2c7bfe] border border-blue-100 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2c7bfe]"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Live Trip Tracking</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-[#1f194c] tracking-tight">Your Journey, <span className="text-[#2c7bfe]">Timed.</span></h1>
            <p className="text-slate-500 font-medium mt-4">Start your ride when the driver arrives to ensure accurate billing.</p>
          </div>

          {/* ================= MAIN TIMER CARD ================= */}
          <div className="bg-white/80 backdrop-blur-2xl rounded-[4rem] p-10 lg:p-20 border border-white shadow-[0_30px_100px_rgba(0,0,0,0.06)] animate-fade-in-up delay-100 text-center relative overflow-hidden">
            
            {/* Display Background Icon */}
            <div className="absolute -top-10 -right-10 opacity-[0.03] text-[200px] text-[#1f194c] select-none pointer-events-none">
              <FontAwesomeIcon icon={faRoute} />
            </div>

            <div className="relative z-10 space-y-12">
              
              {/* Error Message */}
              {error && (
                <div className="flex items-center justify-center gap-2 text-red-500 bg-red-50 py-2 px-4 rounded-xl text-[10px] font-black uppercase tracking-wider mx-auto w-max animate-fade-in-up">
                  <FontAwesomeIcon icon={faTriangleExclamation} /> {error}
                </div>
              )}

              {/* Stopwatch Display */}
              <div className="space-y-2">
                <div className="text-7xl lg:text-9xl font-black text-[#1f194c] tabular-nums tracking-tighter drop-shadow-sm">
                  {displayTime}
                </div>
                <div className="flex justify-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  <span>Hrs</span>
                  <span>Min</span>
                  <span>Sec</span>
                  <span>Ms</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={start}
                  disabled={isRunning}
                  className={`px-12 py-5 rounded-3xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                    isRunning 
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200" 
                    : "bg-[#2c7bfe] text-white hover:bg-blue-600 hover:-translate-y-1 shadow-blue-500/20 active:scale-95"
                  }`}
                >
                  <FontAwesomeIcon icon={faPlay} className="text-sm" /> Start Journey
                </button>
                
                <button 
                  onClick={stop}
                  className="px-12 py-5 rounded-3xl bg-white border-2 border-red-50 text-red-500 font-black text-lg shadow-sm hover:border-red-500 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <FontAwesomeIcon icon={faStop} className="text-sm" /> End Ride
                </button>
              </div>

            </div>
          </div>

          {/* ================= TRIP INFO TILES ================= */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in-up delay-200">
             {[
               { label: "Pickup location", val: "M.G. Road, Kochi", icon: faLocationDot, color: "text-blue-500" },
               { label: "Estimated Fare", val: "₹150/hr", icon: faIndianRupeeSign, color: "text-green-500" },
               { label: "Safety status", val: "Vetted Secure", icon: faCircleCheck, color: "text-purple-500" }
             ].map((tile, i) => (
               <div key={i} className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-slate-100 hover:bg-white transition-colors group">
                  <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm ${tile.color} group-hover:scale-110 transition-transform`}>
                        <FontAwesomeIcon icon={tile.icon} />
                     </div>
                     <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{tile.label}</p>
                        <p className="text-sm font-bold text-slate-700">{tile.val}</p>
                     </div>
                  </div>
               </div>
             ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RideTime;