import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faWallet,
  faShieldHeart,
  faChartLine,
  faCircleCheck,
  faCarRear
} from "@fortawesome/free-solid-svg-icons";

// Assets
import Cover_pic from "../../Assets/driver-cover-pic.jpg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function BecomeaDriver() {
  // Custom Animations (Consistent with other modern pages)
  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    @keyframes blob { 
      0% { transform: translate(0px, 0px) scale(1); } 
      33% { transform: translate(30px, -50px) scale(1.1); } 
      66% { transform: translate(-20px, 20px) scale(0.9); } 
      100% { transform: translate(0px, 0px) scale(1); } 
    }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-blob { animation: blob 10s infinite; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  const benefits = [
    {
      icon: faClock,
      title: "Work on Your Pace",
      desc: "No shifts, no bosses. You decide when to go online and when to take a break. Your time, your rules.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: faWallet,
      title: "Reliable Earnings",
      desc: "Earn competitive fares and keep 100% of your tips. Payments are automatically deposited every week.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: faShieldHeart,
      title: "Safety at Every Turn",
      desc: "From emergency assistance buttons to 24/7 support, we've built safety into every part of the app.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="font-poppins text-slate-900 bg-white overflow-x-hidden selection:bg-blue-100">
      <style>{customStyles}</style>
      
      {/* 1. Standard Professional Navbar */}
      <NavBar />

      <div className="pt-24">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full py-16 lg:py-28 overflow-hidden bg-[#fdfdff]">
          {/* Background Layers */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Hero Text */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#2c7bfe] text-xs font-extrabold uppercase tracking-widest mb-6 border border-blue-100">
                  Drive Your Way
                </span>
                <h1 className="animate-fade-in-up text-5xl lg:text-7xl font-extrabold text-[#1f194c] mb-8 leading-tight tracking-tight">
                  Be Your Own Boss <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c7bfe] via-blue-600 to-purple-600">With Voyago.</span>
                </h1>
                <p className="animate-fade-in-up delay-100 text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  Join a community of professional drivers. Make money on your own schedule with a platform that supports you every mile of the way.
                </p>
                <div className="animate-fade-in-up delay-200 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-bold text-slate-600">
                  <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500" /> Flexible Hours</div>
                  <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500" /> Weekly Payouts</div>
                  <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500" /> 24/7 Support</div>
                </div>
              </div>

              {/* Hero Image in a Modern Frame */}
              <div className="flex-1 w-full relative">
                <div className="relative w-full max-w-xl mx-auto animate-float">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] rotate-3 -z-10 translate-x-4 translate-y-4"></div>
                  <img 
                    src={Cover_pic} 
                    alt="Driver" 
                    className="rounded-[2.5rem] shadow-2xl w-full h-auto object-cover border-8 border-white"
                  />
                  {/* Floating Earnings Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                       <FontAwesomeIcon icon={faWallet} />
                    </div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Estimated Daily</p>
                       <p className="font-bold text-[#1f194c]">$120.00+</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= ACTION SECTION ================= */}
        <section className="py-20 bg-white relative z-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Sign Up Card */}
              <Link to='/driver-signup' className="group">
                <div className="bg-[#f8faff] p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:bg-[#2c7bfe] h-full flex items-center justify-between">
                   <div className="space-y-2">
                     <h2 className="text-3xl font-extrabold text-[#1f194c] group-hover:text-white transition-colors">Sign up now</h2>
                     <p className="text-slate-500 group-hover:text-blue-100 transition-colors font-medium">Start your application today.</p>
                   </div>
                   <div className="w-14 h-14 bg-white text-[#2c7bfe] rounded-full flex items-center justify-center text-xl shadow-md transform group-hover:rotate-[-45deg] transition-transform duration-500">
                     <FontAwesomeIcon icon={faArrowRight} />
                   </div>
                </div>
              </Link>

              {/* Login Card */}
              <Link to='/driver-login' className="group">
                <div className="bg-[#f8faff] p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:bg-[#1f194c] h-full flex items-center justify-between">
                   <div className="space-y-2">
                     <h2 className="text-3xl font-extrabold text-[#1f194c] group-hover:text-white transition-colors">Log in</h2>
                     <p className="text-slate-500 group-hover:text-slate-300 transition-colors font-medium">Continue where you left off.</p>
                   </div>
                   <div className="w-14 h-14 bg-white text-[#1f194c] rounded-full flex items-center justify-center text-xl shadow-md transform group-hover:rotate-[-45deg] transition-transform duration-500">
                     <FontAwesomeIcon icon={faArrowRight} />
                   </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ================= BENEFITS GRID ================= */}
        <section className="py-24 bg-[#f8faff]">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16 space-y-4">
                 <h2 className="text-3xl md:text-5xl font-bold text-[#1f194c]">Drive when you want.</h2>
                 <p className="text-slate-500 max-w-2xl mx-auto text-lg">Voyago is designed for your lifestyle. Choose how much you work and how much you earn.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                 {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                       <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                          <FontAwesomeIcon icon={benefit.icon} />
                       </div>
                       <h3 className="text-xl font-bold text-[#1f194c] mb-4">{benefit.title}</h3>
                       <p className="text-slate-500 leading-relaxed font-medium text-sm">{benefit.desc}</p>
                    </div>
                 ))}
              </div>

              {/* Extra Stats/Detail section */}
              <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center bg-[#1f194c] rounded-[3rem] p-8 lg:p-16 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2c7bfe] rounded-full filter blur-[100px] opacity-20"></div>
                  <div className="space-y-6 relative z-10">
                     <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Advanced tools for <br/><span className="text-[#2c7bfe]">your growth.</span></h2>
                     <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                           <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mt-1"><FontAwesomeIcon icon={faChartLine} className="text-xs" /></div>
                           <p className="text-slate-300 text-sm font-medium">Real-time earnings dashboard and heat-maps for high-demand areas.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                           <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mt-1"><FontAwesomeIcon icon={faCarRear} className="text-xs" /></div>
                           <p className="text-slate-300 text-sm font-medium">Fuel discounts and vehicle maintenance partnerships exclusively for partners.</p>
                        </div>
                     </div>
                  </div>
                  <div className="relative flex justify-center lg:justify-end">
                     <button className="px-10 py-5 bg-[#2c7bfe] text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/50">
                        Join the Community
                     </button>
                  </div>
              </div>
           </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default BecomeaDriver;