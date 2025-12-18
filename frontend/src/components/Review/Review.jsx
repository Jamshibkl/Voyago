import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Review() {
  const reviews = [
    {
      img: "https://i.pravatar.cc/150?img=32",
      name: "Emily Turner",
      role: "Daily Commuter",
      rating: 5,
      text: "Safety is my top priority, and Voyago delivers. The real-time tracking feature gives my family peace of mind while I travel for work.",
    },
    {
      img: "https://i.pravatar.cc/150?img=11",
      name: "David Foster",
      role: "Business Traveler",
      rating: 5,
      text: "I used to rely on cabs, but the inconsistency was killing my schedule. Voyago drivers are always on time and the cars are immaculate.",
    },
    {
      img: "https://i.pravatar.cc/150?img=5",
      name: "Sophie Chen",
      role: "Event Planner",
      rating: 4,
      text: "I love the flexibility Voyago offers. Booking a fleet for my corporate events has never been this seamless. Highly recommended!",
    },
    {
      img: "https://i.pravatar.cc/150?img=60",
      name: "Marcus Johnson",
      role: "Tourist",
      rating: 5,
      text: "Our driver acted as a tour guide and showed us hidden gems in the city. It wasn't just a ride; it was an experience.",
    },
    {
      img: "https://i.pravatar.cc/150?img=44",
      name: "Sarah Williams",
      role: "Parent",
      rating: 5,
      text: "Sending my kids to soccer practice was a logistical nightmare until I found Voyago. Verified drivers mean I don't have to worry.",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#fdfdff] font-poppins border-b border-slate-100">
      
      {/* --- Background Decor (Full Width) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Floating Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse delay-1000"></div>
      </div>

      {/* --- Inner Container (Centered) --- */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2c7bfe] text-xs font-bold uppercase tracking-wider">
            <FontAwesomeIcon icon={faStar} /> Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f194c]">
            Loved by <span className="text-[#2c7bfe]">Thousands</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our community has to say about their journeys with Voyago.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-16 px-4"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="h-auto pb-10"> {/* Added pb-10 for shadow space */}
              <div className="h-full bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-100">
                
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-6xl text-slate-50 transition-colors group-hover:text-blue-50">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i} 
                        icon={faStar} 
                        className={i < review.rating ? "opacity-100" : "text-gray-200"} 
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow font-medium">
                    "{review.text}"
                  </p>

                  <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-blue-50 transition-colors"></div>

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                        <img
                        loading="lazy"
                        src={review.img}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                        alt={review.name}
                        />
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-[#2c7bfe] text-sm" />
                        </div>
                    </div>
                    <div>
                      <h4 className="text-[#1f194c] font-bold text-lg leading-tight">
                        {review.name}
                      </h4>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wide mt-1">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Review;