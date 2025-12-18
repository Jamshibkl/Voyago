import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ContactImg from "../../Assets/Messaging fun-rafiki.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faPaperPlane,
  faCircleCheck,
  faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => setMsg(""), 15000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  const handleInputChange = (e, type) => {
    setError("");
    const value = e.target.value;
    switch (type) {
      case "fname": setFname(value); if (!value) setError("First name is required!"); break;
      case "lname": setLname(value); if (!value) setError("Last name is required!"); break;
      case "email": setEmail(value); if (!value) setError("Email is required!"); break;
      case "message": setMessage(value); if (!value) setError("Message is required!"); break;
      default: break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname && lname && email && message) {
      const url = "http://localhost/devtest/reactjs/contact_us.php";
      const headers = { "Accept": "application/json", "Content-Type": "application/json" };
      const Data = { fname, lname, email, message };

      fetch(url, { method: "POST", headers, body: JSON.stringify(Data) })
        .then((res) => res.json())
        .then((res) => setMsg(res[0].result))
        .catch((err) => setError("Connection failed. Please try again later."));

      setFname(""); setLname(""); setEmail(""); setMessage("");
      alert("Thank You for Contacting Us!");
    } else {
      setError("All fields are required!");
    }
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
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
      <NavBar />

      <main className="flex-grow pt-24 lg:pt-32">
        {/* ================= HERO & CONTACT SECTION ================= */}
        <section className="relative w-full py-12 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* LEFT SIDE: BRAND CONTENT & VISUAL */}
              <div className="flex-1 text-center lg:text-left space-y-10 animate-fade-in-up">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#2c7bfe] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                    Contact Center
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black text-[#1f194c] leading-[1.1] tracking-tighter">
                    Get in <span className="text-[#2c7bfe]">Touch.</span>
                  </h1>
                  <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
                    Have questions, feedback, or need assistance? Our global team is here 24/7 to ensure your Voyago experience is seamless.
                  </p>
                </div>

                <div className="relative group max-w-md mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] rotate-3 -z-10 transition-transform group-hover:rotate-6"></div>
                  <img src={ContactImg} alt="Contact Support" className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto animate-float" />
                </div>

                {/* Direct Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#2c7bfe] group-hover:bg-[#2c7bfe] group-hover:text-white transition-all">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Email Us</p>
                      <p className="font-bold text-slate-700">support@voyago.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#2c7bfe] group-hover:bg-[#2c7bfe] group-hover:text-white transition-all">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Call Center</p>
                      <p className="font-bold text-slate-700">+1 (555) 000-0000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: GLASSMORPHIC FORM CARD */}
              <div className="w-full lg:w-[500px] animate-fade-in-up delay-100">
                <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white">
                  <div className="mb-10 text-center lg:text-left">
                    <h3 className="text-3xl font-black text-[#1f194c] tracking-tight">Send a Message</h3>
                    <p className="text-slate-400 font-semibold text-sm mt-2">We typically respond within 2 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">First Name</label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-4 py-3.5 bg-gray-50/50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-2xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                          value={fname}
                          onChange={(e) => handleInputChange(e, "fname")}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full px-4 py-3.5 bg-gray-50/50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-2xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                          value={lname}
                          onChange={(e) => handleInputChange(e, "lname")}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-2xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                        value={email}
                        onChange={(e) => handleInputChange(e, "email")}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Your Message</label>
                      <textarea
                        rows="4"
                        placeholder="How can we help you today?"
                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-2xl focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium resize-none"
                        value={message}
                        onChange={(e) => handleInputChange(e, "message")}
                      />
                    </div>

                    {/* Feedback Messages */}
                    {error && (
                      <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs font-bold animate-fade-in-up">
                        <FontAwesomeIcon icon={faTriangleExclamation} /> {error}
                      </div>
                    )}
                    {msg && (
                      <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl text-xs font-bold animate-fade-in-up">
                        <FontAwesomeIcon icon={faCircleCheck} /> {msg}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group text-lg mt-4"
                    >
                      Send Message <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm" />
                    </button>
                  </form>

                  {/* Social Icons Integrated into Form Footer */}
                  <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Connect With Us</p>
                    <div className="flex justify-center gap-8">
                      <FontAwesomeIcon icon={faFacebook} className="text-xl text-slate-400 hover:text-[#2c7bfe] cursor-pointer transition-colors" />
                      <FontAwesomeIcon icon={faInstagram} className="text-xl text-slate-400 hover:text-[#2c7bfe] cursor-pointer transition-colors" />
                      <FontAwesomeIcon icon={faXTwitter} className="text-xl text-slate-400 hover:text-[#2c7bfe] cursor-pointer transition-colors" />
                      <FontAwesomeIcon icon={faYoutube} className="text-xl text-slate-400 hover:text-[#2c7bfe] cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactUs;