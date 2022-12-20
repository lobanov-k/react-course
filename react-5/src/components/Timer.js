import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);
  let timerId;

  useEffect(() => {
    timerId = setInterval(() => {
      console.log("tick");
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>{count} seconds</div>;
};
