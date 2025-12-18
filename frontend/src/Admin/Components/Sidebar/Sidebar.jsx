import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartPie, 
  faUserTie, 
  faUsers, 
  faCreditCard, 
  faUserShield, 
  faIdCard,
  faGear,
  faRightFromBracket 
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const navGroups = [
    {
      title: "Client Facing",
      items: [
        { to: "/drivers", label: "Drivers", icon: faUserTie },
        { to: "/customers", label: "Customers", icon: faUsers },
        { to: "/transactions", label: "Transactions", icon: faCreditCard },
        { to: "/total-drivers", label: "Total Fleet", icon: faIdCard },
      ]
    },
    {
      title: "Management",
      items: [
        { to: "/total-admin", label: "Admins", icon: faUserShield },
        { to: "/settings", label: "System Settings", icon: faGear },
      ]
    }
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-72 bg-[#1f194c] z-[100] flex flex-col p-6 shadow-2xl">
      {/* Brand */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-[#1f194c] font-black text-xl shadow-lg">V</div>
        <span className="text-2xl font-black tracking-tighter text-white">VOYAGO <span className="text-yellow-400 text-[10px] align-top ml-1">ADMIN</span></span>
      </div>

      <nav className="flex-grow space-y-8 overflow-y-auto no-scrollbar">
        {/* Dashboard Home */}
        <NavLink 
          to="/admin-dashboard" 
          className={({ isActive }) => `flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all ${isActive ? "bg-[#2c7bfe] text-white shadow-xl shadow-blue-500/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
        >
          <FontAwesomeIcon icon={faChartPie} className="text-lg w-5" /> Dashboard
        </NavLink>

        {navGroups.map((group, idx) => (
          <div key={idx} className="space-y-3">
            <p className="px-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{group.title}</p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `flex items-center gap-4 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all ${isActive ? "bg-white/10 text-white border-l-4 border-yellow-400 pl-4" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-lg w-5" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Admin Profile Mini-Card */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center gap-4 px-4 py-4 bg-white/5 rounded-2xl mb-4">
           <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[#1f194c] font-bold">A</div>
           <div>
              <p className="text-xs font-bold text-white leading-none">Super Admin</p>
              <p className="text-[10px] text-slate-500 mt-1">online</p>
           </div>
        </div>
        <button className="w-full flex items-center gap-4 px-5 py-3 rounded-2xl font-bold text-sm text-red-400 hover:bg-red-500/10 transition-all">
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;