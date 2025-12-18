import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, 
  faXmark, 
  faChevronDown, 
  faUser, 
  faRightFromBracket,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  
  // Checking local storage for user (matches your Home.jsx logic)
  const user = localStorage.getItem("loggedInUser"); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  // Helper for link classes
  const linkStyles = ({ isActive }) =>
    `text-sm font-bold tracking-wide transition-colors duration-200 ${
      isActive ? "text-[#2c7bfe]" : "text-slate-600 hover:text-[#2c7bfe]"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-poppins ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- Logo --- */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2" 
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 bg-[#2c7bfe] rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-500/30">
              V
            </div>
            <span className="text-2xl font-black tracking-tight text-[#1f194c]">
              VOYAGO
            </span>
          </div>

          {/* --- Desktop Navigation --- */}
          <div className="hidden lg:flex space-x-8 items-center">
            <NavLink to="/" className={linkStyles}>Home</NavLink>
            
            {/* Company Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-sm font-bold text-slate-600 hover:text-[#2c7bfe] flex items-center gap-1 transition-colors">
                Company <FontAwesomeIcon icon={faChevronDown} className={`text-[10px] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 transform transition-all duration-200 origin-top-left ${dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                {[
                  { name: "About Us", path: "/about-us" },
                  { name: "How it Works", path: "/how-it-works" },
                  { name: "Our Team", path: "/our-team" },
                  { name: "Become a Driver", path: "/become-a-driver" },
                  { name: "Book a Driver", path: "/book-a-driver" },
                  { name: "Service Status", path: "/service-status" },
                  { name: "Admin Login", path: "/admin-login" },
                ].map((item) => (
                  <NavLink 
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-[#2c7bfe] rounded-lg transition-colors"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/safety" className={linkStyles}>Safety</NavLink>
            <NavLink to="/contact" className={linkStyles}>Contact</NavLink>
          </div>

          {/* --- Auth Buttons --- */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div 
                className="relative"
                onMouseEnter={() => setUserDropdownOpen(true)}
                onMouseLeave={() => setUserDropdownOpen(false)}
              >
                <button className="flex items-center gap-2 text-slate-700 font-bold hover:text-[#2c7bfe] transition-colors py-2">
                   <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2c7bfe] font-bold text-sm">
                      {user.charAt(0).toUpperCase()}
                   </div>
                   <span className="text-sm">{user}</span>
                   <FontAwesomeIcon icon={faChevronDown} className="text-[10px] text-slate-400" />
                </button>
                
                <div className={`absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-1 transform transition-all duration-200 origin-top-right ${userDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
                    <NavLink to={`/on-the-way/${user}`} className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-[#2c7bfe] rounded-lg">
                      <FontAwesomeIcon icon={faUser} className="text-xs" /> Your Rides
                    </NavLink>
                    <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg text-left">
                      <FontAwesomeIcon icon={faRightFromBracket} className="text-xs" /> Logout
                    </button>
                </div>
              </div>
            ) : (
              <>
                <NavLink to="/login" className="text-slate-600 font-bold text-sm hover:text-[#2c7bfe] transition-colors">
                  Log in
                </NavLink>
                <NavLink to="/signup" className="px-6 py-2.5 rounded-full bg-[#2c7bfe] text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-200">
                  Sign up free
                </NavLink>
              </>
            )}
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-600 hover:text-[#2c7bfe] transition-colors"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 origin-top ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"}`}>
         <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#2c7bfe]">Home</NavLink>
            
            <div className="px-4 py-2">
              <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Company</p>
              <div className="space-y-1 border-l-2 border-slate-100 pl-3">
                 {[
                  { name: "About Us", path: "/about-us" },
                  { name: "How it Works", path: "/how-it-works" },
                  { name: "Our Team", path: "/our-team" },
                  { name: "Become a Driver", path: "/become-a-driver" },
                  { name: "Service Status", path: "/service-status" },
                  { name: "Book a Driver", path: "/book-a-driver" },
                 ].map(item => (
                   <NavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-[#2c7bfe]">{item.name}</NavLink>
                 ))}
              </div>
            </div>

            <NavLink to="/safety" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#2c7bfe]">Safety</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-[#2c7bfe]">Contact</NavLink>

            <div className="border-t border-gray-100 my-2 pt-4 flex flex-col gap-3 px-4">
               {user ? (
                  <>
                    <NavLink to={`/on-the-way/${user}`} onClick={() => setIsOpen(false)} className="w-full text-center py-3 rounded-lg font-bold text-slate-700 bg-gray-50 flex justify-center items-center gap-2">
                       <FontAwesomeIcon icon={faCircleCheck} className="text-[#2c7bfe]" /> Your Rides
                    </NavLink>
                    <button onClick={() => {handleLogout(); setIsOpen(false);}} className="w-full text-center py-3 rounded-lg font-bold text-red-500 hover:bg-red-50">Logout</button>
                  </>
               ) : (
                  <>
                    <NavLink to="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-3 rounded-lg font-bold text-slate-600 hover:bg-gray-50 border border-gray-200">Log in</NavLink>
                    <NavLink to="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-3 rounded-lg font-bold bg-[#2c7bfe] text-white shadow-md">Sign up free</NavLink>
                  </>
               )}
            </div>
         </div>
      </div>
    </nav>
  );
}

export default NavBar;