import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function AdminNavbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-[90] border-b border-slate-100 px-8 py-4 flex justify-between items-center">
      {/* Search Field */}
      <div className="relative group hidden md:block">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs" />
        </div>
        <input 
          type="text" 
          placeholder="Global system search..." 
          className="pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-xl text-xs font-medium focus:bg-white focus:border-[#2c7bfe] focus:outline-none w-64 lg:w-96 transition-all"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl hover:bg-slate-50 text-slate-400 relative">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#2c7bfe] rounded-full border-2 border-white"></span>
            </button>
            <button className="w-10 h-10 rounded-xl hover:bg-slate-50 text-slate-400 relative">
                <FontAwesomeIcon icon={faBell} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
        </div>
        <div className="h-8 w-px bg-slate-100 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-right">
                <p className="text-xs font-black text-[#1f194c]">Root Access</p>
                <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Active Session</p>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;