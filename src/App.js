import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurTeam from "./pages/OurTeam/OurTeam";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Safety from "./pages/Safety/Safety";
import ServiceStatus from "./pages/ServiceStatus/ServiceStatus";
import LeagalPrivacy from "./pages/LeagalAandPrivacy/LeagalPrivacy";
import BookADriver from "./components/Book-a-Driver/BookADriver"
import ContactUs from "./pages/ContactUS/ContactUs";
import SignInUp from "./components/Sign-in-up/SignInUp";
import Local from "./components/Booking-form/Local/Local"
import Outstation from "./components/Booking-form/Outstation/Outstation";
import Permanent from "./components/Booking-form/Permanent/Permanent";
import DriverSelection from "./components/Booking-form/DriverSelection/DriverSelection";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/service-status" element={<ServiceStatus />} />
          <Route path="/leagal-privacy" element={<LeagalPrivacy />} />
          <Route path="/book-a-driver" element={<BookADriver />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignInUp />} />
          <Route path="/sign-up" element={<Local />} />
          <Route path="/local" element={<Local />} />
          <Route path="/outstation" element={<Outstation />} />
          <Route path="/permanent" element={<Permanent />} />
          <Route path="/driver-selection" element={<DriverSelection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
