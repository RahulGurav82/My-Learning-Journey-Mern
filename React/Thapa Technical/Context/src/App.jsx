import React from 'react'
import Home from './Home'
import { BioProvider } from './Context'

const App = () => {
  return (
    <BioProvider>
      <Home />
    </BioProvider>

  )
}

export default App
