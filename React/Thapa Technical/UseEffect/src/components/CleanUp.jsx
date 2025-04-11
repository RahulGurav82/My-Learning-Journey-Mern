import React, { useState, useEffect } from 'react'

const CleanUp = () => {
    const [count, setCount] = useState(0);
    useEffect(() => { 
        const timer = setInterval(() => {
            setCount((prev) => prev + 1 )
        }, 1000);

        return ()=> clearInterval(timer);
    }, [])
    

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default CleanUp
