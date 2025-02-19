import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import "/node_modules/flag-icons/css/flag-icons.min.css";


const Navbar = () => {
  return (
    <div className='py-3 px-16  text-blue-950'>
        <div 
        className='min-h-24 w-full flex justify-between items-center 
        '>
            <div className='flex gap-4 items-center'>
                <div 
                className='w-14 h-14 bg-blue-950 text-white  
                font-extrabold flex items-center justify-center rounded-full 
                text-4xl -rotate-45'>
                    R
                </div>
                <div className='text-3xl font-medium '>
                    Rahul Gurav
                </div>
            </div>

            <div>
                <ul className='flex gap-12 font-medium text-xl'>
                    <li><a href="#">Home</a></li>
                    <li className='group relative cursor-pointer'>
                        <a href="#" className='flex items-center gap-1'>
                        Google Ads Services

                            <span>
                                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                            </span>
                        </a>

                        <div className='absolute hidden group-hover:block z-[9999] rounded-md bg-white text-black shadow-md w-[240px]'>
                            <ul>
                                <li>
                                    <a href="" className='inline-block w-full rounded-md p-2'>Google Ads Services</a>
                                    <a href="" className='inline-block w-full rounded-md p-2'>Google Ads Services</a>
                                    <a href="" className='inline-block w-full rounded-md p-2'>Google Ads Services</a>
                                    <a href="" className='inline-block w-full rounded-md p-2'>Google Ads Services</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Google Ads resources</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <a href="#" className='flex gap-1'>
                            <span className="fi fi-in fis"></span>
                            IN
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar