import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-16'>
        <h1 className='text-center text-4xl font-bold mt-8'>
          Welcome To My Website
        </h1>
      </div>
    </div>
  );
}

export default App