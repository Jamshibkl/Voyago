import React, { useState, useEffect, useRef } from "react";

function FAQ() {
  const [selected, setSelected] = useState(null);
  // Track which items have scrolled into view to keep them visible during re-renders
  const [visibleItems, setVisibleItems] = useState({}); 
  const faqRef = useRef([]);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the index from the data-index attribute
            const index = entry.target.dataset.index;
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 }
    );

    faqRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4">
        {data.map((item, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => (faqRef.current[i] = el)}
            className={`
              group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-700 ease-out
              ${/* If visible in state, show it. If not, hide it. */
                visibleItems[i] 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }
              ${
                selected === i 
                  ? "shadow-lg border-blue-100 ring-1 ring-blue-100" 
                  : "hover:shadow-md hover:border-blue-200"
              }
            `}
          >
            {/* Question Header */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none select-none"
            >
              <span 
                className={`text-lg font-semibold transition-colors duration-300 ${
                  selected === i ? "text-[#407bff]" : "text-slate-800 group-hover:text-[#407bff]"
                }`}
              >
                {item.title}
              </span>
              
              {/* Animated Chevron Icon */}
              <div
                className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                  selected === i ? "bg-blue-50 text-[#407bff] rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#407bff]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>

            {/* Answer (Smooth Grid Row Animation) */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                selected === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "How do I book a ride?",
    answer:
      "Booking is simple! Just open the Voyago app, enter your pickup location and destination, choose your preferred ride type, and tap 'Confirm'. You'll be matched with a nearby driver instantly.",
  },
  {
    title: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards (Visa, MasterCard, Amex), digital wallets like Apple Pay and Google Pay, and cash payments in select regions.",
  },
  {
    title: "How are drivers vetted for safety?",
    answer:
      "Safety is our priority. Every Voyago driver undergoes a rigorous background check, including criminal record screening, driving history verification, and in-person interviews before they are allowed on the platform.",
  },
  {
    title: "Is Voyago available in my city?",
    answer:
      "Voyago is currently available in over 50 major cities worldwide. You can check the full list of serviceable areas on our 'Locations' page or directly within the app.",
  },
  {
    title: "Can I schedule a ride in advance?",
    answer:
      "Yes! You can schedule a ride up to 30 days in advance. Just select the 'Schedule' clock icon on the booking screen and pick your desired date and time.",
  },
  {
    title: "How do I contact customer support?",
    answer:
      "Our support team is available 24/7. You can reach us via the in-app chat feature, email us at support@voyago.com, or call our dedicated helpline listed in the 'Contact' section.",
  },
];

export default FAQ;