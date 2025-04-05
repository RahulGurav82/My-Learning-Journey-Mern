import React from 'react'
import { EventProps } from './components/EventProps';

const App = () => {

  function handleOnClickMe(user) {
    alert(`welcome user ${user}`);
  }

  return (
    <div>
      {/* <button onClick={handleOnClickMe}>Click Me</button>
      <button onClick={ () => handleOnClickMe("Rahul")}>Click Me 2</button> */}

      <EventProps />
      
    </div>
  )
}

export default App