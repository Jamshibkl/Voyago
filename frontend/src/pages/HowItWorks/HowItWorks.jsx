import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, 
  faCar, 
  faMobileScreen, 
  faMapLocationDot, 
  faCreditCard,
  faIdCard,
  faRoute,
  faWallet,
  faArrowRight,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

// Assets (Ensure these paths match your folder)
import Step1Img from "../../Assets/Sign up-rafiki.svg";
import Step2Img from "../../Assets/Preferences-rafiki.svg";
import Step3Img from "../../Assets/Directions-rafiki.svg";
import Step4Img from "../../Assets/Navigation-rafiki.svg";
import Driver1Img from "../../Assets/Mobile login-pana.svg";
import Driver2Img from "../../Assets/Confirmed-bro.svg";
import Driver3Img from "../../Assets/Car driving-rafiki (2).svg";
import Driver4Img from "../../Assets/Revenue-bro.svg";

function HowItWorks() {
  const [activeTab, setActiveTab] = useState("passenger"); // 'passenger' or 'driver'

  // Custom CSS for Animations & Patterns
  const customStyles = `
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    @keyframes blob { 
      0% { transform: translate(0px, 0px) scale(1); } 
      33% { transform: translate(30px, -50px) scale(1.1); } 
      66% { transform: translate(-20px, 20px) scale(0.9); } 
      100% { transform: translate(0px, 0px) scale(1); } 
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    
    /* Subtle Grid Pattern */
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
    }
  `;

  // Data for Passenger Steps
  const passengerSteps = [
    {
      id: 1,
      title: "Create Your Account",
      desc: "Sign up in seconds. Enter your details to create a secure profile and unlock a world of premium travel. We verify every account for safety.",
      img: Step1Img,
      icon: faUser,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Set Your Preferences",
      desc: "Customize your ride. Choose your vehicle type, set temperature preferences, or request a quiet ride before you even book.",
      img: Step2Img,
      icon: faMobileScreen,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "Book & Connect",
      desc: "Enter your destination and get matched with a top-rated driver nearby. View their profile, car details, and ETA instantly.",
      img: Step3Img,
      icon: faMapLocationDot,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 4,
      title: "Track & Pay",
      desc: "Watch your driver arrive in real-time. Hop in, enjoy the journey, and pay seamlessly through the app. No cash needed.",
      img: Step4Img,
      icon: faCreditCard,
      color: "bg-green-100 text-green-600"
    }
  ];

  // Data for Driver Steps
  const driverSteps = [
    {
      id: 1,
      title: "Join the Fleet",
      desc: "Submit your application and documents online. Our verification process ensures a trusted community of professional drivers.",
      img: Driver1Img,
      icon: faIdCard,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 2,
      title: "Accept Requests",
      desc: "Go online whenever you want. Receive ride requests nearby and accept the ones that fit your schedule and route preferences.",
      img: Driver2Img,
      icon: faCar,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      id: 3,
      title: "Navigate Efficiently",
      desc: "Get turn-by-turn navigation directly in the app. Avoid traffic and take the smartest routes to ensure timely arrivals.",
      img: Driver3Img,
      icon: faRoute,
      color: "bg-teal-100 text-teal-600"
    },
    {
      id: 4,
      title: "Earn & Grow",
      desc: "Get paid instantly after every trip. Track your daily earnings and receive performance bonuses for maintaining high ratings.",
      img: Driver4Img,
      icon: faWallet,
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const activeSteps = activeTab === "passenger" ? passengerSteps : driverSteps;

  return (
    <div className="font-poppins text-slate-900 bg-white overflow-x-hidden selection:bg-blue-100">
      <style>{customStyles}</style>
      
      {/* 1. Navbar (Fixed) */}
      <NavBar />

      {/* 2. Main Content (Padded for Fixed Navbar) */}
      <div className="pt-24 min-h-screen">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full py-20 pb-32 overflow-hidden bg-[#fdfdff]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          {/* Animated Blobs */}
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] animate-blob opacity-50"></div>
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000 opacity-50"></div>

          <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#2c7bfe] text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100 shadow-sm">
              Simple & Transparent
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1f194c] mb-6 leading-tight">
              How Voyago <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c7bfe] to-purple-600">Works.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for a comfortable ride or want to earn on your own schedule, getting started is easier than ever.
            </p>

            {/* TAB SWITCHER */}
            <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 shadow-lg relative z-20">
                <button 
                    onClick={() => setActiveTab("passenger")}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === "passenger" ? "bg-[#2c7bfe] text-white shadow-md" : "text-slate-500 hover:bg-slate-50"}`}
                >
                    <FontAwesomeIcon icon={faUser} /> For Passengers
                </button>
                <button 
                    onClick={() => setActiveTab("driver")}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === "driver" ? "bg-[#1f194c] text-white shadow-md" : "text-slate-500 hover:bg-slate-50"}`}
                >
                    <FontAwesomeIcon icon={faCar} /> For Drivers
                </button>
            </div>
          </div>
        </section>

        {/* ================= STEPS SECTION (ZIG-ZAG) ================= */}
        <section className="relative w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {activeSteps.map((step, index) => (
                    <div key={step.id} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Text Side */}
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-2xl mx-auto md:mx-0 shadow-sm mb-6`}>
                                <FontAwesomeIcon icon={step.icon} />
                            </div>
                            <div className="relative">
                                {/* Big Number Background */}
                                <span className="text-8xl font-black text-slate-50 absolute -top-10 -left-6 -z-10 select-none opacity-80">0{step.id}</span>
                                <h3 className="text-3xl font-bold text-[#1f194c] relative z-10">{step.title}</h3>
                            </div>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                {step.desc}
                            </p>
                            <ul className="space-y-2 pt-2">
                                <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 font-medium">
                                    <FontAwesomeIcon icon={faCheck} className="text-green-500" /> Instant Confirmation
                                </li>
                                <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 font-medium">
                                    <FontAwesomeIcon icon={faCheck} className="text-green-500" /> 24/7 Support
                                </li>
                            </ul>
                        </div>

                        {/* Image Side */}
                        <div className="flex-1 w-full">
                            <div className="relative group perspective-1000">
                                {/* Decorative BG Card */}
                                <div className={`absolute inset-0 rounded-[2.5rem] rotate-3 opacity-20 transition-transform duration-500 group-hover:rotate-6 ${activeTab === 'passenger' ? 'bg-blue-200' : 'bg-orange-200'}`}></div>
                                
                                {/* Main Image Card */}
                                <div className="relative bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-slate-100 rounded-bl-[100px] -z-10"></div>
                                    <img src={step.img} alt={step.title} className="w-full h-auto max-h-[320px] object-contain mx-auto" />
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-24 relative overflow-hidden bg-[#1f194c] w-full">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2c7bfe] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Ready to get started?
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    Join the Voyago community today. Whether you're commuting to work or driving to earn, we've got you covered.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-[#2c7bfe] text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 group">
                        Sign up to Ride <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#1f194c] transition-all">
                        Become a Driver
                    </button>
                </div>
            </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default HowItWorks;