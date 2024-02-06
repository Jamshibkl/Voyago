import './App.css';
import Home from './pages/Home/Home';
// import AboutUs from './pages/AboutUs/AboutUs'
// import ContactUs from './pages/ContactUS/ContactUs';
// import HowItWorks from './pages/HowItWorks/HowItWorks';
// import LeagalPrivacy from './pages/LeagalAandPrivacy/LeagalPrivacy';
// import OurTeam from './pages/OurTeam/OurTeam';
// import Safety from './pages/Safety/Safety';
// import ServiceSatatus from './pages/ServiceSatatus/ServiceSatatus';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  return (
    <Home/>
    // <Router>
    //   <Routes>
    //   <Route component={Home} exact path="/" />
    //   <Route component={AboutUs} exact path="/about" />
    //   <Route component={ContactUs} exact path="/contact" />
    //   <Route component={HowItWorks} exact path="/working" />
    //   <Route component={LeagalPrivacy} exact path="/privacy" />
    //   <Route component={OurTeam} exact path="/team" />
    //   <Route component={Safety} exact path="/safety" />
    //   <Route component={ServiceSatatus} exact path="/service" />
    //   </Routes>
    // </Router>
  )
}

export default App;
