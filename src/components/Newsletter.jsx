import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full p-16 text-center text-white flex gap-8 md:flex-row sm:flex-row flex-col items-center justify-around'>

      <div className='text-white'>
        <p className='font-bold md:text-3xl sm:text-2xl text-[20px]'>Want tips & tricks to optimize your flow?</p>
        <p className='md:text-[16px] sm:text-[14px] text-[12px]'>Sign up to our newsletter and stay up to date</p>
      </div>

      <div className='flex flex-col gap-3'>
        <input type='email' placeholder='Enter your email'className='bg-white text-black outline-none p-3 rounded-[10px]'/>
        <button className='bg-[#00df9a] p-2 rounded-[10px]'>Notify me</button>
        <p className='md:text-[16px] sm:text-[14px] text-[12px]'>We care about of your protection of your data</p>
        <p className='md:text-[16px] sm:text-[14px] text-[12px]'>Read our 
          <a href='#' className='underline text-[#00df9a] mb-2 '>Privacy Policy</a>
        </p>
      </div>

    </div>
  )
}

export default Newsletter;