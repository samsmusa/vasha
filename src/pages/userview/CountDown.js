import React, { useState } from "react";

const CountDown = ({ second, setTimeup }) => {
  const [counter, setCounter] = useState(parseInt(second));
  const [hour, setHour] = useState(Math.floor(counter / 3600));
  const [minutes, setMinutes] = useState(Math.floor((counter % 3600) / 60));
  const [seconds, setSeconds] = useState(Math.floor((counter % 3600) % 60));

  React.useEffect(() => {
    if (seconds > 0 && hour>=0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        if(seconds === 1) {
          setMinutes(minutes -1);
          setSeconds(60)
        } 
        if(minutes === 0 && hour>=0) {
          setMinutes(59);
          setHour(hour-1)
        } 
          
      }, 1000);
    }
  }, [seconds]);
  return (
    <span class="countdown font-mono text-2xl">
      <span style={{ "--value": hour }}></span>:
      <span style={{ "--value": minutes }}></span>:
      <span style={{ "--value": seconds }}></span>
    </span>
  );
};

export default CountDown;
