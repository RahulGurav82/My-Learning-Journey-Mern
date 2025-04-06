import React, { useState } from 'react'

const App = () => {

  let [num, setNum] = useState(0);
  
  const HandleOnclick = () => {
    setNum(()=> (
      num++
    ));
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={HandleOnclick}>Increase</button>
    </div>
  )
}

export default App