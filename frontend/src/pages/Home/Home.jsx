import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight, 
  faPlay, 
  faStar,
  faLocationDot,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";

// Assets & Components
// Ensure these paths match your folder structure
import CarAnimate from "../../Assets/Car driving-rafiki (2).svg"; 
import Feature from "../../components/Features/Feature";
import HomeBanner from "../../components/banner/HomeBanner";
import Review from "../../components/Review/Review";
import OurService from "../../components/OurService/OurService";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar"; // Import the new NavBar

function Home() {
  // ============================================
  // CUSTOM CSS (Animations & Patterns)
  // ============================================
  const customStyles = `
    @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    @keyframes float-medium { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    @keyframes float-fast { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-5px, -8px); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
    
    .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
    .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
    .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
    .animate-blob { animation: blob 10s infinite; }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .perspective-1000 { perspective: 1000px; }
    
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="font-poppins text-slate-900 bg-[#fdfdff] overflow-x-hidden relative selection:bg-blue-100">
      <style>{customStyles}</style>
      <ToastContainer />

      {/* =======================
          NAVBAR COMPONENT
      ======================== */}
      <NavBar />

      {/* =======================
          HERO SECTION
      ======================== */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#fdfdff]">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fdfdff] to-transparent pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left z-20">
              <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[11px] font-extrabold text-slate-500 tracking-wider uppercase">50+ Drivers Active Now</span>
              </div>
              
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1f194c] leading-[1.1] mb-6 tracking-tight">
                Your Journey, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c7bfe] via-blue-600 to-purple-600">
                  Elevated.
                </span>
              </h1>
              
              <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Book professional drivers instantly. Whether it's a daily commute or a luxury tour, Voyago connects you with trusted experts behind the wheel.
              </p>
              
              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <NavLink to="/book-a-driver">
                  <button className="group px-8 py-4 rounded-full bg-[#2c7bfe] text-white font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto">
                    Book Your Ride 
                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </NavLink>
                <NavLink to="/how-it-works">
                  <button className="px-8 py-4 rounded-full bg-white text-[#1f194c] border border-slate-200 font-bold text-lg hover:bg-gray-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto">
                    <FontAwesomeIcon icon={faPlay} className="text-xs text-gray-400" /> How it works
                  </button>
                </NavLink>
              </div>

              {/* Social Proof */}
              <div className="animate-fade-in-up delay-400 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-11 h-11 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm relative z-10 hover:z-20 transition-all hover:scale-110">
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-11 h-11 rounded-full border-4 border-white bg-[#f1f5f9] flex items-center justify-center text-xs font-bold text-slate-600 relative z-0">
                    2k+
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-sm">
                    <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                  </div>
                  <span className="text-sm text-slate-500 font-semibold"><span className="text-[#1f194c] font-bold">4.9/5</span> rating</span>
                </div>
              </div>
            </div>

            {/* Right Visuals */}
            <div className="flex-1 w-full relative perspective-1000 mt-10 lg:mt-0">
              <div className="relative w-full max-w-[550px] mx-auto lg:mr-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-50 rounded-full blur-[70px] opacity-60"></div>
                  
                  <div className="relative z-10 animate-float-slow">
                     <img src={CarAnimate} alt="Driver and Client" className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -bottom-4 -left-4 sm:bottom-0 sm:-left-12 bg-white/80 backdrop-blur-xl p-4 pr-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/60 animate-float-medium z-20 min-w-[220px] hover:scale-105 transition-transform cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                           <img src="https://i.pravatar.cc/150?img=68" alt="Driver" className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">Your Driver</p>
                           <p className="text-base font-bold text-[#1f194c]">Michael R.</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex text-yellow-400 text-xs"><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                        <span className="text-xs font-bold text-slate-600">4.9</span>
                      </div>
                  </div>

                  <div className="absolute -top-6 -right-2 sm:top-10 sm:-right-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/60 animate-float-fast z-20 min-w-[200px] hover:scale-105 transition-transform cursor-default">
                      <div className="flex items-start gap-3 mb-3">
                         <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 shadow-sm"><FontAwesomeIcon icon={faLocationDot} /></div>
                         <div><p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">DESTINATION</p><p className="text-sm font-bold text-[#1f194c] leading-tight">Airport<br/>Terminal 3</p></div>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2"><div className="w-3/4 h-full bg-[#2c7bfe] rounded-full"></div></div>
                      <div className="flex justify-between items-center text-[10px] font-bold"><span className="text-gray-400">On Time</span><span className="text-[#2c7bfe]">12 mins away</span></div>
                  </div>

                  <div className="absolute top-1/2 -left-2 sm:-left-16 bg-white p-3 rounded-2xl shadow-lg animate-float-slow animation-delay-2000 hidden sm:block">
                     <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#2c7bfe] text-lg"><FontAwesomeIcon icon={faShieldHalved} /></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          REST OF THE SECTIONS
      ======================== */}
      <OurService />

      <section className="bg-white w-full py-16">
         <Feature />
      </section>

      <section className="py-24 relative overflow-hidden w-full bg-[#fdfdff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1f194c]">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-xl text-gray-500">No hidden fees. Choose the plan that fits your lifestyle.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* ... Pricing Cards (Same as before) ... */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 hover:border-[#2c7bfe]/30 transition-all duration-300 hover:-translate-y-2 group">
              <h3 className="text-xl font-bold text-[#1f194c]">Pay As You Go</h3>
              <p className="text-gray-400 mt-2 text-sm">Perfect for occasional trips.</p>
              <div className="my-8"><span className="text-4xl font-extrabold text-[#1f194c]">$25</span><span className="text-gray-400">/hr</span></div>
              <button className="w-full py-4 rounded-xl border-2 border-[#2c7bfe] text-[#2c7bfe] font-bold group-hover:bg-[#2c7bfe] group-hover:text-white transition-colors">Choose Basic</button>
            </div>
            
            <div className="bg-[#1f194c] rounded-[2rem] p-8 shadow-2xl relative transform md:scale-105 border border-[#1f194c]">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#2c7bfe] to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-[1.8rem]">POPULAR</div>
              <h3 className="text-xl font-bold text-white">Monthly Membership</h3>
              <p className="text-gray-400 mt-2 text-sm">For regular commuters.</p>
              <div className="my-8"><span className="text-4xl font-extrabold text-white">$199</span><span className="text-gray-400">/mo</span></div>
              <button className="w-full py-4 rounded-xl bg-[#2c7bfe] text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/50">Start Free Trial</button>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 group">
              <h3 className="text-xl font-bold text-[#1f194c]">Family Plan</h3>
              <p className="text-gray-400 mt-2 text-sm">Secure rides for loved ones.</p>
              <div className="my-8"><span className="text-4xl font-extrabold text-[#1f194c]">$299</span><span className="text-gray-400">/mo</span></div>
              <button className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold group-hover:border-gray-400 group-hover:text-gray-800 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#1f194c] overflow-hidden w-full">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#2c7bfe] rounded-full blur-[100px] opacity-20"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="text-center md:text-left">
               <span className="text-[#2c7bfe] font-bold tracking-widest uppercase text-sm">Download Our App</span>
               <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white leading-tight">Get a Driver in <br/><span className="text-[#2c7bfe]">Seconds.</span></h2>
               <p className="mt-6 text-lg text-slate-300">Track your driver in real-time, manage payments, and schedule rides—all from your pocket.</p>
               <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">App Store</button>
                  <button className="border border-slate-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-transform">Google Play</button>
               </div>
             </div>
             <div className="flex justify-center md:justify-end">
                <div className="bg-gray-900 border-[8px] border-gray-700 rounded-[3rem] h-[450px] w-[240px] shadow-2xl flex flex-col overflow-hidden relative">
                    <div className="w-full h-full bg-white opacity-10 absolute inset-0"></div>
                    <div className="m-auto text-white font-bold opacity-50">App Mockup</div>
                </div>
             </div>
           </div>
         </div>
      </section>

      <section className="py-16 bg-[#fdfdff] w-full">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.005] transition-transform duration-500">
            <HomeBanner />
         </div>
      </section>

      <Review />

      <section className="py-24 bg-[#fdfdff] w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1f194c] mb-12">Quick Answers</h2>
          <FAQ />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;