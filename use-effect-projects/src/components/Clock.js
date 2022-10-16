import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState();
  const [day, setDay] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
      setDay(date.toLocaleDateString());
    }, 1000);
  }, []);
  return <div>Today is {day} and it's {time} in Spain right now </div>;
}

export default Clock;