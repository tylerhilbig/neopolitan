import React, { useState, useEffect } from "react";
import "./ProductivityTimer.css";

const ProductivityTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <>  
        <div className="productivity-timer">
            <h2>Productivity</h2>
            <div className="timer">{formatTime(seconds)}</div>
        </div>
    </>
  );
};

export default ProductivityTimer;
