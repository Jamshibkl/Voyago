import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurTeam from "./pages/OurTeam/OurTeam";
import BecomeaDriver from "./pages/BecomeaDriver/BecomeaDriver"
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Safety from "./pages/Safety/Safety";
import ServiceStatus from "./pages/ServiceStatus/ServiceStatus";
import LeagalPrivacy from "./pages/LeagalAandPrivacy/LeagalPrivacy";
import BookADriver from "./components/Book-a-Driver/Booking-form/BookADriver"
import DriverOnWay from "./components/Book-a-Driver/Driver-on-way/DriverOnWay";
import Destination from "./components/Book-a-Driver/Destination/Destination";
import OnTheWay from "./components/Book-a-Driver/OnTheWay/OnTheWay";
import PaymentSection from "./components/Book-a-Driver/PaymentSection/PaymentSection";
import DriverConform from "./components/Book-a-Driver/Driver-conformed/DriverConform";
import ContactUs from "./pages/ContactUS/ContactUs";
import SignInUp from "./components/Sign-in-up/SignInUp";
import Admin from "./Admin/Admin";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/become-a-driver" element={<BecomeaDriver />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/service-status" element={<ServiceStatus />} />
          <Route path="/leagal-privacy" element={<LeagalPrivacy />} />
          <Route path="/book-a-driver" element={<BookADriver />} />
          <Route path="/driver-confirm" element={<DriverConform />} />
          <Route path="/driver-on-way" element={<DriverOnWay />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignInUp />} />
          <Route path="/on-the-way" element={<OnTheWay />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/payment-section" element={<PaymentSection />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
