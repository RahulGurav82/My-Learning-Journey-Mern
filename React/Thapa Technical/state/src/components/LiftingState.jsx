import React, {useState} from 'react'
import {InputValue, InputText} from './Childs'

const LiftingState = () => {

    const [input, setInput] = useState("");
  return (
    <div>
        <InputValue input={input} setInput={setInput}  />
        <InputText input={input} />
    </div>
  )
}

export default LiftingState