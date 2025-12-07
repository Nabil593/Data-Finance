import React from 'react'

const Newsletter = () => {
  return (

    <div className="w-full p-16 text-white">
  <div className="w-full mx-auto flex flex-col lg:flex-row gap-10 justify-center  text-center lg:text-left">

    {/* LEFT */}
    <div className="w-full lg:w-1/2">
      <p className="font-bold text-[20px] sm:text-2xl md:text-3xl">
        Want tips & tricks to optimize your flow?
      </p>
      <p className="text-sm sm:text-base md:text-lg mt-2">
        Sign up to our newsletter and stay up to date
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex flex-col ">

      {/* EMAIL INPUT + BUTTON */}
      <div className="flex flex-col sm:flex-row  items-center lg:items-start gap-3 w-full mb-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white text-black outline-none p-3 rounded-lg w-full sm:w-auto sm:flex-1"
        />
        <button className="bg-[#00df9a] md:p-3 sm:p-3 py-2 rounded-lg w-full sm:w-auto font-semibold">
          Notify me 
        </button>
      </div>

      <p className="text-xs sm:text-sm md:text-base">
        We care about the protection of your data.
      </p>
      <p className="text-xs sm:text-sm md:text-base text-center lg:text-left">
        Read our
        <a href="#" className="underline text-[#00df9a] ml-1">
          Privacy Policy
        </a>
      </p>
    </div>

  </div>
</div>


  )
}

export default Newsletter;