import React from "react";
import NavBar from "../../../NavBar/NavBar"; 
// FIXED: Path corrected to go up 3 levels to reach the components directory
import Footer from "../../../Footer/Footer"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCircleCheck, 
  faClock, 
  faIndianRupeeSign, 
  faIdCard, 
  faEnvelope, 
  faPhone,
  faKey,
  faArrowRight,
  faUserTie,
  faLocationDot,
  faLocationArrow // FIXED: Added missing icon import here
} from "@fortawesome/free-solid-svg-icons";

function DriverConform() {
  // Custom Modern Animations
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

      <main className="flex-grow pt-20 lg:pt-24">
        <section className="relative w-full py-12 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 border border-green-100 shadow-sm mb-6">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Driver Match Found</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-[#1f194c] tracking-tight">Finalize Your <span className="text-[#2c7bfe]">Booking.</span></h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8 animate-fade-in-up delay-100">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-blue-50 text-[#2c7bfe] rounded-xl flex items-center justify-center shadow-sm">
                        <FontAwesomeIcon icon={faLocationArrow} />
                      </div>
                      <h3 className="text-xl font-bold text-[#1f194c]">Journey Summary</h3>
                   </div>
                   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        { label: "Pickup Location", val: "Sample Location", icon: faLocationDot },
                        { label: "Scheduled Date", val: "2024-12-01", icon: faClock },
                        { label: "Pickup Time", val: "10:00 AM", icon: faClock },
                        { label: "Mobile No", val: "+91 9876543210", icon: faPhone },
                        { label: "Cab Type", val: "Sedan", icon: faIdCard }
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-1">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                             <FontAwesomeIcon icon={item.icon} className="text-[8px]" /> {item.label}
                           </p>
                           <p className="text-slate-700 font-bold">{item.val}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />
                      </div>
                      <h3 className="text-xl font-bold text-[#1f194c]">Hourly Rates</h3>
                   </div>
                   <div className="overflow-hidden rounded-3xl border border-slate-100">
                      <table className="w-full text-left">
                        <thead>
                           <tr className="bg-slate-50">
                              <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Duration</th>
                              <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 text-right">Charges</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                           {[
                             { h: "1", c: "150" }, { h: "2", c: "250" }, { h: "4", c: "500" }, { h: "6", c: "750" }, { h: "8", c: "1000" }
                           ].map((row, i) => (
                             <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-600">{row.h} Hour{row.h > 1 ? 's' : ''}</td>
                                <td className="px-6 py-4 font-black text-[#1f194c] text-right">₹{row.c}</td>
                             </tr>
                           ))}
                        </tbody>
                      </table>
                   </div>
                </div>
              </div>

              <div className="space-y-8 animate-fade-in-up delay-200">
                <div className="bg-[#1f194c] rounded-[2.5rem] p-8 border border-[#1f194c] shadow-2xl text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#2c7bfe] rounded-full filter blur-[60px] opacity-20"></div>
                   <div className="relative z-10 text-center space-y-6">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s" alt="Driver" className="relative w-28 h-28 rounded-full border-4 border-[#2c7bfe] object-cover mx-auto shadow-xl" />
                      <div>
                         <h3 className="text-2xl font-black tracking-tight">Michael Scott</h3>
                         <p className="text-[#2c7bfe] text-[10px] font-black uppercase tracking-[0.2em] mt-1">ID: #DR12345</p>
                      </div>
                      <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-slate-300 text-left">
                         <div className="flex items-center gap-3"><FontAwesomeIcon icon={faEnvelope} className="w-4" /> michael.scott@example.com</div>
                         <div className="flex items-center gap-3"><FontAwesomeIcon icon={faPhone} className="w-4" /> +91 9876543210</div>
                      </div>
                   </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl text-center">
                    <div className="w-12 h-12 bg-blue-50 text-[#2c7bfe] rounded-2xl flex items-center justify-center text-xl mx-auto mb-6">
                        <FontAwesomeIcon icon={faKey} />
                    </div>
                    <h4 className="text-lg font-bold text-[#1f194c] mb-2">Verify & Confirm</h4>
                    <p className="text-xs text-slate-400 font-medium mb-8 leading-relaxed text-center">Enter the secure OTP sent to your device to confirm this driver. They will reach you within 10 minutes!</p>
                    <div className="space-y-4">
                        <input type="text" placeholder="Enter 6-digit OTP" className="w-full px-6 py-4 bg-gray-50 border border-slate-100 rounded-2xl text-center font-black tracking-[0.5em] text-lg focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:tracking-normal placeholder:font-medium placeholder:text-sm" />
                        <Link to='/ride-started' className="block">
                            <button className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group">
                                Confirm Driver <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DriverConform;