import React, { useState, useEffect } from "react";

export default function ClockFunction(props) {
  const [dateNow, setDate] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setDate(getTime());
    }, 1000);
  }, []);

  function getTime() {
    const date = new Date();

    return { date };
  }

  return (
    <>
      <br />
      <h4>Time now!</h4>
      <h4>{dateNow.date.toLocaleTimeString()}</h4>
    </>
  );
}
