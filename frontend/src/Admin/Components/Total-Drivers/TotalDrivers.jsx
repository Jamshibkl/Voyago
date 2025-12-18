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
  faFilter, 
  faMagnifyingGlass,
  faCircleCheck,
  faCircleMinus,
  faIdCard,
  faDownload,
  faRoute
} from "@fortawesome/free-solid-svg-icons";

function TotalDrivers() {
  // Expanded dummy data based on original file
  const [drivers] = useState([
    { id: 1, name: "John Doe", mobile: "7894561230", email: "abc@gmail.com", joined: "12-1-2024", status: "Active" },
    { id: 2, name: "Michael Scott", mobile: "9876543210", email: "michael.s@voyago.com", joined: "15-1-2024", status: "Active" },
    { id: 3, name: "Sarah Jenkins", mobile: "8877665544", email: "sarah.j@outlook.com", joined: "18-1-2024", status: "On Break" },
    { id: 4, name: "David Wallace", mobile: "9988776655", email: "david.w@voyago.com", joined: "20-1-2024", status: "Active" }
  ]);

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
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

          {/* Animated Background Mesh Blobs */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-10 animate-fade-in-up">
            
            {/* ================= HEADER & TOOLS ================= */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-center md:text-left">
                  <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight uppercase">Fleet Directory</h1>
                  <p className="text-slate-500 font-medium mt-1">Full database of verified driver partners.</p>
               </div>
               <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-grow md:w-72">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search fleet by name..." 
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-medium focus:border-[#2c7bfe] focus:outline-none shadow-sm transition-all"
                    />
                  </div>
                  <button className="p-4 bg-white border border-slate-200 text-slate-400 rounded-2xl shadow-sm hover:text-[#2c7bfe] transition-all">
                     <FontAwesomeIcon icon={faDownload} />
                  </button>
               </div>
            </div>

            {/* ================= FLEET KPI CARDS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[
                 { label: "Total Fleet", val: drivers.length, icon: faIdCard, color: "text-blue-500", bg: "bg-blue-50" },
                 { label: "Active Now", val: "84", icon: faRoute, color: "text-emerald-500", bg: "bg-emerald-50" },
                 { label: "Pending Renewals", val: "02", icon: faCircleMinus, color: "text-red-500", bg: "bg-red-50" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm flex items-center gap-6 hover:shadow-xl transition-all group">
                    <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-6 transition-transform shadow-sm`}>
                       <FontAwesomeIcon icon={stat.icon} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{stat.label}</p>
                       <p className="text-2xl font-black text-[#1f194c] leading-none">{stat.val}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* ================= MODERN DATA TABLE ================= */}
            <div className="space-y-6">
               <div className="flex justify-between items-center px-4">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-6 bg-[#2c7bfe] rounded-full"></div>
                     <h2 className="text-xl font-black text-[#1f194c] tracking-tight uppercase">Driver Records</h2>
                  </div>
                  <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#2c7bfe] transition-colors">
                    <FontAwesomeIcon icon={faFilter} className="mr-2" /> Advanced Filters
                  </button>
               </div>

               <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400">
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Driver Identity</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Contact Details</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Joined On</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {drivers.map((driver) => (
                          <tr key={driver.id} className="hover:bg-blue-50/30 transition-all group">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-2xl bg-[#2c7bfe]/10 text-[#2c7bfe] flex items-center justify-center text-sm font-black border border-[#2c7bfe]/10 group-hover:bg-[#2c7bfe] group-hover:text-white transition-all shadow-sm">
                                  {driver.name.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#1f194c] group-hover:text-[#2c7bfe] transition-colors">{driver.name}</p>
                                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide flex items-center gap-1 mt-0.5">
                                    <FontAwesomeIcon icon={faUserTie} className="text-[8px]" /> Driver ID: #DR-00{driver.id}
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
                                  <span className="text-xs font-black text-slate-500 uppercase">{driver.joined}</span>
                               </div>
                            </td>
                            <td className="px-8 py-6 text-right">
                               <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${
                                 driver.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-500/5' : 
                                 'bg-orange-50 text-orange-600 border-orange-100'
                               }`}>
                                  <FontAwesomeIcon 
                                    icon={driver.status === 'Active' ? faCircleCheck : faCircleMinus} 
                                    className="text-[8px]" 
                                  /> 
                                  {driver.status}
                               </span>
                            </td>
                          </tr>
                        ))}
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

export default TotalDrivers;