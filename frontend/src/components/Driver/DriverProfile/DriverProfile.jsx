import React, { useState } from "react";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import Navbar from "../Driver-navbar/Navbar";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faIdCard, 
  faAddressCard, 
  faMapLocationDot,
  faCircleCheck,
  faShieldHalved,
  faFileContract,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

function DriverProfile() {
  const driverEmail = localStorage.getItem("email") || "john.doe@example.com";

  // Data state restored from original file
  const [driver] = useState({
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s",
    driver: "John Doe",
    location: "New York",
    email: driverEmail,
    mobile: "9876543210",
    adharId: "1234-5678-9012",
    license: "DL-567890",
    adharImg: "https://via.placeholder.com/400x250?text=Aadhaar+Card+Preview", 
    licenseImg: "https://via.placeholder.com/400x250?text=License+Preview",
  });

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
      
      {/* Sidebar Integration */}
      <DriverSideBar />

      <main className="flex-grow lg:ml-72 transition-all duration-500 flex flex-col">
        <Navbar />

        <div className="p-6 lg:p-10 flex-grow relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

          <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            
            {/* ================= IDENTITY HEADER ================= */}
            <div className="bg-[#1f194c] rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-[#2c7bfe] rounded-full -mr-32 -mt-32 blur-[100px] opacity-20"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-[#2c7bfe] rounded-full blur-2xl opacity-40"></div>
                    <img 
                      src={driver.profileImg} 
                      alt="Profile" 
                      className="relative w-32 h-32 lg:w-44 lg:h-44 rounded-full border-4 border-[#2c7bfe] object-cover shadow-2xl" 
                    />
                    <button className="absolute bottom-2 right-2 w-10 h-10 bg-white text-[#1f194c] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faPenToSquare} className="text-sm" />
                    </button>
                  </div>
                  
                  <div className="text-center md:text-left space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2c7bfe] rounded-full text-[10px] font-black uppercase tracking-widest">
                       <FontAwesomeIcon icon={faShieldHalved} /> Verified Professional
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black tracking-tight">{driver.driver}</h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                       <div className="flex items-center gap-2 text-slate-300 text-sm font-medium bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                          <FontAwesomeIcon icon={faMapLocationDot} className="text-[#2c7bfe]" /> {driver.location}
                       </div>
                       <div className="flex items-center gap-2 text-green-400 text-sm font-black bg-green-400/5 px-4 py-2 rounded-xl border border-green-400/10">
                          <FontAwesomeIcon icon={faCircleCheck} /> Account Active
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* ================= DATA GRID ================= */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* --- Personal Contact Card --- */}
              <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-white shadow-sm space-y-8">
                 <h3 className="text-lg font-black text-[#1f194c] uppercase tracking-widest border-l-4 border-[#2c7bfe] pl-4">Contact Info</h3>
                 <div className="space-y-6">
                    {[
                      { label: "Registered Email", val: driver.email, icon: faEnvelope },
                      { label: "Mobile Number", val: driver.mobile, icon: faPhone },
                    ].map((item, i) => (
                      <div key={i} className="group">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">{item.label}</p>
                         <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#2c7bfe]">
                               <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <span className="font-bold text-slate-700">{item.val}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* --- Identification Card --- */}
              <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-white shadow-sm space-y-8">
                 <h3 className="text-lg font-black text-[#1f194c] uppercase tracking-widest border-l-4 border-purple-400 pl-4">Government IDs</h3>
                 <div className="space-y-6">
                    {[
                      { label: "Aadhaar Card Number", val: driver.adharId, icon: faIdCard },
                      { label: "Driver License ID", val: driver.license, icon: faAddressCard },
                    ].map((item, i) => (
                      <div key={i} className="group">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">{item.label}</p>
                         <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-500">
                               <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <span className="font-bold text-slate-700">{item.val}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* ================= DOCUMENT VAULT ================= */}
            <div className="bg-white p-8 lg:p-10 rounded-[3rem] border border-white shadow-sm space-y-10">
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-black text-[#1f194c] uppercase tracking-widest border-l-4 border-green-400 pl-4">Verified Documents</h3>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                     <FontAwesomeIcon icon={faFileContract} /> Vault Encrypted
                  </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { label: "Aadhaar Card Preview", img: driver.adharImg },
                    { label: "License Preview", img: driver.licenseImg }
                  ].map((doc, i) => (
                    <div key={i} className="space-y-4">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">{doc.label}</p>
                       <div className="relative group overflow-hidden rounded-[2rem] border-8 border-slate-50 shadow-inner">
                          <img src={doc.img} alt={doc.label} className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                          <div className="absolute inset-0 bg-[#1f194c]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <button className="px-6 py-2.5 bg-white text-[#1f194c] font-black rounded-xl text-xs uppercase tracking-widest shadow-xl">View Original</button>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default DriverProfile;