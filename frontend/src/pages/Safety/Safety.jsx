import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar"; 
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShieldHalved, 
  faUserCheck, 
  faLocationDot, 
  faCreditCard, 
  faMaskFace, 
  faSprayCanSparkles, 
  faHandshakeSlash,
  faTriangleExclamation,
  faCircleCheck,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import safetyHero from "../../Assets/safety.jpg";
import covidImg from "../../Assets/covid19 family safety new bg.jpg";
import communityImg from "../../Assets/istockphoto-1205892464-612x612.jpg";

function Safety() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const customStyles = `
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-blob { animation: blob 10s infinite; }
    .bg-grid-pattern {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="font-poppins text-slate-900 bg-[#fdfdff] overflow-x-hidden selection:bg-blue-100 flex flex-col min-h-screen">
      <style>{customStyles}</style>
      <Navbar />

      {/* --- Safe Zone Wrapper to clear fixed Navbar --- */}
      <main className="flex-grow pt-24 lg:pt-32">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#2c7bfe] rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
                  <FontAwesomeIcon icon={faShieldHalved} /> Safety Protocol v4.0
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-[#1f194c] leading-[1.1] mb-8 tracking-tighter">
                  Safe Journeys <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c7bfe] via-blue-600 to-purple-600">
                    Start Here.
                  </span>
                </h1>
                <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
                  At Voyago, safety is our top priority. We've engineered advanced multi-layer security protocols to provide a secure and reliable transportation experience for every passenger and driver.
                </p>
              </div>
              <div className="flex-1 w-full max-w-xl" data-aos="fade-left">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] rotate-3 -z-10 transition-transform group-hover:rotate-6"></div>
                  <img src={safetyHero} alt="Safety First" className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto object-cover transform transition-transform group-hover:scale-[1.02]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PASSENGER SAFETY GRID ================= */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-[#1f194c] mb-16 tracking-tight">Passenger Protections</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { 
                  icon: faUserCheck, 
                  title: "Driver Screening", 
                  desc: "We rigorously screen all drivers via background checks, driving record reviews, and mandatory vehicle inspections to ensure absolute eligibility.",
                  color: "text-blue-500", bg: "bg-blue-50"
                },
                { 
                  icon: faLocationDot, 
                  title: "Real-Time Tracking", 
                  desc: "Know exactly where your driver is and their exact arrival time via our encrypted live GPS interface, providing total peace of mind.",
                  color: "text-purple-500", bg: "bg-purple-50"
                },
                { 
                  icon: faCreditCard, 
                  title: "Secure Payments", 
                  desc: "Every transaction is fully encrypted. Your financial data is protected by bank-level security protocols for every journey.",
                  color: "text-green-500", bg: "bg-green-50"
                }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-[#f8faff] border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group text-center flex flex-col items-center" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:rotate-6 transition-transform`}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1f194c] mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COVID MEASURES ================= */}
        <section className="py-24 relative overflow-hidden bg-[#fdfdff]">
           <div className="container max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                 <div className="flex-1 space-y-8" data-aos="fade-left">
                    <h2 className="text-4xl font-black text-[#1f194c] tracking-tight">Hygiene & Health Measures</h2>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">
                       We've implemented stringent sanitization protocols to prioritize health. Mandatory face coverings and a contactless experience minimize risk across our entire community.
                    </p>
                    <div className="space-y-4 pt-4">
                       {[
                         { icon: faSprayCanSparkles, text: "Advanced vehicle sanitization after every ride." },
                         { icon: faMaskFace, text: "Mandatory mask policy for all partners." },
                         { icon: faHandshakeSlash, text: "Zero-contact digital experience." }
                       ].map((step, idx) => (
                         <div key={idx} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-[#2c7bfe] group-hover:bg-[#2c7bfe] group-hover:text-white transition-all">
                               <FontAwesomeIcon icon={step.icon} />
                            </div>
                            <span className="font-bold text-slate-700 text-sm">{step.text}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 w-full" data-aos="fade-right">
                    <img src={covidImg} alt="Hygiene" className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-auto object-cover max-h-[500px]" />
                 </div>
              </div>
           </div>
        </section>

        {/* ================= COMMUNITY SAFETY ================= */}
        <section className="py-24 bg-white">
           <div className="container max-w-7xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                 <div className="flex-1 space-y-6" data-aos="fade-up">
                    <div className="w-14 h-14 bg-blue-50 text-[#2c7bfe] rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                       <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <h2 className="text-4xl font-black text-[#1f194c] tracking-tight leading-tight">Community Governance</h2>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">
                       Our reporting features allow for swift action on safety concerns. We focus on proactive safety education to foster a secure environment for all.
                    </p>
                    <button className="flex items-center gap-2 text-[#2c7bfe] font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                       Report a Concern <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                 </div>
                 <div className="flex-1 w-full" data-aos="zoom-in">
                    <img src={communityImg} alt="Community" className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
              </div>
           </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="py-24 bg-[#1f194c] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2c7bfe] rounded-full filter blur-[150px] opacity-20"></div>
           <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Still have questions?</h2>
              <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Our specialized Safety Response Team is active 24/7 to address any inquiries or concerns regarding your experience on Voyago.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button className="px-10 py-5 bg-[#2c7bfe] text-white rounded-2xl font-black shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                    Contact Safety Team <FontAwesomeIcon icon={faArrowRight} />
                 </button>
                 <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black hover:bg-white/20 transition-all">
                    Safety Guidelines
                 </button>
              </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Safety;