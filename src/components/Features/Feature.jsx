import React from "react";
import DrivingImage from '../../Assets/Car driving-bro.svg'
import './Feature.css'
function Feature() {
  return (
    <>
      <div className="feature">
        <div className="feature-2">
          <div className="column">
            <div className="feature-3">
              <div className="feature-4">Safety First</div>
              <div className="feature-5">
                Your safety is our priority. Experience <br />
                reliable and secure journeys with our <br />
                skilled drivers, thoroughly vetted <br />
                for your peace of mind.
              </div>
              <div className="feature-6">Learn More</div>
            </div>
          </div>
          <div className="column-2">
            <img
            src={DrivingImage}
              className="feature_img"
            />
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="feature-2">
          <div className="column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ed1e4866c7678a218e92bfdb4f9fe4cdd0579b4559a2cc64dc05309fe36425?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="feature_img"
            />
          </div>
          <div className="column-2">
            <div className="feature-3">
              <div className="feature-4">Track Your Ride</div>
              <div className="feature-5">
                Stay connected throughout your journey. Our real-time tracking
                feature lets you monitor your skillful driver's location,
                ensuring a smooth and stress-free travel experience.{" "}
              </div>{" "}
              <div className="feature-6">Learn More</div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="feature">
        <div className="feature-2">
          <div className="column">
            <div className="feature-3">
              <div className="feature-4">In-App Communication</div>
              <div className="feature-5">
                Connect with your skillful driver using in-app messaging. Easily
                communicate preferences or provide special instructions,
                ensuring a smooth and personalized journey
              </div>
              <div className="feature-6">Learn More</div>
            </div>
          </div>
          <div className="column-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08803c2e766fbc232d92baa7a26464e3f6c0a15d00ee7ad18c6cf9cb0400fb92?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="feature_img"
            />
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="feature-2">
          <div className="column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a17c6949b4a689a408fb4b4d9d7cc7c9dd3ba22c2349b82e311e4ca3cba080?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="feature_img"
            />
          </div>
          <div className="column-2">
            <div className="feature-3">
              <div className="feature-4">Transparent Pricing</div>
              <div className="feature-5">
                Voyago believes in transparency. Enjoy straightforward pricing
                with no hidden costs. Know your fare upfront and travel with
                confidence, knowing you're getting the best value.
              </div>{" "}
              <div className="feature-6">Learn More</div>
            </div>
          </div>
        </div>
      </div>{" "}
      
    </>
  );
}

export default Feature;
