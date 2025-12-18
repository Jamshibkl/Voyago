import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faLock, 
  faIdCard, 
  faMapLocationDot, 
  faCamera, 
  faFileShield, 
  faAddressCard,
  faArrowRight,
  faTriangleExclamation,
  faCircleCheck,
  faIdBadge
} from "@fortawesome/free-solid-svg-icons";

function SignInUp() {
  const navigate = useNavigate();
  
  // --- Form States Restored ---
  const [driver, setDriver] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [adharId, setAdharId] = useState("");
  const [adharImg, setAdharImg] = useState("");
  const [license, setLicense] = useState("");
  const [licenseImg, setLicenseImg] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  // --- Validation Logic Restored ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMsg("");

    if (
      driver && email && mobile && pass1 && pass2 && 
      adharId && adharImg && license && licenseImg && 
      profileImg && location
    ) {
      if (mobile.length !== 10 || isNaN(mobile)) {
        setError("Mobile number must be 10 digits.");
        return;
      }
      if (adharId.length !== 12 || isNaN(adharId)) {
        setError("Adhar number must be 12 digits.");
        return;
      }
      if (license.length !== 16) {
        setError("License number must be 16 characters.");
        return;
      }
      if (pass1 !== pass2) {
        setError("Passwords do not match!");
        return;
      }

      setMsg("Form submitted successfully!");
      setTimeout(() => navigate("/driver-login"), 1500);
    } else {
      setError("All fields are required!");
    }
  };

  const customStyles = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
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

      {/* Main Content with padding to clear fixed Slim Navbar */}
      <main className="flex-grow pt-20 lg:pt-24 relative flex items-center py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#2c7bfe] border border-blue-100 shadow-sm mb-6">
                <FontAwesomeIcon icon={faIdBadge} className="text-sm" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Join the VOYAGO Fleet</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-[#1f194c] tracking-tight">Create Driver <span className="text-[#2c7bfe]">Account.</span></h1>
            <p className="text-slate-500 font-medium mt-4">Complete your professional profile to start earning.</p>
          </div>

          {/* ================= REGISTRATION FORM CARD ================= */}
          <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-16 border border-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] animate-fade-in-up delay-100">
            
            <form onSubmit={handleSubmit} className="space-y-12">
              
              <div className="grid lg:grid-cols-2 gap-16">
                
                {/* --- Left Column: Basic Information --- */}
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-[#1f194c] uppercase tracking-widest border-l-4 border-[#2c7bfe] pl-4">Account Basics</h3>
                  
                  <div className="space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faUser} /></div>
                      <input type="text" placeholder="Username" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={driver} onChange={(e) => setDriver(e.target.value)} />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faEnvelope} /></div>
                      <input type="email" placeholder="Email Address" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faPhone} /></div>
                      <input type="number" placeholder="Mobile (10 digits)" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faLock} /></div>
                        <input type="password" placeholder="Password" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={pass1} onChange={(e) => setPass1(e.target.value)} />
                      </div>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faLock} /></div>
                        <input type="password" placeholder="Repeat" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={pass2} onChange={(e) => setPass2(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    <h3 className="text-lg font-black text-[#1f194c] uppercase tracking-widest border-l-4 border-purple-400 pl-4">Upload Documents</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { label: "Profile", icon: faCamera, state: setProfileImg, file: profileImg },
                            { label: "Adhar", icon: faAddressCard, state: setAdharImg, file: adharImg },
                            { label: "License", icon: faFileShield, state: setLicenseImg, file: licenseImg }
                        ].map((upload, idx) => (
                            <label key={idx} className="cursor-pointer group flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-100 rounded-[1.5rem] bg-gray-50/50 hover:bg-white hover:border-[#2c7bfe] transition-all aspect-square">
                                <input type="file" className="hidden" onChange={(e) => upload.state(e.target.files[0])} />
                                <FontAwesomeIcon icon={upload.file ? faCircleCheck : upload.icon} className={`text-xl mb-2 ${upload.file ? 'text-green-500' : 'text-slate-400 group-hover:text-[#2c7bfe]'}`} />
                                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider text-center">{upload.file ? 'Attached' : upload.label}</span>
                            </label>
                        ))}
                    </div>
                  </div>
                </div>

                {/* --- Right Column: Identification & Location --- */}
                <div className="space-y-6">
                  <h3 className="text-lg font-black text-[#1f194c] uppercase tracking-widest border-l-4 border-green-400 pl-4">Identification</h3>
                  
                  <div className="space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faIdCard} /></div>
                      <input type="text" placeholder="Adhar Number (12 digits)" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={adharId} onChange={(e) => setAdharId(e.target.value)} />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faIdCard} /></div>
                      <input type="text" placeholder="License Number (16 characters)" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={license} onChange={(e) => setLicense(e.target.value)} />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2c7bfe] transition-colors"><FontAwesomeIcon icon={faMapLocationDot} /></div>
                      <input type="text" placeholder="Operating Location" className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-slate-100 rounded-2xl focus:bg-white text-slate-900 text-sm focus:outline-none focus:border-[#2c7bfe] transition-all font-medium" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                  </div>

                  {/* Summary Tips */}
                  <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 mt-8 space-y-3">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verification Status</p>
                     <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                           <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" /> Documents will be verified within 24hrs
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                           <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" /> Background check auto-initializes
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Feedback & Actions */}
              <div className="pt-6 border-t border-slate-100 space-y-6">
                {error && (
                  <div className="flex items-center justify-center gap-2 text-red-500 bg-red-50 p-4 rounded-2xl text-xs font-black uppercase tracking-widest animate-fade-in-up">
                    <FontAwesomeIcon icon={faTriangleExclamation} /> {error}
                  </div>
                )}
                {msg && (
                  <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-4 rounded-2xl text-xs font-black uppercase tracking-widest animate-fade-in-up">
                    <FontAwesomeIcon icon={faCircleCheck} /> {msg}
                  </div>
                )}

                <button type="submit" className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-5 rounded-3xl shadow-xl shadow-blue-500/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group text-xl">
                  Complete Registration <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>

            <div className="mt-12 text-center">
              <p className="text-sm text-slate-400 font-medium">Already part of the team? <Link to="/driver-login" className="text-[#2c7bfe] font-black hover:underline ml-1">Login here</Link></p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SignInUp;