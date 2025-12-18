import React, { useState } from "react";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import NavBar from "../Driver-navbar/Navbar"; // Internal dashboard top bar
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCar, 
  faHandHoldingDollar, 
  faHourglassStart, 
  faCircle, 
  faArrowTrendUp,
  faBell,
  faGear
} from "@fortawesome/free-solid-svg-icons";

function DriverDashboard() {
  const [rideStatus, setRideStatus] = useState("offline");

  // Dummy data
  const stats = [
    { label: "Total Rides", val: "42", icon: faCar, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Total Income", val: "₹2,700", icon: faHandHoldingDollar, color: "text-green-500", bg: "bg-green-50" },
    { label: "Total Hours", val: "120h", icon: faHourglassStart, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  const toggleRideStatus = () => {
    setRideStatus((prev) => (prev === "offline" ? "online" : "offline"));
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="font-poppins text-slate-900 bg-[#f8faff] min-h-screen lg:flex selection:bg-blue-100">
      <style>{customStyles}</style>
      
      {/* 1. Sidebar */}
      <DriverSideBar />

      {/* 2. Main Body */}
      <main className="flex-grow lg:ml-72 transition-all duration-500 flex flex-col">
        
        {/* Dashboard Top Header */}
        <div className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center">
            <div>
                <h2 className="text-xl font-black text-[#1f194c] tracking-tight">Executive Dashboard</h2>
            </div>
            <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-xl hover:bg-slate-50 text-slate-400 flex items-center justify-center transition-colors"><FontAwesomeIcon icon={faBell} /></button>
                <div className="h-8 w-px bg-slate-100 mx-2"></div>
                <div className="flex items-center gap-3">
                   <img src="https://i.pravatar.cc/100?img=12" alt="Profile" className="w-9 h-9 rounded-xl object-cover border border-slate-200" />
                   <span className="text-sm font-bold text-slate-700 hidden sm:inline">John Doe</span>
                </div>
            </div>
        </div>

        {/* Dashboard Content Area */}
        <div className="p-6 lg:p-10 flex-grow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-8">
            
            {/* --- Welcome Banner --- */}
            <div className="bg-gradient-to-r from-[#1f194c] to-[#2c7bfe] rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl animate-fade-in-up">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
               <div className="relative z-10 grid lg:grid-cols-2 items-center gap-8">
                  <div className="space-y-4">
                     <h1 className="text-3xl lg:text-4xl font-black leading-tight">Ready to earn smarter, <br />John?</h1>
                     <p className="text-blue-100 text-sm font-medium leading-relaxed max-w-md">
                        Voyago provides real-time traffic heatmaps and instant booking alerts to help you reach your daily goals faster.
                     </p>
                     <button className="px-6 py-3 bg-white text-[#2c7bfe] font-black rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:-translate-y-0.5 transition-all">View Heatmaps</button>
                  </div>
                  <div className="hidden lg:flex justify-end">
                     {/* Placeholder for Banner Image */}
                     <div className="w-full max-w-xs aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center italic text-xs text-white/40">Illustration Frame</div>
                  </div>
               </div>
            </div>

            {/* --- Stats & Status Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-100">
               
               {/* 3 Stats Cards */}
               {stats.map((stat, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm`}>
                            <FontAwesomeIcon icon={stat.icon} />
                        </div>
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Active</span>
                    </div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-black text-[#1f194c] tracking-tight">{stat.val}</h3>
                    <div className="mt-4 flex items-center gap-1.5 text-green-500 font-bold text-[10px]">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> <span>+12.5% vs last week</span>
                    </div>
                 </div>
               ))}

               {/* Status Toggle Card */}
               <div className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                     <p className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] mb-4">Set Your Status</p>
                     
                     <button 
                        onClick={toggleRideStatus}
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-xl transition-all active:scale-95 mb-4 ${
                          rideStatus === 'online' 
                          ? 'bg-green-500 text-white shadow-green-500/20' 
                          : 'bg-slate-100 text-slate-400'
                        }`}
                     >
                        <div className={`absolute w-full h-full rounded-full border-4 border-green-500/20 animate-ping ${rideStatus === 'online' ? 'block' : 'hidden'}`}></div>
                        <FontAwesomeIcon icon={faCircle} className={rideStatus === 'online' ? 'text-xs' : 'text-xs opacity-40'} />
                     </button>
                     
                     <h4 className={`text-sm font-black uppercase tracking-[0.2em] ${rideStatus === 'online' ? 'text-green-500' : 'text-slate-400'}`}>
                        {rideStatus}
                     </h4>
                  </div>
               </div>

            </div>

          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default DriverDashboard;