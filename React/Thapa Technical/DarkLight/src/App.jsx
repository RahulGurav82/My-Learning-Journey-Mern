import React from 'react'
import { ThemeProvider } from './context/DarkLight'
import DarkLight from './components/DarkLight'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </div>
  )
}

export default App
