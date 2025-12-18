import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUserTie,
  faMapLocationDot,
  faBriefcase,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

function OurService() {
  const features = [
    {
      title: "Book Professional Drivers instantly",
      description:
        "Skip the stress of driving. Voyago’s intuitive platform lets you book background-checked, experienced drivers for your daily commutes, outstation trips, or weekend getaways. Track your driver in real-time.",
      linkText: "Find a driver",
      icon: faUserTie,
      color: "bg-purple-100", // Soft background for the "image"
      iconColor: "text-purple-600",
    },
    {
      title: "Curated Tour Packages",
      description:
        "Explore new destinations without the hassle of navigation. Our tour packages come with experienced local drivers who double as guides, helping you discover hidden gems on your journey.",
      linkText: "View packages",
      icon: faMapLocationDot,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Corporate & Event Fleet",
      description:
        "Streamline your business travel. We offer tailored solutions for corporate events, employee transportation, and client pickups with priority support and GST-compliant billing.",
      linkText: "Contact sales",
      icon: faBriefcase,
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f194c] mb-6 tracking-tight leading-tight">
            Why Choose Voyago?
          </h2>
          <p className="text-lg text-gray-500">
            Experience premium travel solutions tailored for your safety, comfort, and schedule.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1f194c] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Action Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors group"
                >
                  {feature.linkText}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Image/Graphic Side (Simulating the Loom illustrations) */}
              <div className="flex-1 w-full">
                <div
                  className={`relative w-full aspect-[4/3] rounded-[3rem] ${feature.color} flex items-center justify-center p-8 transition-transform duration-500 hover:scale-[1.02]`}
                >
                  {/* Decorative Elements (Blobs/Circles) */}
                  <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-40 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-40 rounded-full blur-3xl"></div>

                  {/* Main 'Card' Graphic */}
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 w-3/4 aspect-video flex flex-col items-center justify-center text-center">
                    <div className={`text-5xl mb-4 ${feature.iconColor}`}>
                      <FontAwesomeIcon icon={feature.icon} />
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                    
                    {/* Floating Badge (Decoration) */}
                    <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-green-500 text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurService;