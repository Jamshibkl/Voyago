import React, { useState } from "react";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import Navbar from "../Driver-navbar/Navbar";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCar, 
  faUser, 
  faPhone, 
  faClock, 
  faIndianRupeeSign, 
  faMapPin,
  faArrowTrendUp,
  faFilter,
  faFileExport,
  faCircleCheck,
  faRoute
} from "@fortawesome/free-solid-svg-icons";

function DriverRide() {
  const driverEmail = localStorage.getItem("email") || "john.doe@example.com";

  // Mock data restored from original logic
  const [rides] = useState([
    {
      driverEmail: "john.doe@example.com",
      location: "Downtown Executive Hub",
      UserName: "Alice Johnson",
      UserMobile: "9876543210",
      tolatHour: "2",
      totalCharge: "300",
      date: "Dec 15, 2025"
    },
    {
      driverEmail: "john.doe@example.com",
      location: "International Airport T3",
      UserName: "Bob Smith",
      UserMobile: "8765432109",
      tolatHour: "3",
      totalCharge: "450",
      date: "Dec 16, 2025"
    },
    {
      driverEmail: "jane.doe@example.com",
      location: "Luxury Mall Plaza",
      UserName: "Charlie Brown",
      UserMobile: "7654321098",
      tolatHour: "1.5",
      totalCharge: "200",
      date: "Dec 17, 2025"
    },
  ]);

  // Filter logic
  const myRides = rides.filter(ride => ride.driverEmail === driverEmail);

  // Analytics Calculations
  const totalEarnings = myRides.reduce((acc, curr) => acc + parseInt(curr.totalCharge), 0);

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
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

          <div className="relative z-10 max-w-7xl mx-auto space-y-8 animate-fade-in-up">
            
            {/* ================= HEADER & ACTIONS ================= */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <div>
                  <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight">Ride Analytics</h1>
                  <p className="text-slate-500 font-medium mt-1">Review your completed journeys and earnings performance.</p>
               </div>
               <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                     <FontAwesomeIcon icon={faFilter} className="text-[10px]" /> Filter
                  </button>
                  <button className="px-5 py-2.5 bg-[#1f194c] text-white rounded-xl text-xs font-bold hover:bg-black transition-all flex items-center gap-2 shadow-lg shadow-slate-900/10">
                     <FontAwesomeIcon icon={faFileExport} className="text-[10px]" /> Export PDF
                  </button>
               </div>
            </div>

            {/* ================= SUMMARY STATS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[
                 { label: "Total Completed", val: myRides.length, icon: faCircleCheck, color: "text-blue-500", bg: "bg-blue-50" },
                 { label: "Gross Earnings", val: `₹${totalEarnings}`, icon: faIndianRupeeSign, color: "text-green-500", bg: "bg-green-50" },
                 { label: "Efficiency Rate", val: "94%", icon: faArrowTrendUp, color: "text-purple-500", bg: "bg-purple-50" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white p-6 rounded-3xl border border-white shadow-sm flex items-center gap-5 group hover:shadow-md transition-all">
                    <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                       <FontAwesomeIcon icon={stat.icon} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                       <p className="text-xl font-black text-[#1f194c] leading-none">{stat.val}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* ================= MAIN DATA TABLE ================= */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
               <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-slate-50/50 border-b border-slate-100">
                          <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                             <FontAwesomeIcon icon={faMapPin} className="mr-2 text-[#2c7bfe]" /> Pickup Location
                          </th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                             <FontAwesomeIcon icon={faUser} className="mr-2 text-[#2c7bfe]" /> Passenger
                          </th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                             <FontAwesomeIcon icon={faClock} className="mr-2 text-[#2c7bfe]" /> Duration
                          </th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                             <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-2 text-[#2c7bfe]" /> Fare
                          </th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {myRides.length > 0 ? myRides.map((ride, index) => (
                         <tr key={index} className="hover:bg-blue-50/30 transition-all group">
                            <td className="px-8 py-6">
                               <p className="text-sm font-bold text-[#1f194c]">{ride.location}</p>
                               <p className="text-[10px] text-slate-400 font-medium mt-1">{ride.date}</p>
                            </td>
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-[#2c7bfe] group-hover:text-white transition-colors">
                                     {ride.UserName.charAt(0)}
                                  </div>
                                  <div>
                                     <p className="text-sm font-bold text-slate-700 leading-none">{ride.UserName}</p>
                                     <p className="text-[10px] text-slate-400 font-medium mt-1">{ride.UserMobile}</p>
                                  </div>
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <span className="text-xs font-black text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                                  {ride.tolatHour} Hours
                               </span>
                            </td>
                            <td className="px-8 py-6 text-sm font-black text-[#1f194c]">
                               ₹{ride.totalCharge}
                            </td>
                            <td className="px-8 py-6 text-right">
                               <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-100">
                                  <FontAwesomeIcon icon={faCircleCheck} className="text-[8px]" /> Completed
                               </span>
                            </td>
                         </tr>
                       )) : (
                         /* Empty State */
                         <tr>
                            <td colSpan="5" className="px-8 py-20 text-center">
                               <div className="flex flex-col items-center gap-4">
                                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 text-2xl">
                                     <FontAwesomeIcon icon={faRoute} />
                                  </div>
                                  <p className="text-slate-400 font-bold">No ride history found for your account.</p>
                               </div>
                            </td>
                         </tr>
                       )}
                    </tbody>
                  </table>
               </div>
            </div>

          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default DriverRide;