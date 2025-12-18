import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const driverName = "John Doe"; //

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-black text-[#1f194c] tracking-tight hidden sm:block">Driver Profile</h2>
        <div className="sm:hidden w-10 h-10 bg-[#2c7bfe] rounded-xl flex items-center justify-center text-white font-black text-lg">V</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#2c7bfe] rounded-full">
            <FontAwesomeIcon icon={faLocationDot} className="text-xs" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">New York Hub</span>
        </div>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
           <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-[#1f194c] leading-none">{driverName}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Platinum Partner</p>
           </div>
           <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s"
             alt="Driver Profile"
             className="w-10 h-10 rounded-xl border-2 border-white shadow-md object-cover"
           />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;