import React from "react";
import "./OurTeam.css";
import Founder1 from "../../Assets/founder2.jpg";
import Founder2 from "../../Assets/founder3.jpg";
import Amigo from "../../Assets/Typing-amico.svg";
import Revenue from "../../Assets/Revenue-bro.svg";

function OurTeam() {
  return (
    <div className="conatiner">
      <div className="ourTeam">
        <h1>Our Team</h1>
        <p className="teamPara">
          Get to know the passionate individuals who drive Voyago forward,
          shaping the <br /> future of transportation with their expertise,
          dedication, and shared vision.
        </p>
        <div className="Founders">
          <h3>Meet Our Founders</h3>
          <div className="founder">
            <div className="co-Founder">
              <img src={Founder1} alt="" />
              <h4>Sarah - Co-Founder and Visionary</h4>
              <p>
                A visionary leader with a background in transportation, Sarah
                spearheads Voyago's strategic direction and innovation
                initiatives. Her unwavering commitment to excellence drives the
                company's mission forward.
              </p>
            </div>

            <div className="co-Founder">
              <img src={Founder2} alt="" />
              <h4>Michael - Co-Founder and Technology Maestro</h4>
              <p>
                Michael, the tech genius behind Voyago, leads the development of
                cutting-edge solutions. With a passion for innovation, he
                ensures Voyago stays at the forefront of technological
                advancements in the transportation industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourCommitments">
        <div className="commitments">
          <div className="ourContent">
            <div className="our-img">
              <img src={Amigo} alt="" />
            </div>
            <div className="commitments-para">
              <h3>Our Commitment to Diversity and Inclusion</h3>
              <p>
                At Voyago, we believe in the power of diversity and inclusion.
                We celebrate the unique perspectives and experiences of each
                team member, fostering a culture of collaboration and respect.
                Our commitment to diversity drives innovation and fuels our
                mission to create a more inclusive transportation experience for
                all.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Opportunities">
        <div className="joinUs">
          <h2>Join Our Team</h2>
          <div className="careerOpportunities">
            <div className="ourOpportunities">
              <h3>
                Come Aboard: Explore Exciting Career Opportunities at Voyago
              </h3>
              <p>
                Voyago is always looking for talented individuals to join our
                team and contribute to our mission of revolutionizing
                transportation. Explore our career opportunities and be a part
                of shaping the future of travel with Voyago.
              </p>
              <button>Join Our Team</button>
            </div>
            <div className="careerImg">
              <img src={Revenue} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
