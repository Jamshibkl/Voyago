import React from 'react';
import { NavLink } from 'react-router-dom';

function HomeBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#407bff] to-blue-600 text-white rounded-3xl shadow-2xl mx-4 my-8 lg:mx-0">
      
      {/* =======================
          BACKGROUND PATTERNS 
      ======================== */}
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
      
      {/* Subtle Texture Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* =======================
              LEFT COLUMN: TEXT
          ======================== */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-400/50 text-blue-50 text-xs font-semibold tracking-wider uppercase mb-4">
                Redefining Travel
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Discover a New Way <br />
                <span className="text-blue-100">To Travel</span>
              </h2>
              <p className="mt-6 text-lg text-blue-50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Voyago, we don't just drive you; we care for your journey. 
                Experience the perfect blend of safety, comfort, and professional service. 
                Join us on the road to stress-free commuting.
              </p>
            </div>

            {/* Added "Details" - Stats Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm text-blue-200">Happy Riders</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm text-blue-200">App Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-blue-200">Secure Rides</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="px-8 py-4 bg-white text-[#407bff] rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300">
                Get Started Today
              </button>
              <NavLink to="/about-us">
                <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>

          {/* =======================
              RIGHT COLUMN: IMAGE
          ======================== */}
          <div className="relative hidden lg:block">
            {/* Glass Card Backdrop */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3 scale-95 border border-white/20"></div>
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f768f874a1f8d1900f551a28b29b8fe5413c96be8bb06df27a70dcf53949b82c?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
                alt="Voyago Travel Experience"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Status</p>
                  <p className="text-sm font-bold text-gray-900">Verified Driver</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeBanner;