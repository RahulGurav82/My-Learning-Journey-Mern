import { useState } from 'react'
import "./App.css";


function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div className='toggle-switch' onClick={()=>setIsOn(!isOn)}>
        <div className={`toggle ${isOn ? "ON" : "OFF"}`}>
            <span>{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  )
}

export default App
