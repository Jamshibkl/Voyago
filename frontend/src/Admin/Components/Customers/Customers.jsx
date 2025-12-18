import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, 
  faEnvelope, 
  faPhone, 
  faCalendarDay, 
  faTrashCan, 
  faUserSlash,
  faFilter,
  faMagnifyingGlass,
  faArrowTrendUp,
  faClockRotateLeft
} from "@fortawesome/free-solid-svg-icons";

function Customers() {
  // Mock data representing the registered customers
  const [customerList, setCustomerList] = useState([
    { id: 1, name: "John Doe", mobile: "7894561230", email: "abc@gmail.com", joined: "12-1-2024" },
    { id: 2, name: "Michael Scott", mobile: "9876543210", email: "michael.s@dundermifflin.com", joined: "15-1-2024" },
    { id: 3, name: "Sarah Jenkins", mobile: "8877665544", email: "sarah.j@outlook.com", joined: "18-1-2024" },
    { id: 4, name: "David Wallace", mobile: "9988776655", email: "david.w@voyago.com", joined: "20-1-2024" }
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this customer record?")) {
      setCustomerList(prev => prev.filter(c => c.id !== id));
      alert(`Customer record ID:${id} has been purged from the system.`);
    }
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
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
    <div className="font-poppins text-slate-900 bg-[#f8faff] min-h-screen flex selection:bg-blue-100">
      <style>{customStyles}</style>
      
      {/* Sidebar Integration */}
      <Sidebar />

      {/* Main Content Area (ml-72 clears fixed sidebar) */}
      <main className="flex-grow lg:ml-72 flex flex-col transition-all duration-500">
        <Navbar />

        <div className="p-8 lg:p-12 flex-grow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          {/* Animated Background Blobs */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px]"></div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-10 animate-fade-in-up">
            
            {/* ================= HEADER & SEARCH ================= */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-center md:text-left">
                  <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight uppercase">Customer Directory</h1>
                  <p className="text-slate-500 font-medium mt-1">Manage user accounts and engagement history.</p>
               </div>
               <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-grow md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search name/email..." 
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:border-[#2c7bfe] focus:outline-none shadow-sm transition-all"
                    />
                  </div>
                  <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-[#2c7bfe] transition-colors shadow-sm">
                     <FontAwesomeIcon icon={faFilter} />
                  </button>
               </div>
            </div>

            {/* ================= KPI SUMMARY CARDS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[
                 { label: "Total Registered", val: customerList.length, icon: faUsers, color: "text-blue-500", bg: "bg-blue-50" },
                 { label: "New This Week", val: "12", icon: faArrowTrendUp, color: "text-emerald-500", bg: "bg-emerald-50" },
                 { label: "Active Sessions", val: "106", icon: faClockRotateLeft, color: "text-purple-500", bg: "bg-purple-50" }
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
                  <div className="w-1.5 h-6 bg-[#2c7bfe] rounded-full"></div>
                  <h2 className="text-xl font-black text-[#1f194c] tracking-tight uppercase">User Records</h2>
               </div>

               <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400">
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">User Identity</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Contact Details</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Joined On</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-right">Account Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {customerList.length > 0 ? customerList.map((user) => (
                          <tr key={user.id} className="hover:bg-blue-50/30 transition-all group">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-2xl bg-[#2c7bfe]/10 text-[#2c7bfe] flex items-center justify-center text-sm font-black border border-[#2c7bfe]/10 group-hover:bg-[#2c7bfe] group-hover:text-white transition-all shadow-sm">
                                  {user.name.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#1f194c] group-hover:text-[#2c7bfe] transition-colors">{user.name}</p>
                                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide flex items-center gap-1 mt-0.5">
                                    <span className="w-1 h-1 bg-green-500 rounded-full"></span> Status: Verified
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 space-y-1">
                               <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                  <FontAwesomeIcon icon={faEnvelope} className="text-[#2c7bfe] text-[10px] w-3" /> {user.email}
                               </div>
                               <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                  <FontAwesomeIcon icon={faPhone} className="text-slate-400 text-[10px] w-3" /> {user.mobile}
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-2">
                                  <FontAwesomeIcon icon={faCalendarDay} className="text-purple-400 text-xs" />
                                  <span className="text-xs font-black text-slate-500 uppercase">{user.joined}</span>
                               </div>
                            </td>
                            <td className="px-8 py-6 text-right">
                               <button 
                                 onClick={() => handleDelete(user.id)}
                                 className="px-5 py-2.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ml-auto border border-red-100 group/btn shadow-sm"
                               >
                                  <FontAwesomeIcon icon={faTrashCan} className="group-hover/btn:scale-110 transition-transform" /> Delete Profile
                               </button>
                            </td>
                          </tr>
                        )) : (
                          /* Empty Queue State */
                          <tr>
                             <td colSpan="4" className="px-8 py-24 text-center">
                                <div className="flex flex-col items-center gap-4 animate-fade-in-up">
                                   <div className="w-20 h-20 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 text-3xl shadow-inner">
                                      <FontAwesomeIcon icon={faUserSlash} />
                                   </div>
                                   <div>
                                      <h3 className="text-xl font-black text-[#1f194c]">No Customers Found</h3>
                                      <p className="text-sm text-slate-400 font-medium mt-1">Try adjusting your search filters or check sync status.</p>
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

export default Customers;