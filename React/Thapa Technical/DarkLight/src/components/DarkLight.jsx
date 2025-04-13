import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from "../context/DarkLight"

const DarkLight = () => {
    const {theme, handleDarkMode} = useContext(ThemeContext)

  return (
    <div className = {`${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <h1 className=''>Dark Light Mode In React Using Tailwindcss</h1>
      <p>This Is The Way we can implement</p>
      <button onClick={handleDarkMode}>
        {theme === "dark" ? "switch to light" :  "switch to dark"}
        </button>
    </div>
  )
}

export default DarkLight
