import React, { useEffect, useState } from "react";


const date = new Date();

export default function App() {
  const [dateTime, setDateTime] = useState({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setDateTime({
        day: date.getDate(),
        month: date.getMonth()+1,
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div >
      <div>
        <p> Hoy es  {dateTime.day} / {dateTime.month} / {dateTime.year} | {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds} </p> 
      </div>
    </div>
  );
}