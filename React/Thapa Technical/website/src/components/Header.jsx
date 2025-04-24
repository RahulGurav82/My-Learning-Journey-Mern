import React, { useState } from 'react'
import { Menu } from 'lucide-react';

const Header = () => {

    const [toggle, setToggle] = useState("close")
  return (
    <>
        <nav>
            <div className='logo'>
                <p>Rahul Gurav</p>
                <span></span>
            </div>
            <div className={toggle ? 'desk-menu' : 'mob-menu show'}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact me</a></li>
                </ul>
            </div>
            <a className='hm-menu' onClick={()=> setToggle(!toggle)}>
                <Menu />
            </a>
        </nav>
    </>
  )
}

export default Header