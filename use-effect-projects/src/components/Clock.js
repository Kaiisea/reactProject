import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState();
  useEffectcd(() => {
    setInterval(() => {
      const date = new Date();
      
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return <div>{time}</div>;
}

export default Clock;