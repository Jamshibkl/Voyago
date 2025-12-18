import React, { useEffect, useRef, useState } from "react";
import DrivingImage from "../../Assets/Car driving-bro.svg";

// Feature Data
const features = [
  {
    title: "Safety First",
    description: "Every driver is thoroughly vetted with background checks and in-person interviews. We prioritize your peace of mind above all else.",
    image: DrivingImage,
    gridClass: "md:col-span-2", 
    gradient: "from-blue-50 to-white"
  },
  {
    title: "Real-Time Tracking",
    description: "Watch your ride arrive in real-time. Share your trip status with loved ones for added security.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ed1e4866c7678a218e92bfdb4f9fe4cdd0579b4559a2cc64dc05309fe36425?apiKey=b5f3e675c69d443bb59ae6ade7d87645&",
    gridClass: "md:col-span-1",
    gradient: "from-purple-50 to-white"
  },
  {
    title: "In-App Chat",
    description: "Need to clarify a pickup spot? Chat directly with your driver without sharing your phone number.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/08803c2e766fbc232d92baa7a26464e3f6c0a15d00ee7ad18c6cf9cb0400fb92?apiKey=b5f3e675c69d443bb59ae6ade7d87645&",
    gridClass: "md:col-span-1",
    gradient: "from-green-50 to-white"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surge surprises. The price you see at booking is the price you pay. Enjoy premium service at honest rates.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/08a17c6949b4a689a408fb4b4d9d7cc7c9dd3ba22c2349b82e311e4ca3cba080?apiKey=b5f3e675c69d443bb59ae6ade7d87645&",
    gridClass: "md:col-span-2",
    gradient: "from-orange-50 to-white"
  },
];

const FeatureCard = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        relative group overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 
        ring-1 ring-slate-900/5 shadow-sm transition-all duration-700 ease-out
        hover:shadow-2xl hover:ring-blue-500/30 hover:-translate-y-2
        ${feature.gridClass}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Internal Gradient Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

      <div className="flex flex-col h-full justify-between z-10 relative">
        <div className="mb-8">
           {/* Icon Badge */}
           <div className="w-12 h-12 mb-5 rounded-2xl bg-slate-50 text-[#407bff] ring-1 ring-slate-100 flex items-center justify-center group-hover:bg-[#407bff] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
                {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.066 8.066 0 01-4-1.065L3 21l1.625-5.265A7.994 7.994 0 012 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />}
                {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
             </svg>
           </div>

          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#407bff] transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="mt-3 text-slate-500 leading-relaxed text-sm md:text-base group-hover:text-slate-600">
            {feature.description}
          </p>
        </div>

        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 group-hover:border-blue-100 transition-colors shadow-inner">
          <img 
            src={feature.image} 
            alt={feature.title} 
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
          />
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

function Feature() {
  return (
    <div className="relative py-24 overflow-hidden">
      
      {/* =======================
          MODERN HERO BACKGROUND
      ======================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#407bff] font-semibold tracking-wide uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Why Choose Us</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything you need for <br/> a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#407bff] to-blue-500">Perfect Ride</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            We've built a platform that puts your safety, comfort, and convenience first.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-[#407bff] hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
              Explore All Features
          </button>
        </div>

      </div>
    </div>
  );
}

export default Feature;