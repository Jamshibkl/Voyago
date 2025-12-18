import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCircleCheck, 
  faReceipt, 
  faUserTie, 
  faIdCard, 
  faPhone, 
  faEnvelope, 
  faHashtag,
  faArrowRight,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";

function Chekout() {
  const navigate = useNavigate();
  
  // Data restored from original logic
  const tranId = "12345";
  const driverName = "John Doe";
  const driveremail = "driver@example.com";
  const driverid = "67890";
  const drivermobile = "+123456789";

  // Simulation logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Logic for automatic reload if needed, though usually removed for UX
      // window.location.reload(); 
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = () => {
    navigate('/payment-section'); //
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
      <main className="flex-grow pt-20 lg:pt-24 flex items-center justify-center relative py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
        
        {/* Animated Background Mesh */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

        <div className="container max-w-2xl mx-auto px-6 relative z-10">
          
          {tranId ? (
            /* ================= SUCCESS STATE ================= */
            <div className="animate-fade-in-up space-y-8">
              
              {/* Header Visual */}
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-xl shadow-green-500/20 relative z-10">
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                </div>
                <div className="space-y-1">
                    <h1 className="text-3xl lg:text-4xl font-black text-[#1f194c] tracking-tight">Payment Successful</h1>
                    <p className="text-slate-500 font-medium">Your transaction has been processed securely.</p>
                </div>
              </div>

              {/* Digital Receipt Card */}
              <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-12 border border-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] relative overflow-hidden">
                
                {/* Decorative Background Icon */}
                <div className="absolute -top-10 -right-10 opacity-[0.03] text-[180px] text-[#1f194c] pointer-events-none">
                    <FontAwesomeIcon icon={faReceipt} />
                </div>

                <div className="relative z-10 space-y-8">
                    
                    {/* Brand Banner */}
                    <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                        <span className="text-xl font-black tracking-tighter text-[#1f194c]">VOYAGO</span>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction Date</p>
                            <p className="text-xs font-bold text-slate-700">Dec 18, 2025</p>
                        </div>
                    </div>

                    {/* Details List */}
                    <div className="space-y-4">
                        {[
                            { label: "Driver Name", val: driverName, icon: faUserTie },
                            { label: "Driver ID", val: `#${driverid}`, icon: faIdCard },
                            { label: "Mobile No", val: drivermobile, icon: faPhone },
                            { label: "Email Address", val: driveremail, icon: faEnvelope },
                            { label: "Transaction ID", val: tranId, icon: faHashtag }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 hover:bg-white transition-colors border border-transparent hover:border-slate-100 group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2c7bfe] group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={item.icon} className="text-xs" />
                                    </div>
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-wider">{item.label}</span>
                                </div>
                                <span className="text-sm font-bold text-[#1f194c]">{item.val}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Button */}
                    <button 
                        onClick={handleSubmit}
                        className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group text-lg mt-4"
                    >
                        Return to Dashboard <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                </div>
              </div>

              {/* Security Badge */}
              <div className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                &bull; Secured by Voyago Payments &bull;
              </div>

            </div>
          ) : (
            /* ================= LOADING STATE ================= */
            <div className="text-center space-y-6 animate-fade-in-up">
                <FontAwesomeIcon icon={faCircleNotch} className="text-5xl text-[#2c7bfe] animate-spin" />
                <h2 className="text-xl font-bold text-[#1f194c]">Confirming Transaction...</h2>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Chekout;