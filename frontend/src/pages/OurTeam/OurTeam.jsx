import React from "react";
import "./OurTeam.css";
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
    <>
    <NavBar />
      <div className="conatiner">
        <div className="ourTeam">
          <h1>Our Team</h1>
          <p className="teamPara">
            Get to know the passionate individuals who drive Voyago forward,
            shaping the <br /> future of transportation with their expertise,
            dedication, and shared vision.
          </p>
          <div className="Founders">
            <h3>Meet Our Founders</h3>
            <div className="founder">
              <div className="co-Founder">
                <img src={Founder1} alt="" />
                <h4>
                  Kaushik N <br /> <span>Co-Founder and Visionary
                  </span> </h4>
                <p>
                  A visionary leader with a background in transportation, Kaushik
                  spearheads Voyago's strategic direction and innovation
                  initiatives. Her unwavering commitment to excellence drives
                  the company's mission forward.
                </p>
              </div>

              <div className="co-Founder">
                <img src={Founder2} alt="" />
                <h4>
                  Mohammed Jamsheer <br /> <span>Co-Founder and Technology Maestro</span>
                </h4>
                <p>
                 Jamsheer, the tech genius behind Voyago, leads the development
                  of cutting-edge solutions. With a passion for innovation, he
                  ensures Voyago stays at the forefront of technological
                  advancements in the transportation industry.
                </p>
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