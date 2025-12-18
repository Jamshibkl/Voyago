import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBell,
  faCar,
  faRightFromBracket,
  faBars,
  faXmark,
  faIdCardClip
} from "@fortawesome/free-solid-svg-icons";

function DriverSideBar() {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const driverEmail = localStorage.getItem("email") || "partner@voyago.com";

  const logoutSubmit = () => {
    localStorage.removeItem("driver-login");
    localStorage.removeItem("email");
    navigate("/driver-login");
  };

  const navItems = [
    { to: "/driver-dashbord", label: "Dashboard", icon: faHouse },
    { to: "/driver-profile", label: "Driver Info", icon: faIdCardClip },
    { to: "/driver-notify", label: "Notifications", icon: faBell },
    { to: "/driver-ride", label: "Ride History", icon: faCar },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-[110] w-10 h-10 bg-[#2c7bfe] text-white rounded-xl shadow-lg flex items-center justify-center"
      >
        <FontAwesomeIcon icon={isMobileOpen ? faXmark : faBars} />
      </button>

      {/* Sidebar Container */}
      <aside className={`fixed inset-y-0 left-0 z-[100] w-72 bg-[#1f194c] transition-transform duration-500 lg:translate-x-0 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full p-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3 px-2 mb-10 mt-4 lg:mt-0">
            <div className="w-10 h-10 bg-[#2c7bfe] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">V</div>
            <span className="text-2xl font-black tracking-tighter text-white">VOYAGO</span>
          </div>

          {/* User Section */}
          <div className="mb-8 px-2 py-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Authenticated Partner</p>
            <p className="text-sm font-bold text-white truncate">{driverEmail}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-300
                  ${isActive 
                    ? "bg-[#2c7bfe] text-white shadow-xl shadow-blue-500/20 translate-x-2" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"}
                `}
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg w-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="pt-6 border-t border-white/10">
            <button 
              onClick={logoutSubmit}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm text-red-400 hover:bg-red-500/10 transition-all"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="text-lg w-5" />
              Logout
            </button>
          </div>

        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90] lg:hidden"
        />
      )}
    </>
  );
}

export default DriverSideBar;