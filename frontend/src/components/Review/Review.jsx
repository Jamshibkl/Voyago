import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules"; // Updated import
import "./Review.css";

function Review() {
  const reviews = [
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9015e3fa8f38dcf39ceecf9e609401110eda909787f208ecf51006f3668f81c",
      name: "Emily Turner",
      text: "Safety is my top priority, and Voyago delivers. I appreciate the emphasis on both convenience and security.",
    },
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/87883f3c327cccdd1dafe3648874f5765b7e497b4801e72ab045cf3abab4b264",
      name: "David Foster",
      text: "Safety is my top priority, and Voyago delivers. I appreciate the emphasis on both convenience and security.",
    },
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff8d7a1fb6ad6252bcd4bb596078b417117bf4edd5a0036027d6ab42cf84a443",
      name: "Sophie Chen",
      text: "I love the flexibility Voyago offers with scheduling. It's a time-saver and has become integral to my routine.",
    },
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff8d7a1fb6ad6252bcd4bb596078b417117bf4edd5a0036027d6ab42cf84a443",
      name: "Sophie Chen",
      text: "I love the flexibility Voyago offers with scheduling. It's a time-saver and has become integral to my routine.",
    },
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff8d7a1fb6ad6252bcd4bb596078b417117bf4edd5a0036027d6ab42cf84a443",
      name: "Sophie Chen",
      text: "I love the flexibility Voyago offers with scheduling. It's a time-saver and has become integral to my routine.",
    },
  ];

  useEffect(() => {
    // Intersection Observer to trigger animations
    const reviewCards = document.querySelectorAll('.review-card');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class when in view
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    reviewCards.forEach(card => observer.observe(card));

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  return (
    <div className="review-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]} // Correct usage
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="review-img-container">
                <img
                  loading="lazy"
                  src={review.img}
                  className="review-img"
                  alt={review.name}
                />
              </div>
              <div className="review-name">{review.name}</div>
              <div className="review-text">"{review.text}"</div>
              <button className="review-btn">Read More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
