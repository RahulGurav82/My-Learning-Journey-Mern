import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

const AppLayout = () => {

  const navigate  = useNavigation();
  if (navigate.state === "loading") return <h1>Loading...</h1>;
  
  return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
  )
}

export default AppLayout