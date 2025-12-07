import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='text-center w-full mt-20'>
            <p className='text-[#00df9a] font-bold sm:text-[16px] md:text-[20px] text-[12px]'>GROW WITH DATA ANALYTICS</p>
            <h1 className='text-4xl md:text-7xl sm:text-6xl font-bold py-2'>Grow with Data.</h1>
            <div>
            <span className='text-[24px] md:text-5xl sm:text-4xl font-bold'>Fast, flexible financing for </span>
            <ReactTyped className='text-[#00df9a] font-bold text-[24px] md:text-5xl' strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
            </div>
            <p className='font-bold py-2 text-gray-500 px- text-sm md:text-[24px] sm:text-[18px]'>Monitor your data analytics to increase revenue for <br/> BTB, BTC & SASS platforms.</p>
           <button className="cursor-pointer mx-auto mt-3 bg-[#00df9a] text-black font-bold md:text-[20px] sm:text-[18px] text-[16px] md:py-4 sm:py-3 py-2 md:px-10 sm:px-5 px-4 rounded-[10px]  hover:text-white hover:bg-gray-900 transition duration-400">
          Get Started
          </button>

        </div>
    </div>
  )
}

export default Hero;