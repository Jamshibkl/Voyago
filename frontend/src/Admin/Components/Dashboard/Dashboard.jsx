import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, 
  faUserTie, 
  faChartLine, 
  faSignal, 
  faArrowTrendUp, 
  faArrowTrendDown,
  faCircleCheck,
  faClock,
  faEllipsisVertical,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  // Data restored from system logic
  const stats = [
    { label: "Total Customers", val: "1,765", icon: faUsers, color: "text-blue-500", bg: "bg-blue-50", trend: "+12.5%", up: true },
    { label: "Total Drivers", val: "106", icon: faUserTie, color: "text-purple-500", bg: "bg-purple-50", trend: "+4.2%", up: true },
    { label: "Monthly Sales", val: "₹55,476", icon: faChartLine, color: "text-emerald-500", bg: "bg-emerald-50", trend: "+23.1%", up: true },
    { label: "Active Rides", val: "78", icon: faSignal, color: "text-yellow-500", bg: "bg-yellow-50", trend: "-2.4%", up: false },
  ];

  const recentActivities = [
    { id: "#TR-9902", type: "Ride Completed", user: "Alice Johnson", amount: "₹450", status: "Paid", time: "2 mins ago" },
    { id: "#TR-9901", type: "New Booking", user: "Bob Smith", amount: "₹750", status: "Pending", time: "15 mins ago" },
    { id: "#TR-9900", type: "Ride Cancelled", user: "Charlie Davis", amount: "₹0", status: "Cancelled", time: "1 hr ago" },
  ];

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
    <div className="font-poppins text-slate-900 bg-[#f8faff] min-h-screen flex selection:bg-emerald-100">
      <style>{customStyles}</style>
      
      <Sidebar />

      <main className="flex-grow lg:ml-72 flex flex-col transition-all duration-500">
        <Navbar />

        <div className="p-8 lg:p-12 flex-grow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto space-y-10 animate-fade-in-up">
            
            {/* --- Header --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight uppercase">System Status</h1>
                <p className="text-slate-500 font-medium mt-1 italic">Real-time infrastructure monitoring.</p>
              </div>
            </div>

            {/* --- Stats Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {stats.map((stat, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform`}>
                            <FontAwesomeIcon icon={stat.icon} />
                        </div>
                        <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg ${stat.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                            <FontAwesomeIcon icon={stat.up ? faArrowTrendUp : faArrowTrendDown} /> {stat.trend}
                        </div>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-black text-[#1f194c] tracking-tight">{stat.val}</h3>
                 </div>
               ))}
            </div>

            {/* --- LIGHT GREEN MODERN TABLE --- */}
            <div className="space-y-6">
               <div className="flex justify-between items-center px-4">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
                     <h2 className="text-xl font-black text-[#1f194c] tracking-tight uppercase">Live Activity Feed</h2>
                  </div>
                  <button className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:underline">Export Logs</button>
               </div>

               {/* Container changed to Light Green Glassmorphism */}
               <div className="bg-[#f0fff4]/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(16,185,129,0.05)] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-emerald-50/50 border-b border-emerald-100 text-emerald-800">
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Transaction</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Passenger</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Fare</th>
                          <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-emerald-100/50">
                        {recentActivities.map((activity, idx) => (
                          <tr key={idx} className="hover:bg-emerald-100/40 transition-all group">
                            <td className="px-8 py-6">
                              <p className="text-sm font-bold text-[#1f194c] group-hover:text-emerald-700 transition-colors">{activity.id}</p>
                              <p className="text-[10px] text-emerald-600 font-medium mt-0.5 uppercase tracking-wide">{activity.type}</p>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-[11px] font-black border border-emerald-500/10">
                                  {activity.user.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-slate-700 leading-none">{activity.user}</p>
                                  <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-widest">{activity.time}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <span className="text-sm font-black text-[#1f194c] tabular-nums tracking-tight">{activity.amount}</span>
                            </td>
                            <td className="px-8 py-6 text-right">
                              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${
                                activity.status === 'Paid' ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/10' : 
                                activity.status === 'Pending' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                                'bg-red-50 text-red-500 border-red-100'
                              }`}>
                                <FontAwesomeIcon 
                                  icon={activity.status === 'Paid' ? faCircleCheck : activity.status === 'Pending' ? faClock : faXmark} 
                                  className="text-[8px]" 
                                /> 
                                {activity.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
               </div>
            </div>

            {/* --- Summary Blocks --- */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-[#1f194c] rounded-[3rem] p-10 shadow-2xl text-white relative overflow-hidden group min-h-[200px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full -mr-32 -mt-32 blur-[100px] opacity-20 transition-opacity"></div>
                    <div className="relative z-10 space-y-4">
                        <h4 className="text-2xl font-black tracking-tight leading-tight">Fleet <span className="text-emerald-400">Optimization</span></h4>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-lg">
                            Global driver throughput is currently operating at maximum efficiency with zero latency.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-10 rounded-[3rem] border border-white shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:rotate-6 transition-transform">
                        <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <h5 className="text-lg font-black text-[#1f194c]">Generate Insights</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Export Performance PDF</p>
                </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;