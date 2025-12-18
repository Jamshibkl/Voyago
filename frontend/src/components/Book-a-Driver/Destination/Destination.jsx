import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import ArrivedDestinationImg from "../../../Assets/Ride-with-Uber.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCircleCheck, 
  faClock, 
  faIndianRupeeSign, 
  faCreditCard, 
  faMoneyBillWave,
  faArrowRight,
  faFileInvoiceDollar,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

function Destination() {
  const navigate = useNavigate();
  const [hour, setHour] = useState("");
  const [charge, setCharge] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");

  useEffect(() => {
    let totalHour = 0;
    let totalCharge = 0;
    const rideTime = 6; // Example dynamic value
    
    if (rideTime) {
      if (rideTime <= 4) {
        totalHour = 4;
        totalCharge = 500;
      } else if (rideTime > 4 && rideTime <= 6) {
        totalHour = Math.ceil(rideTime);
        totalCharge = 750;
      } else if (rideTime > 6 && rideTime <= 8) {
        totalHour = Math.ceil(rideTime);
        totalCharge = 1000;
      } else {
        let roundHour = Math.ceil(rideTime);
        if (roundHour > 8 && roundHour <= 9) {
          totalHour = Math.ceil(rideTime);
          totalCharge = 1150;
        } else if (roundHour > 9 && roundHour <= 10) {
          totalHour = Math.ceil(rideTime);
          totalCharge = 1250;
        } else {
          let extraHour = roundHour - 10;
          totalHour = roundHour;
          totalCharge = 1250 + extraHour * 150;
        }
      }
      setCharge(totalCharge);
      setHour(totalHour);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment-checkout/'); //
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

      {/* Main Wrapper with Safe Zone Padding */}
      <main className="flex-grow pt-20 lg:pt-24">
        
        <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none"></div>
          
          {/* Animated Background Mesh */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10 py-12">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* LEFT SIDE: PAYMENT & FARE DETAILS */}
              <div className="flex-1 space-y-10 animate-fade-in-up">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 border border-green-100 shadow-sm mb-2">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Arrived at Destination</span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-black text-[#1f194c] leading-[1.1] tracking-tight">
                    Journey <br /> <span className="text-[#2c7bfe]">Completed.</span>
                  </h1>
                  <p className="text-lg text-slate-500 max-w-xl font-medium">
                    You have successfully reached your destination. Please review the fare details below and proceed with payment.
                  </p>
                </div>

                {/* Fare Summary Card */}
                <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden group">
                   <div className="absolute -top-10 -right-10 opacity-[0.03] text-[150px] text-[#1f194c] group-hover:scale-110 transition-transform duration-700">
                      <FontAwesomeIcon icon={faFileInvoiceDollar} />
                   </div>
                   
                   <div className="relative z-10 grid grid-cols-2 gap-8 border-b border-slate-100 pb-8 mb-8">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <FontAwesomeIcon icon={faClock} className="text-[8px]" /> Total Duration
                        </p>
                        <p className="text-2xl font-black text-[#1f194c]">{hour} <span className="text-sm font-bold text-slate-400 uppercase">hrs</span></p>
                      </div>
                      <div className="space-y-1 text-right lg:text-left">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-end lg:justify-start gap-2">
                          <FontAwesomeIcon icon={faIndianRupeeSign} className="text-[8px]" /> Final Amount
                        </p>
                        <p className="text-2xl font-black text-[#2c7bfe]">₹{charge}/-</p>
                      </div>
                   </div>

                   {/* Payment Method Selector */}
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Choose Payment Method</p>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => setPaymentMethod("online")}
                          className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 group/btn ${paymentMethod === 'online' ? 'bg-[#2c7bfe] border-[#2c7bfe] text-white shadow-xl shadow-blue-500/20' : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200'}`}
                        >
                          <FontAwesomeIcon icon={faCreditCard} className={`text-xl ${paymentMethod === 'online' ? 'text-white' : 'text-[#2c7bfe]'} group-hover/btn:scale-110 transition-transform`} />
                          <span className="text-xs font-black uppercase tracking-widest">Online</span>
                        </button>
                        
                        <button 
                          onClick={() => setPaymentMethod("offline")}
                          className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 group/btn ${paymentMethod === 'offline' ? 'bg-[#1f194c] border-[#1f194c] text-white shadow-xl shadow-slate-900/20' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'}`}
                        >
                          <FontAwesomeIcon icon={faMoneyBillWave} className={`text-xl ${paymentMethod === 'offline' ? 'text-white' : 'text-green-500'} group-hover/btn:scale-110 transition-transform`} />
                          <span className="text-xs font-black uppercase tracking-widest">Offline / Cash</span>
                        </button>
                      </div>
                   </div>

                   <button
                     onClick={handleSubmit}
                     className="w-full bg-[#2c7bfe] hover:bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group text-lg mt-10"
                   >
                     Confirm Payment <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>

              {/* RIGHT SIDE: ILLUSTRATION */}
              <div className="flex-1 w-full max-w-xl animate-fade-in-up delay-200">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] rotate-3 -z-10 transition-transform group-hover:rotate-6"></div>
                  <img 
                    src={ArrivedDestinationImg} 
                    alt="Arrived" 
                    className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto object-cover transform transition-transform group-hover:scale-[1.02] duration-500" 
                  />
                  
                  {/* Floating Summary Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 animate-float border border-slate-50">
                    <div className="w-12 h-12 bg-blue-50 text-[#2c7bfe] rounded-2xl flex items-center justify-center text-xl">
                       <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                       <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">Destination</p>
                       <p className="font-black text-[#1f194c] text-lg leading-none">Arrived Safe</p>
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

export default Destination;