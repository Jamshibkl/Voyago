import React from 'react'
import './DriverSelection.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import DriverProfileImage from '../../../Assets/driver_profile.jpg'
import DrverProfileImage2 from '../../../Assets/driver_profile-2.jpg'
import DrverProfileImage3 from '../../../Assets/driver_profile-3.jpg'
import DrverProfileImage4 from '../../../Assets/driver_profile-4.jpg'
import DrverProfileImage5 from '../../../Assets/driver_profile-5.jpg'
function DriverSelection() {
  return (
    <>
    <NavBar />
    <div className="driver_selectio_section">
        <div className="driver_selection">
            <h1>Select Your Ideal Driver for a Seamless Journey</h1>
            {/* <h3>Driver Selection</h3>
            <p>View available drivers with their reviews, ratings, and experience. <br />
             Select a driver based on your preferences and requirements.</p> */}
        </div>
        <h4 className='availability_heading'>Driver Availability</h4>
        <div className="driver_availability">
            
            <div className="driver_container">
                 <img src={DriverProfileImage} alt="" className='driver_profile'/>
                 <h4 className='driver_name'>Mahesh k</h4>
                 <h4 className='driver_rate'>⭐4.5/5  (31 jobs)</h4>
                 <h4 className='driver_experience'>3 Years of Experience</h4>
                 <h4 className='driver_charge'>Hourly Charge : 200 ₹</h4>
                 <button className='button_choose'>Choose</button>
                 <button className='button_learn'>Learn More</button>
            </div>
            <div className="driver_container">
                 <img src={DrverProfileImage2} alt="" className='driver_profile'/>
                 <h4 className='driver_name'>Hassan</h4>
                 <h4 className='driver_rate'>⭐4.3/5  (23 jobs)</h4>
                 <h4 className='driver_experience'>2 Years of Experience</h4>
                 <h4 className='driver_charge'>Hourly Charge : 150 ₹</h4>
                 <button className='button_choose'>Choose</button>
                 <button className='button_learn'>Learn More</button>
            </div>
            <div className="driver_container">
                 <img src={DrverProfileImage3} alt="" className='driver_profile'/>
                 <h4 className='driver_name'>Albin Jose</h4>
                 <h4 className='driver_rate'>⭐3.8/5  (12 jobs)</h4>
                 <h4 className='driver_experience'>1 Years of Experience</h4>
                 <h4 className='driver_charge'>Hourly Charge : 100 ₹</h4>
                 <button className='button_choose'>Choose</button>
                 <button className='button_learn'>Learn More</button>
            </div>
            
        </div>
        <div className="driver_availability">
            
            <div className="driver_container">
                 <img src={DrverProfileImage4} alt="" className='driver_profile'/>
                 <h4 className='driver_name'>Naveen</h4>
                 <h4 className='driver_rate'>⭐3.5/5  (18 jobs)</h4>
                 <h4 className='driver_experience'>2 Years of Experience</h4>
                 <h4 className='driver_charge'>Hourly Charge : 120 ₹</h4>
                 <button className='button_choose'>Choose</button>
                 <button className='button_learn'>Learn More</button>
            </div>
            <div className="driver_container">
                 <img src={DrverProfileImage5} alt="" className='driver_profile'/>
                 <h4 className='driver_name'>Ranjith</h4>
                 <h4 className='driver_rate'>⭐3.2/5  (13 jobs)</h4>
                 <h4 className='driver_experience'>1 Years of Experience</h4>
                 <h4 className='driver_charge'>Hourly Charge : 100 ₹</h4>
                 <button className='button_choose'>Choose</button>
                 <button className='button_learn'>Learn More</button>
            </div>
            <div className="driver_container">
                 <img src={DrverProfileImage3} alt="" className='driver_profile'/>
                 <h4 className='driver_name'>Mohammed</h4>
                 <h4 className='driver_rate'>⭐4.2/5  (25 jobs)</h4>
                 <h4 className='driver_experience'>3 Years of Experience</h4>
                 <h4 className='driver_charge'>Hourly Charge : 180 ₹</h4>
                 <button className='button_choose'>Choose</button>
                 <button className='button_learn'>Learn More</button>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default DriverSelection
