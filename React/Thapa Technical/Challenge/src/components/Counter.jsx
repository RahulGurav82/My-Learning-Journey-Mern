import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    let handleIncreament = () => {
        setCount(count + step)
    }

    let handleDecreament = () => {
        setCount(count - step)
    }
  return (
    <div>
      <p>Count : {count}</p>
      Steps : <input type="number" value={step} onChange={(evt)=> setStep(Number(evt.target.value))} /> <br /> <br />
      <button onClick={handleIncreament} disabled={count >= 100}>Increament</button>
      <button onClick={handleDecreament} disabled={count <= 0}>Decreament</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
