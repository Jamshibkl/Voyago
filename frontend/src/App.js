import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurTeam from "./pages/OurTeam/OurTeam";
import BecomeaDriver from "./pages/BecomeaDriver/BecomeaDriver"
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Safety from "./pages/Safety/Safety";
import ServiceStatus from "./pages/ServiceStatus/ServiceStatus";
import LeagalPrivacy from "./pages/LeagalAandPrivacy/LeagalPrivacy";
import BookADriver from "./components/Book-a-Driver/Booking-form/BookADriver"
import LoadingPage from "./components/Book-a-Driver/Booking-form/LoadingPage/LoadingPage";
import RideTime from "./components/Book-a-Driver/Booking-form/RideTime/RideTime";
import DriverOnWay from "./components/Book-a-Driver/Driver-on-way/DriverOnWay";
import Destination from "./components/Book-a-Driver/Destination/Destination";
import OnTheWay from "./components/Book-a-Driver/OnTheWay/OnTheWay";
import PaymentSection from "./components/Book-a-Driver/PaymentSection/PaymentSection";
import DriverConform from "./components/Book-a-Driver/Booking-form/DriverConform/DriverConform";
import PaymentCheckout from "./components/Book-a-Driver/PaymentCheckout/Chekout";
import DriverLoginOtp from "./components/Driver/DriverLogin/DriverLoginOtp/DriverLoginOtp";
import ContactUs from "./pages/ContactUS/ContactUs";
import SignInUp from "./components/Sign-in-up/SignInUp";
import DriverLogin from "./components/Driver/DriverLogin/DriverLogin";
import DriverRegisterOtp from "./components/Driver/DriverRegister/DriverRegisterOtp/DriverRegisterOtp";
import DriverRegister from "./components/Driver/DriverRegister/DriverRegister";
import DriverVerify from "./components/Driver/DriverVerify/DriverVerify";
import DriverRelax from "./components/Driver/DriverRelax/DriverRelax";
import DriverDashboard from "./components/Driver/DriverDashboard/DriverDashboard";
import DriverSideBar from "./components/Driver/DriverSideBar/DriverSideBar";
import DriverProfile from "./components/Driver/DriverProfile/DriverProfile";
import DriverNotification from "./components/Driver/DriverNotification/DriverNotification";
import DriverRide from "./components/Driver/DriverRide/DriverRide";
import Admin from "./Admin/Admin";
import Dashboard from "./Admin/Components/Dashboard/Dashboard";
import Drivers from "./Admin/Components/Drivers/Drivers";
import Customers from "./Admin/Components/Customers/Customers";
import Transactions from "./Admin/Components/Transactions/Transactions";
import TotalDrivers from "./Admin/Components/Total-Drivers/TotalDrivers";
import TotalAdmin from "./Admin/Components/total-admins/TotalAdmins";
import Login from "./components/Sign-in-up/Login";
import RefreshHandler from "./components/RefreshHandler";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to='/login' />
   }

  return (
    <div className="App">
      
      <Router>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
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
          <Route path="/find-a-driver" element={<LoadingPage />} />
          <Route path="/driver-confirm" element={<DriverConform />} />
          <Route path="/ride-started" element={<RideTime />} />
          <Route
            path="/payment-checkout" element={<PaymentCheckout />}
          />
          <Route path="/driver-on-way" element={<DriverOnWay />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignInUp />} />
          <Route path="/on-the-way" element={<OnTheWay />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/payment-section" element={<PaymentSection />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/driver-login" element={<DriverLogin />} />
          <Route path="/driver-login-otp" element={<DriverLoginOtp />} />
          <Route path="/driver-signup" element={<DriverRegister />} />
          <Route path="/driver-signup-otp" element={<DriverRegisterOtp />} />
          <Route path="/driver-verify" element={<DriverVerify />} />
          <Route path="/driver-relax" element={<DriverRelax />} />
          <Route path="/driver-side" element={<DriverSideBar />} />
          <Route path="/driver-dashbord" element={<DriverDashboard />} />
          <Route path="/driver-profile" element={<DriverProfile />} />
          <Route path="/driver-notify" element={<DriverNotification />} />
          <Route path="/driver-ride" element={<DriverRide />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/total-drivers" element={<TotalDrivers />} />
          <Route path="/total-admin" element={<TotalAdmin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
