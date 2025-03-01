import React from 'react'
import bobImage from '../../assets/bobImage.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className='w-full h-[550px] bg-[#FEF3DF] flex px-32 pt-32 gap-24'>

        <div className='space-y-9'>
            <p className='text-5xl font-semibold text-primary leading-[3.5rem]'>Your Google Ads <br /> campaigns <span className='underline'>perform better</span> <br />with me behind the wheel.</p>
            <p className='text-xl text-slate-900'>I’ll get the most out of your Google Ads campaigns or teach you <br /> the intricacies so you can do it yourself!</p>
            <Button />
        </div>

        {/* height: 150px; 
        width: 300px; 
        background: #000;
        border-top-left-radius: 150px;
        border-top-right-radius: 150px; */}

        <div className='bg-[#D7C49E] h-[250px] w-[500px] rounded-tl-[250px] rounded-tr-[250px] mt-[171px] relative'>
            <img src={bobImage} alt="bob Image" className='absolute h-96  pl-[25%] -top-20' />
        </div>
    </div>
  )
}

export default Hero