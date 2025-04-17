import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
      <>
        <header className='shadow-md'>
          <div className='bg-gray-800 text-white max-w-full h-15  px-16 flex items-center justify-between'>
           <p>Get Reahul Membership. 30-day return or refund guranatee</p>
           <div className='flex gap-4 text-blue-500'>
            <a href="">Sing In</a>
            <a href="">Sing UP</a>
           </div>
          </div>

          <div>
            <nav className='flex items-center justify-between h-15 px-16'>
              <a href="">Rahul Gurav</a>

              <div className='flex gap-4 text-black'>
                <NavLink to={"/"}   className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >HOME</NavLink>
                <NavLink to={"/about"}>ABOUT</NavLink>
                <NavLink to={"/movie"}>MOVIES</NavLink>
                <NavLink to={"/contact"}>CONTACT</NavLink>
              </div>
            </nav>
          </div>
          
        </header>
      </>
  )
}

export default Header
