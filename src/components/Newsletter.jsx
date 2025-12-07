import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white p-8 pt-18 flex items-center justify-evenly h-auto'>
        <div>
        <p className='font-bold md:text-3xl sm:text-2xl text-[20px]'>Wnat tips & tricks optimize your flow?</p>
        <p className='md:text-[16px] sm:text-[14px] text-[12px]'>Sign up our newsletter stay up to date</p>
        </div>
        <div className='p-8 mx-auto flex  justify-center flex-wrap gap-4'>
            <input type='email' placeholder='Enter your email' className='bg-white text-black rounded-[10px] md:py-4 sm:py-3 py-2 md:px-8 sm:px-4 px-3'/>
            <button type='submit' className='bg-[#00df9a] text-black rounded-[10px] md:py-4 sm:py-3 py-2 md:px-8 sm:px-4 px-3 font-bold'>Notify me</button>
            <div>
                <p className='md:text-[16px] sm:text-[14px] text-[12px]'>We care about the protection pf your data. REad our </p>
            <a href='#' className='text-[#00df9a] underline'>Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;