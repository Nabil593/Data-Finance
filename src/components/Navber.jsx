import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navber = () => {

    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);


  return (
    <nav className='w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-12 mx-auto text-white'>

        {/* LOGO */}
        <h1 className='text-[20px] md:text-2xl font-bold text-[#00df9a]'>DATA-FINANCE.</h1>

        {/* DESTOP MENU */}
        <ul className='md:flex gap-8 hidden text-[18px]'>
            <li className='hover:text-[#00df9a] cursor-pointer'>Home</li>
            <li className='hover:text-[#00df9a] cursor-pointer'>Company</li>
            <li className='hover:text-[#00df9a] cursor-pointer'>Recources</li>
            <li className='hover:text-[#00df9a] cursor-pointer'>About</li>
            <li className='hover:text-[#00df9a] cursor-pointer'>Contact</li>
        </ul>

        {/* HAMBURGER ICON FOR MOBILE */}
        <div className='md:hidden cursor-pointer z-20' onClick={toggleNav}>
            {
                !navOpen ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>
            }
        </div>

        {/* MOBILE MENU */}
       <div className={`fixed top-0 right-0 w-[50%] h-full bg-[#0b0b0b] transition-all ease-in-out duration-500 ${ navOpen ? 'translate-x-0' : 'translate-x-full' } md:hidden`}>
         <ul className='pt-24 flex flex-col gap-2 text-[18px]'>
            <li className='p-4 border-b-2 border-gray-800 hover:text-[#00df9a] cursor-pointer'>Home</li>
            <li className='p-4 border-b-2 border-gray-800 hover:text-[#00df9a] cursor-pointer'>Company</li>
            <li className='p-4 border-b-2 border-gray-800 hover:text-[#00df9a] cursor-pointer'>Recources</li>
            <li className='p-4 border-b-2 border-gray-800 hover:text-[#00df9a] cursor-pointer'>About</li>
            <li className='p-4 border-b-2 border-gray-800 hover:text-[#00df9a] cursor-pointer'>Contact</li>
        </ul>
       </div>
        
    </nav>
  )
}

export default Navber;