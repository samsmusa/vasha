import React, { useState } from "react";

const RadialTimer = ({ second, setTimeup }) => {
  const [counter, setCounter] = useState(100);
  const [count, setCount] = useState(parseInt(second));

  React.useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        setCount(count - 1);
        setCounter((((count - 1) / parseInt(second)) * 100).toFixed(1));
      }, 1000);
    }
  }, [counter]);
  return (
    <div
      class="radial-progress text-sm"
      style={{ "--value": counter, "--size": "3rem", "--thickness": "4px" }}
    >
      {counter}
    </div>
  );
};

export default RadialTimer;
