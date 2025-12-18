import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faBell, 
  faClock, 
  faEnvelope, 
  faHeadset,
  faArrowRight,
  faSignal,
  faCircle,
  faGlobe,
  faGaugeHigh,
  faMicrochip
} from "@fortawesome/free-solid-svg-icons";

// Assets
import MotherImg from "../../Assets/download.jpeg";
import CurrentService from "../../Assets/service current.svg";

function ServiceStatus() {
  // ============================================
  // CUSTOM CSS (Enhanced Animations for readability)
  // ============================================
  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pulse-green { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); } 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } }
    @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .animate-pulse-status { animation: pulse-green 2s infinite; }
    .animate-blob { animation: blob 10s infinite; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  const detailedMetrics = [
    {
        title: "Global Availability",
        desc: "Check the availability of Voyago's ride-hailing services in your area. Receive instant updates on service coverage and any changes to operating hours.",
        icon: faGlobe,
        status: "Active",
        color: "text-blue-400"
    },
    {
        title: "System Performance",
        desc: "Monitor the performance of Voyago's platform, including app responsiveness, booking reliability, and driver availability. We strive to provide a seamless experience.",
        icon: faGaugeHigh,
        status: "Optimal",
        color: "text-purple-400"
    },
    {
        title: "Service Disruptions",
        desc: "Stay informed about any disruptions or maintenance activities that may impact Voyago's services. Receive timely notifications about scheduled maintenance.",
        icon: faMicrochip,
        status: "None",
        color: "text-green-400"
    }
  ];

  return (
    <div className="font-poppins text-slate-900 bg-white overflow-x-hidden selection:bg-blue-100">
      <style>{customStyles}</style>
      <NavBar />

      <div className="pt-24 min-h-screen">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full py-16 lg:py-28 overflow-hidden bg-[#fdfdff]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-status"></div>
                  <span className="text-xs font-black text-slate-600 uppercase tracking-widest">All Systems Operational</span>
                </div>
                
                <h1 className="animate-fade-in-up delay-100 text-5xl lg:text-8xl font-black text-[#1f194c] leading-[1.05] tracking-tight">
                  Infrastructure <br /> <span className="text-[#2c7bfe]">Status.</span>
                </h1>
                
                <p className="animate-fade-in-up delay-200 text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
                  Stay informed with real-time updates on Voyago's availability and system performance.
                </p>
              </div>

              <div className="flex-1 w-full max-w-lg animate-fade-in-up delay-200">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-500"></div>
                    <img src={MotherImg} alt="Support" className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto object-cover" />
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MAIN STATUS DASHBOARD ================= */}
        <section className="py-20 bg-white relative">
          <div className="container max-w-7xl mx-auto px-6">
            
            {/* LARGE READABLE STATUS BANNER */}
            <div className="bg-[#1f194c] rounded-[4rem] p-10 lg:p-20 mb-20 shadow-[0_30px_100px_rgba(0,0,0,0.25)] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2c7bfe] rounded-full filter blur-[150px] opacity-20"></div>
               
               <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left Side: Large Title */}
                  <div className="space-y-6 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-10 lg:pb-0 lg:pr-10">
                     <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,1)]"></div>
                        <span className="text-green-400 font-black uppercase tracking-[0.3em] text-xs">Live System Pulse</span>
                     </div>
                     <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                        Current <br /> <span className="text-[#2c7bfe]">Status</span>
                     </h2>
                     <p className="text-slate-400 text-xl font-medium pt-4">
                        Updates as of: <span className="text-white font-bold underline decoration-[#2c7bfe] underline-offset-8">December 17, 2025</span>
                     </p>
                  </div>

                  {/* Right Side: Re-created Readable Details */}
                  <div className="space-y-10">
                     {detailedMetrics.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-6 group">
                            <div className={`w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl ${item.color} group-hover:bg-white/10 transition-colors`}>
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <h4 className="text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-green-500/20 text-green-400 uppercase tracking-widest">{item.status}</span>
                                </div>
                                <p className="text-slate-400 text-base leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                     ))}
                  </div>

               </div>
            </div>

            {/* QUICK METRICS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
               {[
                { name: "Driver Booking", uptime: "99.9%" },
                { name: "Live Tracking", uptime: "99.8%" },
                { name: "Payments", uptime: "100%" },
                { name: "App Access", uptime: "99.9%" }
               ].map((s, i) => (
                  <div key={i} className="bg-[#f8faff] p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2c7bfe] shadow-sm mb-6">
                        <FontAwesomeIcon icon={faSignal} />
                     </div>
                     <h4 className="font-extrabold text-[#1f194c] text-xl mb-1">{s.name}</h4>
                     <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Uptime: <span className="text-[#2c7bfe]">{s.uptime}</span></p>
                  </div>
               ))}
            </div>

            {/* ACTION CARDS */}
            <div className="grid lg:grid-cols-3 gap-8 pt-20 border-t border-slate-100">
               {[
                { icon: faBell, title: "Stay Updated", desc: "Opt-in for real-time push notifications or email alerts to stay informed about maintenance.", bg: "bg-purple-50", text: "text-purple-600" },
                { icon: faClock, title: "Service Alerts", desc: "Detailed information about past disruptions, performance improvements, and announcements.", bg: "bg-blue-50", text: "text-blue-600" },
                { icon: faTriangleExclamation, title: "Report Issue", desc: "Your feedback is valuable. Help us improve by reporting technical issues through our portal.", bg: "bg-red-50", text: "text-red-600" }
               ].map((card, i) => (
                  <div key={i} className="space-y-6 p-4 group">
                     <div className={`w-16 h-16 ${card.bg} ${card.text} rounded-3xl flex items-center justify-center text-3xl shadow-sm group-hover:rotate-6 transition-transform`}>
                        <FontAwesomeIcon icon={card.icon} />
                     </div>
                     <h3 className="text-2xl font-bold text-[#1f194c]">{card.title}</h3>
                     <p className="text-slate-500 text-base leading-relaxed font-medium">{card.desc}</p>
                     <button className="text-[#2c7bfe] font-black text-sm uppercase tracking-widest flex items-center gap-2 group/btn">
                        Get Started <FontAwesomeIcon icon={faArrowRight} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* ================= SUPPORT SECTION ================= */}
        <section className="py-24 bg-[#f8faff] border-y border-slate-100">
           <div className="container max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-[#1f194c] mb-6 tracking-tighter">Need Assistance?</h2>
              <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Our support team is active 24/7. Reach out via your preferred channel for personalized help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a href="mailto:support@voyago.com" className="px-10 py-5 bg-[#2c7bfe] text-white rounded-2xl font-bold shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 text-lg">
                    <FontAwesomeIcon icon={faEnvelope} /> Email Support
                 </a>
                 <button className="px-10 py-5 bg-white text-[#1f194c] border-2 border-slate-200 rounded-2xl font-bold shadow-sm hover:border-[#2c7bfe] hover:text-[#2c7bfe] transition-all flex items-center justify-center gap-3 text-lg">
                    <FontAwesomeIcon icon={faHeadset} /> Live Chat
                 </button>
              </div>
           </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default ServiceStatus;