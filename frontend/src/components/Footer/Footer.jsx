import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faApple,
  faGooglePlay
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1f194c] text-white pt-20 pb-10 overflow-hidden font-poppins border-t border-slate-100">
      
      {/* --- Background Decor (Subtle Glows) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#2c7bfe] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* --- Top Section: Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
               <div className="w-10 h-10 bg-[#2c7bfe] rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-blue-900/50 group-hover:rotate-12 transition-transform">V</div>
               <span className="text-3xl font-bold tracking-tight text-white">VOYAGO</span>
            </Link>
            <p className="text-slate-300 leading-relaxed text-sm pr-4">
              Premium travel solutions tailored for your safety and comfort. 
              Whether it's a daily commute or a luxury tour, we connect you with 
              trusted experts behind the wheel.
            </p>
            
            {/* Newsletter Input */}
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10 flex items-center max-w-xs focus-within:border-[#2c7bfe]/50 transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none text-sm text-white px-4 py-2 w-full focus:outline-none placeholder-slate-400"
              />
              <button className="bg-[#2c7bfe] hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-white">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Press & Media', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-400 hover:text-[#2c7bfe] text-sm transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-white">Services</h4>
            <ul className="space-y-3">
              {['Book a Driver', 'Corporate Fleet', 'Wedding Events', 'Tour Packages', 'Service Status'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-400 hover:text-[#2c7bfe] text-sm transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & App (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-lg font-bold text-white">Get the App</h4>
            <p className="text-slate-300 text-sm">Download the Voyago app for exclusive deals and real-time tracking.</p>
            
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-3 rounded-xl transition-all hover:-translate-y-1">
                <FontAwesomeIcon icon={faApple} className="text-2xl" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-400 font-bold leading-none">Download on the</p>
                  <p className="text-sm font-bold leading-none mt-1">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-3 rounded-xl transition-all hover:-translate-y-1">
                <FontAwesomeIcon icon={faGooglePlay} className="text-xl" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-400 font-bold leading-none">Get it on</p>
                  <p className="text-sm font-bold leading-none mt-1">Google Play</p>
                </div>
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
               <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#2c7bfe]" />
                  <span>Mangalore, Karnataka, India</span>
               </div>
               <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FontAwesomeIcon icon={faPhone} className="text-[#2c7bfe]" />
                  <span>+91 98950 33329</span>
               </div>
               <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#2c7bfe]" />
                  <span>voyago@gmail.com</span>
               </div>
            </div>
          </div>

        </div>

        {/* --- Bottom Section: Copyright & Socials --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm text-center md:text-left">
            &copy; {year} <span className="text-white font-semibold">Voyago</span>. All rights reserved. 
            <span className="hidden md:inline mx-2 text-slate-600">|</span> 
            <Link to="/privacy" className="hover:text-[#2c7bfe] transition-colors ml-2">Privacy Policy</Link>
            <span className="mx-2 text-slate-600">|</span>
            <Link to="/terms" className="hover:text-[#2c7bfe] transition-colors">Terms of Service</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
             {[faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube].map((icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#2c7bfe] hover:text-white transition-all duration-300 hover:-translate-y-1">
                   <FontAwesomeIcon icon={icon} />
                </a>
             ))}
          </div>
        </div>

      </div>
    </footer>
  );
}