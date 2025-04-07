import React from 'react'
import { useEffect, useState } from 'react';

const DateTime = () => {
    const [DateTime, setDateTime] = useState("")
    // Date Time
    useEffect(() => {
        const intervalId = setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
      
        //  Cleanup interval to prevent memory leaks
        return () => clearInterval(intervalId);
    }, []);
  return (
    <div>
        <span>{DateTime}</span>
    </div>
  )
}

export default DateTime
