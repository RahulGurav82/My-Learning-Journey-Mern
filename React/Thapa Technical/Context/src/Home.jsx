import React, {useContext} from 'react'
import {BioContext} from './Context/index'
const Home = () => {

  const {name, Age} = useContext(BioContext)
  return (
    <div>
      Context Provider Data {name} & I Am {Age} yrs old
    </div>
  )
}

export default Home
