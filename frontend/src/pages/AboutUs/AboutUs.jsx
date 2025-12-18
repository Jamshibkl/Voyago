import React from "react";
import Navbar from "../../components/NavBar/NavBar"; // Ensure path is correct
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faQuoteLeft, 
  faUsers, 
  faShieldHalved, 
  faLightbulb,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

// Assets
import img1 from "../../Assets/photo_2024-02-06_13-13-44.jpg"; // Mission Image
import img2 from "../../Assets/photo_2024-02-06_13-13-53.jpg"; // Values Image
import img3 from "../../Assets/photo_2024-02-06_13-13-32.jpg"; // Team Image
import innovation from "../../Assets/Innovation-bro.svg";

function AboutUs() {
  // Custom Animations (Same as Home/SignIn)
  const customStyles = `
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
    @keyframes blob { 
      0% { transform: translate(0px, 0px) scale(1); } 
      33% { transform: translate(30px, -50px) scale(1.1); } 
      66% { transform: translate(-20px, 20px) scale(0.9); } 
      100% { transform: translate(0px, 0px) scale(1); } 
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  return (
    <div className="font-poppins text-slate-900 bg-white overflow-x-hidden selection:bg-blue-100">
      <style>{customStyles}</style>
      
      {/* 1. Navbar (Fixed) */}
      <Navbar />

      {/* 2. Page Content (Padded Top to clear Navbar) */}
      <div className="pt-24">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#fdfdff]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#2c7bfe] text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1f194c] mb-8 leading-tight">
              Driving the Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c7bfe] to-purple-600">Travel & Mobility.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Welcome to Voyago. We are more than just a transportation service; we are a movement dedicated to transforming how the world moves—one safe, reliable, and premium journey at a time.
            </p>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Happy Travelers", value: "50k+" },
                { label: "Cities Covered", value: "30+" },
                { label: "Verified Drivers", value: "1,200+" },
                { label: "Safety Rating", value: "4.9/5" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-4xl font-extrabold text-[#2c7bfe]">{stat.value}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ZIG-ZAG CONTENT SECTIONS ================= */}
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          
          {/* Section 1: Mission (Image Left) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#2c7bfe] rounded-[2rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
              <img src={img1} alt="Our Mission" className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:-translate-y-2" />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#2c7bfe] text-xl">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f194c]">Empowering Journeys, <br/>Redefining Travel.</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Our purpose goes beyond merely moving from point A to point B. By merging skilled drivers with state-of-the-art technology, we aspire to set new benchmarks in the industry. Voyago is a commitment to creating a world where every journey is an adventure.
              </p>
            </div>
          </div>

          {/* Section 2: Values (Image Right) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-purple-500 rounded-[2rem] -rotate-3 opacity-10 group-hover:-rotate-6 transition-transform duration-500"></div>
              <img src={img2} alt="Our Values" className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:-translate-y-2" />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-xl">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f194c]">Safety, Transparency, & <br/>Environmental Responsibility.</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Transparency is woven into the fabric of our operations. We foster trust through clear communication on fares. Recognizing our environmental impact, we embrace sustainability, striving to minimize our ecological footprint with eco-friendly fleet options.
              </p>
            </div>
          </div>

          {/* Section 3: Team (Image Left) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-pink-500 rounded-[2rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
              <img src={img3} alt="Our Team" className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:-translate-y-2" />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-500 text-xl">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f194c]">Meet the Innovators.</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Led by visionaries Sarah and Michael, our team combines strategic insight with technological prowess. From David, our Skilled Driver Liaison, to Sophia, our Sustainability Advocate, this dynamic team forms the backbone of Voyago.
              </p>
            </div>
          </div>

        </div>

        {/* ================= VISION / INNOVATION SECTION ================= */}
        <section className="bg-[#1f194c] py-24 relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2c7bfe] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Envisioning Tomorrow: <br/>
                  <span className="text-[#2c7bfe]">Our Commitment to Innovation</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Voyago envisions a future where transportation is seamlessly woven into the fabric of enriched experiences. Our commitment to innovation propels us forward, with a vision of advancing technological frontiers to introduce cutting-edge features.
                </p>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-[#2c7bfe] mb-4" />
                  <p className="text-white italic text-lg">
                    "We aim to expand our reach, ensuring reliable transportation is accessible to a broader audience, while sustaining our commitment to eco-friendly practices."
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                {/* Floating 3D Graphic */}
                <div className="relative animate-float">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>
                   <img src={innovation} alt="Innovation" className="relative w-full max-w-md drop-shadow-2xl" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CTA / JOIN US ================= */}
        <section className="py-24 bg-[#f8faff]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f194c] mb-6">Ready to Ride?</h2>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
              Experience the difference of a professional driver. Safe, reliable, and tailored to your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#2c7bfe] text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                Book a Driver <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="px-8 py-4 bg-white text-[#1f194c] border border-slate-200 rounded-full font-bold text-lg hover:bg-white hover:border-[#2c7bfe] transition-all shadow-sm">
                Join as a Driver
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;