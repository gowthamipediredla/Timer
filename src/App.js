import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  let interval = useRef(null);

  useEffect(() => {
    if (startCount) {
      interval.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  }, [startCount]);
  const startHandler = () => {
    setStartCount(true);
  };
  const pauseHandler = () => {
    setStartCount(false);
  };
  const resetHandler = () => {
    setCount(0);
    setStartCount(false);
  };
  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;
  return (
    <div className="App">
      <h1>Timer</h1>
      <div>
        <button onClick={startHandler} className="button start">
          Start
        </button>
        <button onClick={pauseHandler} className="button pause">
          Pause
        </button>
        <button onClick={resetHandler} className="button reset">
          Reset
        </button>
      </div>
      <div>
        {/* Display the timer as HH:MM:SS */}
        <h2 className="timer">
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </div>
  );
}
