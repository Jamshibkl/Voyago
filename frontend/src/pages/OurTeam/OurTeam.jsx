import React from "react";
import Founder1 from "../../Assets/kaushik.jpg";
import Founder2 from "../../Assets/jamsheer-profile.jpeg";
import Amigo from "../../Assets/Team goals-cuate.svg";
import Revenue from "../../Assets/Team spirit-cuate.svg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedin, 
  faTwitter 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faLightbulb, 
  faShieldHalved, 
  faUsers, 
  faHeart,
  faArrowRight 
} from "@fortawesome/free-solid-svg-icons";

function OurTeam() {
  // Custom Animations (Consistent with Home/About)
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
    
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  const values = [
    { icon: faLightbulb, title: "Innovation", desc: "Pushing boundaries to redefine modern mobility." },
    { icon: faShieldHalved, title: "Integrity", desc: "Building trust through transparency and safety." },
    { icon: faUsers, title: "Inclusion", desc: "Celebrating diverse perspectives in every journey." },
    { icon: faHeart, title: "Empathy", desc: "Putting our passengers and drivers at the heart of Voyago." }
  ];

  return (
    <div className="font-poppins text-slate-900 bg-white overflow-x-hidden selection:bg-blue-100">
      <style>{customStyles}</style>
      <NavBar />

      <div className="pt-24">
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#fdfdff]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#2c7bfe] text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              The People Behind Voyago
            </span>
            <h1 className="animate-fade-in-up text-5xl md:text-7xl font-extrabold text-[#1f194c] mb-8 leading-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c7bfe] to-purple-600">Dream Team.</span>
            </h1>
            <p className="animate-fade-in-up delay-100 text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              We are a collective of visionaries, engineers, and dreamers dedicated to 
              shaping the future of transportation with expertise and shared passion.
            </p>
          </div>
        </section>

        {/* ================= FOUNDERS SECTION ================= */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f194c]">Our Leadership</h2>
              <div className="w-20 h-1.5 bg-[#2c7bfe] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
              {/* Founder 1 */}
              <div className="group animate-fade-in-up delay-100">
                <div className="bg-[#f8faff] rounded-[2.5rem] p-8 lg:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-[100px] -z-0"></div>
                  <img src={Founder1} alt="Kaushik N" className="w-32 h-32 rounded-2xl object-cover mb-8 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white relative z-10" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#1f194c]">Kaushik N</h3>
                    <p className="text-[#2c7bfe] font-bold text-sm uppercase tracking-widest mb-6">Co-Founder & Visionary</p>
                    <p className="text-slate-500 leading-relaxed mb-8">
                      A visionary leader with a background in transportation, Kaushik
                      spearheads strategic direction and innovation. Her commitment to 
                      excellence drives our mission forward.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 shadow-sm transition-colors border border-slate-100">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="group animate-fade-in-up delay-200">
                <div className="bg-[#f8faff] rounded-[2.5rem] p-8 lg:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-bl-[100px] -z-0"></div>
                  <img src={Founder2} alt="Mohammed Jamsheer" className="w-32 h-32 rounded-2xl object-cover mb-8 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white relative z-10" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#1f194c]">Mohammed Jamsheer</h3>
                    <p className="text-[#2c7bfe] font-bold text-sm uppercase tracking-widest mb-6">Co-Founder & Tech Maestro</p>
                    <p className="text-slate-500 leading-relaxed mb-8">
                      The tech genius behind Voyago, leading the development of cutting-edge 
                      solutions. He ensures we stay at the forefront of technological 
                      advancements.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 shadow-sm transition-colors border border-slate-100">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES SECTION ================= */}
        <section className="py-24 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1f194c] mb-8 leading-tight">
                  The Values That <br/><span className="text-[#2c7bfe]">Drive Us.</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {values.map((v, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2c7bfe] shadow-sm">
                        <FontAwesomeIcon icon={v.icon} />
                      </div>
                      <h4 className="font-bold text-[#1f194c] text-lg">{v.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-3xl"></div>
                <img src={Amigo} alt="Diversity" className="relative w-full max-w-md animate-float" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CAREERS / OPPORTUNITIES ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#1f194c] rounded-[3rem] p-8 lg:p-20 relative overflow-hidden">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2c7bfe] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 text-center lg:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Want to Join the <br/><span className="text-[#2c7bfe]">Voyago Revolution?</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    We are always looking for talented individuals to contribute to our mission 
                    of revolutionizing transportation. Be a part of shaping the future of travel.
                  </p>
                  <button className="px-10 py-4 bg-[#2c7bfe] text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 mx-auto lg:mx-0 group">
                    View Openings <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="hidden lg:block">
                  <img src={Revenue} alt="Join Us" className="w-full max-w-sm mx-auto drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default OurTeam;