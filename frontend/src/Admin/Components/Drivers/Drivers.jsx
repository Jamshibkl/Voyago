import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserTie, 
  faEnvelope, 
  faPhone, 
  faCalendarDay, 
  faCheck, 
  faXmark, 
  faIdCard,
  faCircleExclamation,
  faFilter,
  faFileShield,
  faClockRotateLeft
} from "@fortawesome/free-solid-svg-icons";

function Drivers() {
  // Mock data representing the pending drivers
  const [pendingDrivers, setPendingDrivers] = useState([
    { id: 1, name: "John Doe", mobile: "7894561230", email: "abc@gmail.com", joined: "12-1-2024", status: "Pending" },
    { id: 2, name: "Michael Scott", mobile: "9876543210", email: "michael.s@voyago.com", joined: "15-1-2024", status: "Pending" },
    { id: 3, name: "Sarah Jenkins", mobile: "8877665544", email: "sarah.j@outlook.com", joined: "18-1-2024", status: "Pending" }
  ]);

  const handleAction = (id, action) => {
    alert(`Driver ${id} has been ${action === 'accept' ? 'Verified' : 'Rejected'}.`);
    setPendingDrivers(prev => prev.filter(d => d.id !== id));
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="font-poppins text-slate-900 bg-[#f8faff] min-h-screen flex selection:bg-blue-100">
      <style>{customStyles}</style>
      
      {/* Sidebar Integration */}
      <Sidebar />

      {/* Main Content Area (ml-72 clears fixed sidebar) */}
      <main className="flex-grow lg:ml-72 flex flex-col transition-all duration-500">
        <Navbar />

        <div className="p-8 lg:p-12 flex-grow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-10 animate-fade-in-up">
            
            {/* ================= HEADER SECTION ================= */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <div>
                  <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight uppercase">Driver Onboarding</h1>
                  <p className="text-slate-500 font-medium mt-1">Review and verify documentation for new driver partners.</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2">
                     <FontAwesomeIcon icon={faClockRotateLeft} className="text-blue-500 text-xs" />
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Last sync: Just now</span>
                  </div>
                  <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-[#2c7bfe] transition-colors shadow-sm">
                     <FontAwesomeIcon icon={faFilter} />
                  </button>
               </div>
            </div>

            {/* ================= SUMMARY STATS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[
                 { label: "Verification Pending", val: pendingDrivers.length, icon: faIdCard, color: "text-orange-500", bg: "bg-orange-50" },
                 { label: "Approved Today", val: "14", icon: faFileShield, color: "text-emerald-500", bg: "bg-emerald-50" },
                 { label: "Total Rejected", val: "03", icon: faXmark, color: "text-red-500", bg: "bg-red-50" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white p-6 rounded-3xl border border-white shadow-sm flex items-center gap-5 hover:shadow-md transition-all group">
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

            {/* ================= MODERN DATA TABLE ================= */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 px-4">
                  <div className="w-1.5 h-6 bg-orange-400 rounded-full"></div>
                  <h2 className="text-xl font-black text-[#1f194c] tracking-tight uppercase">Verification Queue</h2>
               </div>

               <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400">
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Driver Identity</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Contact Details</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Joined On</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {pendingDrivers.length > 0 ? pendingDrivers.map((driver) => (
                          <tr key={driver.id} className="hover:bg-blue-50/30 transition-all group">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-2xl bg-[#2c7bfe]/10 text-[#2c7bfe] flex items-center justify-center text-sm font-black border border-[#2c7bfe]/10 group-hover:bg-[#2c7bfe] group-hover:text-white transition-all">
                                  {driver.name.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#1f194c]">{driver.name}</p>
                                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide flex items-center gap-1 mt-0.5">
                                    <FontAwesomeIcon icon={faUserTie} className="text-[8px]" /> Driver Partner
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 space-y-1">
                               <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                  <FontAwesomeIcon icon={faEnvelope} className="text-[#2c7bfe] text-[10px] w-3" /> {driver.email}
                               </div>
                               <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                  <FontAwesomeIcon icon={faPhone} className="text-slate-400 text-[10px] w-3" /> {driver.mobile}
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-2">
                                  <FontAwesomeIcon icon={faCalendarDay} className="text-purple-400 text-xs" />
                                  <span className="text-xs font-black text-slate-500">{driver.joined}</span>
                               </div>
                            </td>
                            <td className="px-8 py-6 text-right">
                               <div className="flex justify-end gap-3">
                                  <button 
                                    onClick={() => handleAction(driver.id, 'accept')}
                                    className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                                  >
                                     <FontAwesomeIcon icon={faCheck} /> Accept
                                  </button>
                                  <button 
                                    onClick={() => handleAction(driver.id, 'reject')}
                                    className="px-5 py-2 bg-white border border-red-100 text-red-500 hover:bg-red-50 rounded-xl text-[10px] font-black uppercase tracking-widest hover:-translate-y-0.5 transition-all flex items-center gap-2"
                                  >
                                     <FontAwesomeIcon icon={faXmark} /> Reject
                                  </button>
                               </div>
                            </td>
                          </tr>
                        )) : (
                          /* Empty Queue State */
                          <tr>
                             <td colSpan="4" className="px-8 py-24 text-center">
                                <div className="flex flex-col items-center gap-4 animate-fade-in-up">
                                   <div className="w-20 h-20 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 text-3xl shadow-inner">
                                      <FontAwesomeIcon icon={faCircleExclamation} />
                                   </div>
                                   <div>
                                      <h3 className="text-xl font-black text-[#1f194c]">Queue Empty</h3>
                                      <p className="text-sm text-slate-400 font-medium mt-1">No pending driver verifications at the moment.</p>
                                   </div>
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
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default Drivers;