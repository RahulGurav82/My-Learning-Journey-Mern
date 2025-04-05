import React from 'react'

const App = () => {

  function handleOnClickMe(user) {
    alert(`welcome user ${user}`);
  }

  return (
    <div>
      <button onClick={handleOnClickMe}>Click Me</button>
      <button onClick={ () => handleOnClickMe("Rahul")}>Click Me 2</button>
    </div>
  )
}

export default App