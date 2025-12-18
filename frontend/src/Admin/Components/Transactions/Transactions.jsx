import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCreditCard, 
  faIndianRupeeSign, 
  faCircleCheck, 
  faClock, 
  faXmark,
  faFilter,
  faFileInvoice,
  faArrowTrendUp,
  faCalendarDays,
  faDownload,
  faMagnifyingGlass,
  faWallet
} from "@fortawesome/free-solid-svg-icons";

function Transactions() {
  // Mock Transaction Data representing the ledger
  const [transactions] = useState([
    { id: "TR-882910", customer: "Alice Johnson", driver: "John Doe", amount: "1,200", method: "Online", date: "Dec 18, 2025", status: "Completed" },
    { id: "TR-882911", customer: "Bob Smith", driver: "Michael Scott", amount: "750", method: "Cash", date: "Dec 18, 2025", status: "Pending" },
    { id: "TR-882912", customer: "Charlie Davis", driver: "Sarah Jenkins", amount: "2,100", method: "Online", date: "Dec 17, 2025", status: "Completed" },
    { id: "TR-882913", customer: "David Wallace", driver: "John Doe", amount: "450", method: "Online", date: "Dec 17, 2025", status: "Failed" },
  ]);

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
                  <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight uppercase">Transaction Ledger</h1>
                  <p className="text-slate-500 font-medium mt-1">Audit platform revenue and driver payouts in real-time.</p>
               </div>
               <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-grow md:w-72">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search ID, Driver or Passenger..." 
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-medium focus:border-[#2c7bfe] focus:outline-none shadow-sm transition-all"
                    />
                  </div>
                  <button className="p-4 bg-[#1f194c] text-white rounded-2xl shadow-lg shadow-slate-900/10 hover:bg-black transition-all">
                     <FontAwesomeIcon icon={faDownload} />
                  </button>
               </div>
            </div>

            {/* ================= REVENUE KPI TILES ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[
                 { label: "Total Gross Volume", val: "₹1,42,890", icon: faWallet, color: "text-emerald-500", bg: "bg-emerald-50" },
                 { label: "Successful Payouts", val: "1,204", icon: faCircleCheck, color: "text-blue-500", bg: "bg-blue-50" },
                 { label: "Pending Settlements", val: "₹12,400", icon: faClock, color: "text-purple-500", bg: "bg-purple-50" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm flex items-center gap-6 hover:shadow-xl transition-all group relative overflow-hidden">
                    <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-sm`}>
                       <FontAwesomeIcon icon={stat.icon} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{stat.label}</p>
                       <p className="text-2xl font-black text-[#1f194c] leading-none">{stat.val}</p>
                    </div>
                    <div className="absolute top-4 right-4 text-green-500 font-black text-[9px] flex items-center gap-1">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> +8.4%
                    </div>
                 </div>
               ))}
            </div>

            {/* ================= MAIN LEDGER TABLE ================= */}
            <div className="space-y-6">
               <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-6 bg-yellow-400 rounded-full"></div>
                     <h2 className="text-xl font-black text-[#1f194c] tracking-tight uppercase">Recent Settlements</h2>
                  </div>
                  <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#2c7bfe] transition-colors">
                    <FontAwesomeIcon icon={faFilter} className="mr-2" /> Advanced Filters
                  </button>
               </div>

               <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400">
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Transaction Info</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Participants</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Fare Amount</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-center">Method</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-right">Settlement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {transactions.map((tr) => (
                          <tr key={tr.id} className="hover:bg-blue-50/30 transition-all group">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center text-sm group-hover:bg-[#2c7bfe] group-hover:text-white transition-all">
                                  <FontAwesomeIcon icon={faFileInvoice} />
                                </div>
                                <div>
                                  <p className="text-sm font-black text-[#1f194c] group-hover:text-[#2c7bfe] transition-colors">{tr.id}</p>
                                  <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mt-0.5 uppercase">
                                    <FontAwesomeIcon icon={faCalendarDays} className="text-[8px]" /> {tr.date}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 space-y-1">
                               <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                  <span className="text-slate-400 font-medium">From:</span> {tr.customer}
                               </div>
                               <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                  <span className="text-[#2c7bfe] font-medium">To:</span> {tr.driver}
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-1 text-sm font-black text-[#1f194c] tabular-nums">
                                  <FontAwesomeIcon icon={faIndianRupeeSign} className="text-[10px] text-slate-400" /> {tr.amount}
                               </div>
                            </td>
                            <td className="px-8 py-6 text-center">
                               <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${tr.method === 'Online' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                                  {tr.method}
                               </span>
                            </td>
                            <td className="px-8 py-6 text-right">
                               <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm transition-all ${
                                 tr.status === 'Completed' ? 'bg-emerald-500 text-white border-emerald-500' : 
                                 tr.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                                 'bg-red-50 text-red-500 border-red-100'
                               }`}>
                                  <FontAwesomeIcon 
                                    icon={tr.status === 'Completed' ? faCircleCheck : tr.status === 'Pending' ? faClock : faXmark} 
                                    className="text-[8px]" 
                                  /> 
                                  {tr.status}
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

export default Transactions;