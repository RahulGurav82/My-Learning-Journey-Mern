import React, { useEffect, useState } from 'react'

const Challenge = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("")

    useEffect(()=> {
        console.log(input)
    }, [input])
    {document.title = `count : ${count}`}
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <p>Count : {count}</p>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <p>You Type : {input}</p>
      <input type="text" name="input" id="input"
      value={input}
      onChange={(e)=>setInput(e.target.value)} 
      />
    </div>
  )
}

export default Challenge