import React from 'react'

const App = () => {
  const age = 2
  return (
    <div>
      {/* <p>{age >= 18 ? "Adult" : "Minnor"}</p> */}
      { age >= 18 && <WatchBtn />}
    </div>
  );


}

const WatchBtn = () => (
  <button>Watch Now</button>
)

export default App