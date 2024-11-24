import React, { useState, useEffect } from "react";
import "./RideTime.css";
import { useNavigate } from "react-router-dom";

function RideTime() {
  const navigate = useNavigate();
  const [displayTime, setDisplayTime] = useState("00:00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(update, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning, elapsedTime]);

  const start = () => {
    if (!isRunning) {
      setStartTime(Date.now() - elapsedTime);
      setIsRunning(true);
      setError("");
    } else {
      setError("Ride already started.");
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      navigate("/destination");
      setElapsedTime(Date.now() - startTime);
    } else {
      setError("This journey hasn't started yet.");
    }
  };

  const update = () => {
    const currentTime = Date.now();
    const newElapsedTime = currentTime - startTime;

    let hours = Math.floor(newElapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((newElapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((newElapsedTime / 1000) % 60);
    let milliseconds = Math.floor((newElapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    setDisplayTime(`${hours}:${minutes}:${seconds}:${milliseconds}`);
  };

  return (
    <div className="ridetime">
      <div className="ride-container">
        <h1 className="title">Track Your Ride</h1>
        <h5 className="diver-conformation">
          {error ? <span className="error">{error}</span> : <span className="success"></span>}
        </h5>
        <div className="timer-container">
          <div className="display">{displayTime}</div>
          <div className="controls">
            <button className="startBtn" onClick={start}>Start</button>
            <button className="stopBtn" onClick={stop}>Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RideTime;
