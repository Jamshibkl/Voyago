import React, { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import PaymentSucsessIcon from "../../../Assets/payment-sucssesfull.png";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCircleCheck, 
  faHashtag, 
  faIdCard, 
  faIndianRupeeSign, 
  faUser, 
  faCommentDots, 
  faHouse, 
  faPaperPlane,
  faTriangleExclamation,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

function PaymentSection() {
  const { transactionId, driverId, amount, user } = useParams();
  const navigate = useNavigate();
  
  // Data State
  const [driver] = useState({
    driver: "John Doe",
    email: "driver@example.com",
    mobile: "+123456789",
  });
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setError("");
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    if (feedback.trim()) {
      console.log({
        feedback,
        userName: user || "Anonymous",
        driverName: driver.driver,
        driver_id: driverId || "Anonymous",
      });
      setFeedback("");
      alert("Thank you for your feedback!");
      navigate("/");
    } else {
      setError("Feedback cannot be blank!");
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

      {/* Main Wrapper with Safe Zone Padding for Slim Navbar */}
      <main className="flex-grow pt-20 lg:pt-24 relative pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        
        {/* Animated Background Mesh */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10 py-12">
          
          {/* ================= SUCCESS HEADER ================= */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img src={PaymentSucsessIcon} alt="Success" className="w-20 h-20 relative z-10 drop-shadow-xl animate-float" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-[#1f194c] tracking-tight">Payment <span className="text-[#2c7bfe]">Successful!</span></h1>
            <p className="text-slate-500 font-medium mt-4">Thank you for riding with Voyago. Your transaction is complete.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT SIDE: SUMMARY TILES (7/12 width) */}
            <div className="lg:col-span-7 space-y-8 animate-fade-in-up delay-100">
              
              {/* Transaction Summary Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 lg:p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                 <h3 className="text-xl font-bold text-[#1f194c] mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 text-[#2c7bfe] rounded-xl flex items-center justify-center shadow-sm">
                        <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    Transaction Details
                 </h3>
                 <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { label: "Passenger Name", val: user || "Not Specified", icon: faUser },
                      { label: "Transaction ID", val: transactionId || "TR-882910", icon: faHashtag },
                      { label: "Driver ID", val: driverId || "DR-12345", icon: faIdCard },
                      { label: "Amount Paid", val: `₹${amount || "1,000"}`, icon: faIndianRupeeSign, color: "text-[#2c7bfe]" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-gray-50/50 p-5 rounded-[1.5rem] border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1">
                          <FontAwesomeIcon icon={item.icon} className="text-[8px]" /> {item.label}
                        </p>
                        <p className={`text-lg font-black ${item.color || 'text-slate-700'}`}>{item.val}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Driver Details Card */}
              <div className="bg-[#1f194c] rounded-[3rem] p-8 lg:p-10 border border-[#1f194c] shadow-2xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2c7bfe] rounded-full filter blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                    <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-[#2c7bfe] rounded-3xl blur-xl opacity-40"></div>
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzN9e04YOnmLl8jQf06trp40xZmVAsl2jCg&s" 
                          alt="Driver" 
                          className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-[2rem] border-4 border-[#2c7bfe] object-cover shadow-xl"
                        />
                    </div>
                    <div className="text-center sm:text-left flex-grow">
                        <span className="text-[10px] font-black text-[#2c7bfe] uppercase tracking-[0.2em]">Verified Professional</span>
                        <h3 className="text-3xl font-black tracking-tight mt-1 mb-6">{driver.driver}</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                           <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                              <FontAwesomeIcon icon={faEnvelope} className="text-[#2c7bfe]" /> 
                              <span className="truncate">{driver.email}</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                              <FontAwesomeIcon icon={faPhone} className="text-[#2c7bfe]" /> 
                              <span>{driver.mobile}</span>
                           </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* RIGHT SIDE: FEEDBACK FORM (5/12 width) */}
            <div className="lg:col-span-5 animate-fade-in-up delay-200 lg:sticky lg:top-32">
                <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white">
                  <div className="mb-8 text-center lg:text-left">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto lg:mx-0 shadow-sm">
                        <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                    <h3 className="text-2xl font-black text-[#1f194c] tracking-tight leading-tight">Rate Your Journey</h3>
                    <p className="text-slate-400 font-semibold text-sm mt-2">How was your experience with {driver.driver}?</p>
                  </div>

                  <div className="space-y-6">
                    <textarea
                      rows="6"
                      placeholder="Share your thoughts about the driver and trip quality..."
                      className="w-full px-6 py-5 bg-gray-50 border border-slate-100 focus:bg-white text-slate-900 text-sm rounded-[2rem] focus:outline-none focus:border-[#2c7bfe] focus:ring-4 focus:ring-blue-500/10 transition-all font-medium resize-none"
                      value={feedback}
                      onChange={handleInputChange}
                    />

                    {error && (
                      <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs font-bold animate-fade-in-up">
                        <FontAwesomeIcon icon={faTriangleExclamation} /> {error}
                      </div>
                    )}

                    <div className="space-y-4">
                        <button
                        onClick={handleSubmit}
                        className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group text-lg"
                        >
                        Submit Feedback <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm" />
                        </button>
                        
                        <Link to="/" className="block">
                            <button className="w-full bg-white text-slate-500 border-2 border-slate-100 hover:border-[#2c7bfe] hover:text-[#2c7bfe] font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group">
                                <FontAwesomeIcon icon={faHouse} className="text-sm opacity-50 group-hover:opacity-100" /> Back to Home
                            </button>
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PaymentSection;