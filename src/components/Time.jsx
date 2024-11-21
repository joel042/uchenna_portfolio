// src/DigitalClock.js
import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // Format time as HH:MM:SS
  };

  return (
    <div className="flex items-center justify-center border">
      <h1 className="text-5xl text-white font-mono">{formatTime(time)}</h1>
    
    </div>
   
  );
};

export default DigitalClock;
