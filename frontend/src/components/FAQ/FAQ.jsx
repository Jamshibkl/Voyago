import { useState, useEffect, useRef } from "react";
import React from "react";

function FAQ() {
  const [selected, setSelected] = useState(null);
  const faqSections = useRef([]);

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
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    faqSections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      faqSections.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="faq">
        {data.map((item, i) => (
          <div
            className="faq-section-2"
            ref={(el) => {
              if (el) {
                faqSections.current[i] = el;
              } else {
                faqSections.current[i] = null; // Ensure proper cleanup
              }
            }}
            key={i}
          >
            <div className="faq-section-3">
              <div className="faq-section-4" onClick={() => toggle(i)}>
                <h5>{item.title}</h5>
                <div className={selected === i ? "faq-icon" : "faq-icons"}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc702096ce94e02dd37457fd8c2126f46d09d8ac64a0ac5cd239b76824db412?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
                    className="faq_img"
                  />
                </div>
              </div>
              <div className={selected === i ? "show" : "faq-answer"}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq {
          background-color: var(--Colors-primary, #fff);
          margin: 50px 0;
        }
        @media (max-width: 991px) {
          .faq {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .faq-section-2 {
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 15px;
          margin: 15px 0;
          opacity: 0; /* Start as hidden */
          transition: opacity 1s ease-in-out; /* Add fade transition */
        }

        .faq-section-3 {
          margin-bottom: 5px;
        }

        .faq-section-4 {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-section-4 h5 {
          margin: 0;
          padding: 0;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
        }

        .show p {
          color: gray;
          padding: 0;
          margin: 0;
        }

        .faq-answer .show {
          height: auto;
          color: gray;
          max-height: 999px;
        }

        .faq-icon {
          width: 50px;
          height: 50px;
          transition: transform 0s;
        }

        .faq-icon {
          transform: rotate(180deg);
        }

        .faq_img {
          width: 50px;
          height: 50px;
        }

        /* Fade-in animation */
        .fade-in {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}

const data = [
  {
    title: "How do I book a ride?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde tempore amet voluptatibus voluptates placeat odio harum aliquam quam fugiat! Autem, modi cum doloribus eum nulla asperiores excepturi voluptatum optio?",
  },
  {
    title: "What payment methods are accepted?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde tempore amet voluptatibus voluptates placeat odio harum aliquam quam fugiat! Autem, modi cum doloribus eum nulla asperiores excepturi voluptatum optio?",
  },
  {
    title: "How are drivers vetted for safety?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde tempore amet voluptatibus voluptates placeat odio harum aliquam quam fugiat! Autem, modi cum doloribus eum nulla asperiores excepturi voluptatum optio?",
  },
  {
    title: "Is Voyago available in my city?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde tempore amet voluptatibus voluptates placeat odio harum aliquam quam fugiat! Autem, modi cum doloribus eum nulla asperiores excepturi voluptatum optio?",
  },
  {
    title: "Can I schedule a ride in advance?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde tempore amet voluptatibus voluptates placeat odio harum aliquam quam fugiat! Autem, modi cum doloribus eum nulla asperiores excepturi voluptatum optio?",
  },
  {
    title: "How do I contact customer support?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde tempore amet voluptatibus voluptates placeat odio harum aliquam quam fugiat! Autem, modi cum doloribus eum nulla asperiores excepturi voluptatum optio?",
  },
];

export default FAQ;
