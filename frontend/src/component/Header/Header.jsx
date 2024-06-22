import React from 'react'
import '../../App.css'

function Header() {



  return (
    <>
      <div className='bg-[url(/header_img.png)] h-[60vh] relative bg-cover flex items-center bg-center rounded-xl bg-no-repeat'>
        <div className='flex flex-col px-8 text-center sm:text-left w-[100%] gap-2 z-10 relative sm:w-[60%]'>
          <img src="./" alt="" />
          <h2 className='text-5xl text-white font-bold font-sans'>The Best Food Place is Here</h2>
          <p className='text-xl text-white font-bold font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur, voluptatem ullam error architecto dicta!</p>
          <button className='text-white w-[8rem] border-2 border-[#ec3131] hover:bg-[#ec3131] hover:text-white border-solid bg-transparent rounded-2xl py-2 px-5'>View More</button>
        </div>
        <div className='h-[60vh] bg-black opacity-65 w-[100%] absolute top-[0%] rounded-xl'></div>
      </div>
      <hr className='h-[2px] bg-gray-600 mt-4' />
    </>
  )
}

export default Header