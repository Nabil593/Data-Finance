import React from 'react'
import image from '../assets/laptop.png';

const Analytics = () => {
  return (
    <div className='bg-white w-full mx-h-[400px] mt-30 mx-auto'>
         <div className='px-10 py-6 flex md:flex-row sm:flex-col flex-col gap-6 items-center justify-evenly h-auto'>
            <div>
                <img src={image} alt="Analytics-image" className='w-[500px] mx-auto'/>
            </div>
            <div>
                <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <p className='text-black font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</p>
                <p className='max-w-[500px] text-gray-700 font-semibold md:text-[16px] sm:text-[14px] text-[12px]'>Managing data analytics centrally allows businesses to store, process, and analyze all data in one unified system. This improves accuracy, ensures consistent reporting, enhances collaboration across teams, and helps make faster, smarter, and data-driven decisions.</p>
                <button className="cursor-pointer mx-auto mt-3 bg-[#00df9a] text-white font-bold md:text-[18px] sm:text-[16px] text-[14px] md:py-4 sm:py-3 py-2 md:px-8 sm:px-4 px-3 rounded-[10px] hover:bg-gray-900 transition duration-400">
                Get Started
                </button>
            </div>
         </div>
    </div>
  )
}

export default Analytics;